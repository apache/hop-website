#!/usr/bin/env node
// Licensed to the Apache Software Foundation (ASF) under one or more
// contributor license agreements.  See the NOTICE file distributed with
// this work for additional information regarding copyright ownership.
// The ASF licenses this file to You under the Apache License, Version 2.0
// (the "License"); you may not use this file except in compliance with
// the License.  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * The WCAG 2.1 criteria that can be checked from the built HTML, over every
 * page in both halves of the site.
 *
 * What this CANNOT check, and what still needs a person:
 *   1.4.4  resize text to 200%
 *   1.4.10 reflow at 320px
 *   1.4.12 text spacing
 *   2.1.1  keyboard operability, and 2.1.2 no keyboard trap
 *   2.4.3  focus order
 *   whether alt text is meaningful rather than merely present - a good deal of
 *   the upstream manual's alt text is filename slugs, which passes here and
 *   fails a human
 *
 * Contrast lives in check-contrast.mjs, which checks the tokens rather than
 * the output.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.argv[2] || 'public'

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (p.endsWith('.html')) out.push(p)
  }
  return out
}

const strip = (html) => html.replace(/<[^>]+>/g, '').trim()

const CHECKS = [
  ['3.1.1', 'no lang on <html>', (s) => (/<html[^>]+lang=/.test(s) ? [] : [''])],
  ['2.4.2', 'missing or empty <title>', (s) => (/<title>[^<]{2,}<\/title>/.test(s) ? [] : [''])],
  ['2.4.1', 'no skip link', (s, b) => (b.includes('skip-link') ? [] : [''])],
  ['1.1.1', '<img> without alt', (s, b) =>
    [...b.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).filter((t) => !/\balt=/.test(t))],
  ['4.1.2', '<button> without an accessible name', (s, b) =>
    [...b.matchAll(/<button\b([^>]*)>([\s\S]{0,400}?)<\/button>/g)]
      .filter(([, attrs, inner]) => !strip(inner) && !/aria-label|aria-labelledby/.test(attrs))
      .map((m) => m[0].slice(0, 70))],
  // Nested <a> is invalid HTML and browsers recover from it unpredictably. It
  // happens where an upstream page puts an inline anchor inside a heading and
  // sectlinks then wraps it. Reported separately so it is not mistaken for an
  // unnamed link, which is how the naive check reads it.
  ['html', 'nested <a> inside a link (invalid, upstream content)', (s, b) =>
    [...b.matchAll(/<a\b[^>]*>(?:(?!<\/a>)[\s\S]){0,400}?<a\b/g)].map((m) => m[0].slice(0, 90))],
  ['2.4.4', 'link without an accessible name', (s, b) =>
    [...b.matchAll(/<a\b([^>]*href[^>]*)>([\s\S]{0,500}?)<\/a>/g)]
      .filter(([, attrs, inner]) => {
        // an image's alt text names the link that wraps it
        const alt = [...inner.matchAll(/<img\b[^>]*\balt="([^"]*)"/g)].map((m) => m[1]).join(' ').trim()
        // a nested <a> truncates `inner` at the wrong closing tag; counted above
        if (/<a\b/.test(inner)) return false
        return !strip(inner) && !alt && !/aria-label|aria-labelledby|title=/.test(attrs)
      })
      .map((m) => m[0].slice(0, 70))],
  ['1.3.1', 'form control without a label', (s, b) =>
    [...b.matchAll(/<(?:input|select|textarea)\b[^>]*>/g)].map((m) => m[0])
      .filter((t) => {
        if (/type="hidden"/.test(t)) return false
        const id = /id="([^"]+)"/.exec(t)
        return !(id && b.includes(`for="${id[1]}"`)) && !/aria-label|aria-labelledby/.test(t)
      })],
]

const files = walk(ROOT)
const found = new Map()

for (const f of files) {
  const s = readFileSync(f, 'utf8')
  const bm = /<body[\s\S]*<\/body>/.exec(s)
  if (!bm) continue
  for (const [sc, label, run] of CHECKS) {
    const hits = run(s, bm[0])
    if (!hits.length) continue
    const key = `${sc} ${label}`
    if (!found.has(key)) found.set(key, { n: 0, where: f, sample: hits[0] })
    found.get(key).n += hits.length
  }
}

console.log(`checked ${files.length} pages in ${ROOT}`)
if (!found.size) {
  console.log('no failures on the criteria this can check')
  process.exit(0)
}
console.error('')
for (const [k, v] of [...found].sort((a, b) => b[1].n - a[1].n)) {
  console.error(`  ${String(v.n).padStart(5)}  ${k}`)
  console.error(`         e.g. ${v.where.slice(ROOT.length + 1)}${v.sample ? `  ${v.sample}` : ''}`)
}
process.exit(1)

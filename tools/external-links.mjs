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
 * Open links that leave the site in a new tab.
 *
 * This runs over the built HTML rather than in either generator, because the
 * site has two of them: Astro renders the pages and the blog from Markdown and
 * .astro components, Antora renders the manuals through Asciidoctor. A link in
 * the footer, a link in a blog post and a link in a transform's documentation
 * would otherwise need three separate mechanisms and would drift apart. One
 * pass over the output is the only place that sees all of them.
 *
 * Internal means hop.apache.org and every relative or site-absolute path;
 * anything else with an http(s) scheme is external, ASF sites included -
 * www.apache.org and privacy.apache.org are different sites. mailto:, #anchors
 * and the like are left alone, as is any link that already sets target, which
 * a few pages in the manual do by hand.
 *
 * rel="noopener" goes on with it. Current browsers imply it for target=_blank,
 * but saying it keeps the guarantee independent of the browser, and it merges
 * into an existing rel rather than replacing it.
 */

import { readdir, readFile, writeFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

const ROOT = process.argv[2] || 'public'
const INTERNAL = new Set(['hop.apache.org', 'www.hop.apache.org', 'localhost', '127.0.0.1'])

const walk = async (dir, out = []) => {
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry)
    if ((await stat(full)).isDirectory()) await walk(full, out)
    else if (full.endsWith('.html')) out.push(full)
  }
  return out
}

const hostOf = (href) => {
  try { return new URL(href).host.toLowerCase() } catch { return null }
}

const rewriteTag = (tag) => {
  const href = /\shref="([^"]*)"/.exec(tag)
  if (!href || !/^https?:\/\//i.test(href[1])) return null

  const host = hostOf(href[1])
  if (!host || INTERNAL.has(host)) return null
  if (/\starget=/.test(tag)) return null

  let out = tag.slice(0, -1)
  const rel = /\srel="([^"]*)"/.exec(out)
  if (rel) {
    const values = new Set(rel[1].split(/\s+/).filter(Boolean))
    values.add('noopener')
    out = out.replace(rel[0], ` rel="${[...values].join(' ')}"`)
  } else {
    out += ' rel="noopener"'
  }
  return `${out} target="_blank">`
}

const files = await walk(ROOT)
let changed = 0
let rewritten = 0
const hosts = new Set()

for (const file of files) {
  const html = await readFile(file, 'utf8')
  let hit = 0
  const next = html.replace(/<a\b[^>]*>/g, (tag) => {
    const out = rewriteTag(tag)
    if (!out) return tag
    hit++
    hosts.add(hostOf(/\shref="([^"]*)"/.exec(tag)[1]))
    return out
  })
  if (!hit) continue
  await writeFile(file, next)
  changed++
  rewritten += hit
}

console.log(
  `external links: ${rewritten} opened in a new tab across ${changed} of ${files.length} pages` +
  ` (${hosts.size} hosts)`,
)

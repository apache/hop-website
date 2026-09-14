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
 * Syntax highlighting for the manuals, at build time.
 *
 * "source-highlighter: highlight.js" only tags the markup - Asciidoctor emits
 * <code class="language-sql hljs"> and leaves the colouring to a script in the
 * browser. The old UI shipped that script; this one has no bundler to build it
 * with, so the docs went out monochrome.
 *
 * Doing it here instead of in the browser means no vendored library on the
 * page, nothing to run before the code is readable, and no theme flashing on a
 * dark-mode load. It also keeps the markup class-based, so the palette stays in
 * CSS and can answer to the theme - which is the whole reason for not reaching
 * for Shiki, whose colours are baked into inline styles.
 *
 * A block is skipped when its language is unknown to highlight.js, and when it
 * already contains markup, which is how Asciidoctor writes callouts - those are
 * anchors the highlighter would eat.
 *
 * The language label goes on here too, rather than in the browser: it is
 * information about the block, so it should be in the page whether or not the
 * script runs, and it is wanted on the blocks in languages that cannot be
 * highlighted just as much as on the ones that can.
 */

import { readdir, readFile, writeFile, stat } from 'node:fs/promises'
import { join } from 'node:path'
import hljs from 'highlight.js'

const ROOT = process.argv[2] || 'public'
// The label is part of the match, so running this twice replaces it instead of
// stacking a second one in front of the block.
const BLOCK = /(?:<div class="code-lang"[^>]*>[^<]*<\/div>)?(<pre class="highlightjs[^"]*"><code class="language-([^"\s]+) hljs"([^>]*)>([\s\S]*?)<\/code><\/pre>)/g

// "none" and "text" are Asciidoctor's way of saying a block has no language,
// so there is nothing to name.
const UNLABELLED = new Set(['none', 'text'])
const label = (lang) => {
  if (UNLABELLED.has(lang)) return ''
  labelled++
  return `<div class="code-lang" data-pagefind-ignore>${lang}</div>`
}

const walk = async (dir, out = []) => {
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry)
    if ((await stat(full)).isDirectory()) await walk(full, out)
    else if (full.endsWith('.html')) out.push(full)
  }
  return out
}

// Asciidoctor escapes the source before writing it; highlight.js escapes again
// on the way out, so this has to come back off first.
const decode = (s) => s
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
  .replace(/&amp;/g, '&')

const files = await walk(ROOT)
const done = new Map()
let labelled = 0
const skipped = new Map()
let changed = 0

for (const file of files) {
  const html = await readFile(file, 'utf8')
  let hit = 0
  const next = html.replace(BLOCK, (whole, block, lang, attrs, body) => {
    hit++
    const tag = label(lang)
    // Marked on the way out, so a second run recognises its own work. Inferring
    // it from the presence of spans is not enough: a block can highlight to no
    // spans at all, and re-decoding would then keep rewriting its entities.
    if (block.includes('is-highlighted')) {
      skipped.set('already highlighted', (skipped.get('already highlighted') || 0) + 1)
      return tag + block
    }
    // Callouts are anchors Asciidoctor writes into the source; highlighting
    // would eat them.
    if (/<[a-zA-Z]/.test(body)) {
      skipped.set('has callouts', (skipped.get('has callouts') || 0) + 1)
      return tag + block
    }
    if (!hljs.getLanguage(lang)) {
      skipped.set(lang, (skipped.get(lang) || 0) + 1)
      return tag + block
    }
    const { value } = hljs.highlight(decode(body), { language: lang, ignoreIllegals: true })
    done.set(lang, (done.get(lang) || 0) + 1)
    return `${tag}<pre class="highlightjs highlight is-highlighted"><code class="language-${lang} hljs"${attrs}>${value}</code></pre>`
  })
  if (!hit || next === html) continue
  await writeFile(file, next)
  changed++
}

const total = [...done.values()].reduce((a, b) => a + b, 0)
console.log(`code blocks: ${total} highlighted, ${labelled} labelled, across ${changed} pages` +
  ` (${[...done.keys()].sort().join(', ')})`)
if (skipped.size) {
  console.log(`  not highlighted: ${[...skipped].map(([k, v]) => `${v} ${k}`).join(', ')}`)
}

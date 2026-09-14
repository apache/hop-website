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
 * Validate site-absolute links and asset references against the built site.
 *
 * link-checker resolves every href relative to the page it found it on, so a
 * correct "/img/foo.png" is reported as a broken "blog/2020/02/img/foo.png".
 * Its --url-ignore can silence that, but then nothing checks those links at
 * all - and after the Astro split most internal links are site-absolute.
 *
 * So link-checker keeps doing relative links and anchors, and this does the
 * absolute half: every href/src starting with a single slash must resolve to a
 * file under the output directory.
 */

import { readdir, readFile, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, sep } from 'node:path'

const ROOT = process.argv[2] || 'public'

// Paths served by ASF infrastructure or rewritten by .htaccess rather than
// emitted into the build.
const EXTERNAL = [
  // Genuinely protocol-relative: the authority has a dot, so it is a host.
  // "//community/commercial/" is NOT one of these - it resolves to the host
  // "community", which does not exist, and it is how a site-absolute path gets
  // mistyped. Those are checked as paths below.
  /^\/\/[^/]*\.[^/]/,
  /^\/tech-manual\//,      // folded into the manuals; .htaccess 301s these
  /^\/hop\//,              // Hop Server REST endpoints documented in the manual
]

const walk = async (dir, out = []) => {
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry)
    if ((await stat(full)).isDirectory()) await walk(full, out)
    else if (full.endsWith('.html')) out.push(full)
  }
  return out
}

const resolves = (urlPath) => {
  // A "//path" with no dot in the authority is a mistyped site-absolute path.
  const clean = decodeURIComponent(urlPath.replace(/^\/\//, '/').split('#')[0].split('?')[0])
  if (clean === '/') return existsSync(join(ROOT, 'index.html'))
  const target = join(ROOT, clean)
  if (existsSync(target)) {
    return clean.endsWith('/') ? existsSync(join(target, 'index.html')) : true
  }
  // extensionless directory route, e.g. /community/team
  return existsSync(join(target, 'index.html')) || existsSync(`${target}.html`)
}

const files = await walk(ROOT)
const broken = new Map()
let checked = 0

for (const file of files) {
  const html = await readFile(file, 'utf8')
  const refs = [...html.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map((m) => m[1])
  for (const ref of refs) {
    if (EXTERNAL.some((re) => re.test(ref))) continue
    checked++
    if (resolves(ref)) continue
    const page = file.slice(ROOT.length + 1).split(sep).join('/')
    if (!broken.has(ref)) broken.set(ref, new Set())
    broken.get(ref).add(page)
  }
}

console.log(`checked ${checked} site-absolute links across ${files.length} pages in ${ROOT}`)
if (!broken.size) {
  console.log('all resolve')
  process.exit(0)
}
console.error(`\n${broken.size} broken:`)
for (const [ref, pages] of [...broken].slice(0, 40)) {
  const list = [...pages]
  console.error(`  ${ref}\n      from ${list.slice(0, 3).join(', ')}${list.length > 3 ? ` (+${list.length - 3} more)` : ''}`)
}
process.exit(1)

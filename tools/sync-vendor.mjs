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
 * Copy the browser-side files of AsciiDoc extensions into the Antora UI.
 *
 * @asciidoctor/tabs is two halves: an Asciidoctor extension that converts
 * "[tabs]" into a tablist and panels at build time, which the playbook already
 * loads, and a script that makes them switch in the browser. Only the first
 * half was here, so every tabbed block rendered as its panels stacked one after
 * another with nothing to click.
 *
 * Copied at build time rather than committed, so the version is whatever
 * package.json resolves and its licence travels with the dependency instead of
 * being vendored into an ASF repository. ui/js is therefore generated, like
 * ui/css/tokens.css and the two nav partials.
 */

import { mkdir, copyFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname } from 'node:path'

const require = createRequire(import.meta.url)

const ASSETS = [
  ['@asciidoctor/tabs/dist/js/tabs.js', 'ui/js/tabs.js'],
  // Fetched by site.js only on a page that has a diagram - see the mermaid
  // block there. It is several megabytes, so it must never be a script tag in
  // the layout.
  ['mermaid/dist/mermaid.min.js', 'ui/js/mermaid.js'],
]

for (const [from, to] of ASSETS) {
  await mkdir(dirname(to), { recursive: true })
  await copyFile(require.resolve(from), to)
  console.log(`sync-vendor: ${to} from ${from}`)
}

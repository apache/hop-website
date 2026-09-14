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
 * shared/ is the single source for the design system. Astro imports it
 * directly and bundles it; Antora serves its UI as plain files and cannot
 * reach outside the UI directory, so the shared stylesheets are copied in
 * before the Antora build.
 *
 * This is the seam that keeps the two halves looking like one site. If it
 * stops running, the docs drift away from the marketing pages - so it runs as
 * part of `npm run build`, not by hand.
 */
import { copyFileSync, readFileSync } from 'node:fs'

/*
 * Before copying anything, check that every stylesheet's comments close where
 * they say they do.
 *
 * CSS gives no way to escape a comment terminator inside comment text, so
 * writing one - describing the class pairs "halign-" and "valign-" with a
 * wildcard and a slash between them, say - ends the comment early. The prose
 * after it is then read as a selector, and it swallows the whole of the next
 * rule without a word from any tool: the file still parses, the page still
 * renders, and one rule has quietly gone. That is how border-collapse went
 * missing from the documentation tables, which took a while to find because
 * everything either side of it was working.
 *
 * An unbalanced count is the symptom, and it is cheap to check on every build.
 * This comment is written the long way round for the same reason.
 */
const SHEETS = ['shared/tokens.css', 'shared/chrome.css', 'ui/css/site.css']

for (const sheet of SHEETS) {
  const css = readFileSync(sheet, 'utf8')
  const opens = css.split('/*').length - 1
  const closes = css.split('*/').length - 1
  if (opens !== closes) {
    console.error(
      `sync-tokens: ${sheet} has ${opens} comment openings and ${closes} closings.` +
      ' A "*/" inside comment text ends it early and the rule after it is lost.',
    )
    process.exit(1)
  }
}

for (const name of ['tokens.css', 'chrome.css']) {
  copyFileSync(`shared/${name}`, `ui/css/${name}`)
  console.log(`sync-tokens: shared/${name} -> ui/css/${name}`)
}

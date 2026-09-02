#!/usr/bin/env node
/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * Remove Antora's build-clock <lastmod> from the generated sitemaps.
 *
 * Antora stamps ONE timestamp, to the millisecond, into every <lastmod> in
 * every sitemap - 6,821 identical values in sitemap-manual.xml alone. That is
 * the entire reason the asf-site deploy shows ~6,943 changed lines on a build
 * where nothing changed: measured across four consecutive deploys, the only
 * files touched were the two sitemaps plus a handful of real page changes.
 *
 * <lastmod> is optional in the sitemap protocol, and a uniform timestamp across
 * thousands of URLs is worse than absent - crawlers discount it as noise. Strip
 * it and a no-op build produces a genuinely empty diff.
 *
 * NOTE: the Jenkins deploy stage must guard `git commit` once this runs, since
 * that timestamp is currently the only thing guaranteeing a non-empty commit.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2] || 'public'
let files = 0, stripped = 0

for (const name of readdirSync(dir)) {
  if (!name.startsWith('sitemap') || !name.endsWith('.xml')) continue
  const path = join(dir, name)
  const before = readFileSync(path, 'utf8')
  const after = before.replace(/[ \t]*<lastmod>[^<]*<\/lastmod>\r?\n?/g, '')
  if (after !== before) {
    writeFileSync(path, after)
    files++
    stripped += (before.match(/<lastmod>/g) || []).length
  }
}
console.log(`stabilise-sitemap: stripped ${stripped} build-clock <lastmod> entries from ${files} sitemap(s)`)

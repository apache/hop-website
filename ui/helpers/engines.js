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

'use strict'

/*
 * Read a page's engine support out of its :page-engines: attribute.
 *
 *   :page-engines: Hop Engine=yes, Single Threaded=yes, Native Spark=no
 *
 * Each entry is a name and a state. The name is written out in full rather
 * than as an id, so a page can name an engine this template has never heard
 * of and it still renders: when a new engine arrives, the docs declare it and
 * nothing here needs changing. The order is the page's own.
 *
 * States are normalised to three - supported, unsupported, unknown - so the
 * docs can write yes/no, true/false or supported/unsupported and mean the same
 * thing. Anything unrecognised, "maybe" included, lands on unknown, which is
 * the honest reading of a value this does not understand.
 */

const SUPPORTED = new Set(['yes', 'true', 'supported'])
const UNSUPPORTED = new Set(['no', 'false', 'unsupported'])

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

module.exports = (value) => {
  if (typeof value !== 'string') return []
  return value.split(',').map((entry) => {
    const [name, raw] = entry.split('=')
    const label = (name || '').trim()
    if (!label) return null
    const state = (raw || '').trim().toLowerCase()
    return {
      label,
      slug: slug(label),
      state: SUPPORTED.has(state) ? 'supported' : UNSUPPORTED.has(state) ? 'unsupported' : 'unknown',
    }
  }).filter(Boolean)
}

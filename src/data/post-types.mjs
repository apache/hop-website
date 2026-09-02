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
 * The blog's real taxonomy.
 *
 * The posts carry 37 distinct categories, but most are version numbers used
 * once ("2.19", "1.0") and several are noise: "Pre-Releae" is a typo of
 * "Pre-Release", "Releases" duplicates "Release", "Apache Hop (Incubating" is
 * truncated, and "Apache Hop" / "Project Hop" appear on nearly everything and
 * so distinguish nothing.
 *
 * Underneath that there are three kinds of post, which is what a reader
 * actually wants to filter by.
 */

export const TYPES = {
  release: { label: 'Releases', slug: 'release' },
  roundup: { label: 'Roundups', slug: 'roundup' },
  news: { label: 'News', slug: 'news' },
}

const RELEASE = /^(release|releases|pre-release|pre-releae)$/i
const ROUNDUP = /^roundup$/i

export const typeOf = (post) => {
  const cats = (post.data.categories ?? '').split(',').map((c) => c.trim())
  if (cats.some((c) => ROUNDUP.test(c))) return 'roundup'
  if (cats.some((c) => RELEASE.test(c))) return 'release'
  // A few release posts predate the category being applied consistently.
  if (/\b(is available|released|release)\b/i.test(post.data.title)) return 'release'
  return 'news'
}

// First image in the body, used as the card thumbnail. 48 of 52 posts have one.
export const thumbOf = (post) => {
  const m = /!\[[^\]]*\]\((\/img\/[^)\s]+)\)/.exec(post.body ?? '')
  return m ? m[1] : null
}

/*
 * The card subtitle.
 *
 * 20 of 52 posts have a preview that just restates the title - "Apache Hop
 * 2.19 Released" under "Apache Hop 2.19 is available!" - and 21 have no
 * description at all. Falling back to the opening of the post covers the 15
 * that would otherwise have nothing, all of them 2021 roundups whose first
 * paragraph is a perfectly good summary.
 */
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

const excerpt = (body, max = 170) => {
  const text = String(body ?? '')
    .replace(/^---[\s\S]*?---/, '')            // front matter
    .replace(/<[^>]+>/g, ' ')                   // inline html and anchors
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')      // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')    // links, keeping the text
    .replace(/^#{1,6}\s+.*$/gm, ' ')            // headings
    .replace(/^[*>-]\s+/gm, ' ')                // list and quote markers
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  if (!text) return null
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '))
  return stop > 60 ? cut.slice(0, stop + 1) : cut.slice(0, cut.lastIndexOf(' ')) + '…'
}

export const previewOf = (post) => {
  const p = (post.data.preview ?? '').trim()
  const t = (post.data.title ?? '').trim()
  const redundant = p && (norm(t).includes(norm(p)) || norm(p).includes(norm(t)))
  if (p && !redundant) return p
  return (post.data.description ?? '').trim() || excerpt(post.body)
}

/*
 * Tags.
 *
 * The raw categories carry real signal - a version, whether it is a release -
 * mixed with noise. "Pre-Releae" is a typo, "Releases" duplicates "Release",
 * "Apache Hop (Incubating" is truncated, and "Apache Hop" sits on 41 of 52
 * posts, so as a tag it distinguishes nothing. Rather than edit 52 files, the
 * cleanup happens here and the front matter is left as the authors wrote it.
 */
const FIX = {
  'pre-releae': 'Pre-release',
  'pre-release': 'Pre-release',
  releases: 'Release',
  release: 'Release',
  roundup: 'Roundup',
  community: 'Community',
  mattermost: 'Mattermost',
  graduation: 'Graduation',
  asf: 'ASF',
  'apache hop (incubating': 'Project Hop',
  'project hop': 'Project Hop',
}
const DROP = new Set(['apache hop'])   // true of every post; not a tag

export const tagsOf = (post) => {
  const seen = new Set()
  return (post.data.categories ?? '')
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean)
    .map((c) => FIX[c.toLowerCase()] ?? c)
    .filter((c) => !DROP.has(c.toLowerCase()))
    .filter((c) => (seen.has(c.toLowerCase()) ? false : seen.add(c.toLowerCase())))
}

export const tagSlug = (tag) =>
  String(tag).toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '')

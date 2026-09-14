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

// /blog/index.xml is the URL Hugo published the feed on, and it has
// subscribers. No build clock in the output: a timestamp that changes every
// run is what makes a no-op deploy produce a diff.
import { getCollection } from 'astro:content'
import { site } from '../../site.config.mjs'

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function GET () {
  const posts = (await getCollection('blog'))
    .sort((a, b) => (b.data.publishDate?.getTime() ?? 0) - (a.data.publishDate?.getTime() ?? 0))
    .slice(0, 30)

  const updated = posts[0]?.data.publishDate?.toISOString()
  const entries = posts.map((p) => {
    const link = `${site.url}/blog/${p.id}/`
    return [
      '  <entry>',
      `    <title>${esc(p.data.title)}</title>`,
      `    <link href="${esc(link)}"/>`,
      `    <id>${esc(link)}</id>`,
      p.data.publishDate ? `    <updated>${p.data.publishDate.toISOString()}</updated>` : '',
      p.data.authors ? `    <author><name>${esc(p.data.authors)}</name></author>` : '',
      p.data.preview ? `    <summary>${esc(p.data.preview)}</summary>` : '',
      '  </entry>',
    ].filter(Boolean).join('\n')
  }).join('\n')

  const body = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom">',
    `  <title>${esc(site.title)}</title>`,
    `  <link href="${site.url}/blog/"/>`,
    `  <link rel="self" href="${site.url}/blog/index.xml"/>`,
    `  <id>${site.url}/blog/</id>`,
    updated ? `  <updated>${updated}</updated>` : '',
    entries,
    '</feed>',
  ].filter(Boolean).join('\n')

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}

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

import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/*
 * Content is Markdown, loaded by Astro's own glob loader.
 *
 * It was AsciiDoc behind a hand-written Asciidoctor loader, which meant the
 * page body arrived as one opaque HTML blob: no component could reach inside
 * it, headings had to be recovered with a regex to build a contents list, and
 * a table used as a page layout could only ever be restyled, never replaced.
 *
 * Markdown removes all of that. Astro supplies `headings` metadata, generates
 * heading ids, highlights code with Shiki, and MDX lets a page mix components
 * into prose where that is the right answer. The documentation stays in
 * AsciiDoc, in apache/hop, where Antora owns it.
 */

// Astro's default id generation slugifies, which turns
// blog/2020/05/preview-release-0.21 into preview-release-021 and silently
// breaks a live URL. The directory layout already is the URL, so keep it.
const idFromPath = ({ entry }) => entry.replace(/\.(md|mdx)$/, '').replace(/\/index$/, '')

const blog = defineCollection({
  loader: glob({ base: 'src/content/blog', pattern: '**/*.{md,mdx}', generateId: idFromPath }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date().optional(),
    authors: z.string().optional(),
    categories: z.string().optional(),
    preview: z.string().optional(),
  }),
})

const pages = defineCollection({
  loader: glob({ base: 'src/content/pages', pattern: '**/*.{md,mdx}', generateId: idFromPath }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lede: z.string().optional(),
  }),
})

export const collections = { blog, pages }

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
 * Admonitions for the Markdown half of the site.
 *
 * AsciiDoc had these built in ("TIP: ...", "[WARNING]"), and the prose
 * stylesheets kept rules for Asciidoctor's .admonitionblock markup long after
 * the content stopped being AsciiDoc - so every converted admonition rendered
 * as an ordinary bold line with nothing to distinguish it. Astro has no
 * admonition syntax of its own: that is Starlight, the docs theme, and the
 * docs here are Antora's.
 *
 * The syntax is GitHub's alert syntax:
 *
 *   > [!WARNING]
 *   > Body text, which may contain **markup**, links and lists.
 *
 * It is an ordinary blockquote, so it needs no parser extension and degrades
 * to something sensible anywhere the box is not styled - including GitHub's
 * own view of the source file.
 *
 * This is a Sätteri hast plugin rather than a remark one: Astro 7 parses
 * Markdown with Sätteri, and remarkPlugins now require pulling the whole
 * unified stack back in as a dependency.
 */

const TYPES = ['note', 'tip', 'important', 'warning', 'caution']
const MARKER = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\n?/

export const admonitions = {
  name: 'hop-admonitions',
  element: {
    // Filtering happens in Rust, so only blockquotes reach this visitor.
    filter: ['blockquote'],
    visit (node, ctx) {
      const first = node.children.find((c) => c.type === 'element')
      if (first?.tagName !== 'p') return

      const [text, ...rest] = first.children
      if (text?.type !== 'text') return
      const match = MARKER.exec(text.value)
      if (!match) return
      const type = match[1].toLowerCase()

      // The marker is its own line, so what follows it is the first line of
      // the body - unless the body starts in the next block, in which case
      // the text node is now empty and goes.
      const body = text.value.slice(match[0].length)
      const head = {
        ...first,
        children: body ? [{ type: 'text', value: body }, ...rest] : rest,
      }

      // A real paragraph rather than a ::before, so the word is read out by a
      // screen reader and indexed by Pagefind along with the body.
      const label = {
        type: 'element',
        tagName: 'p',
        properties: { className: ['admonition__label'] },
        children: [{ type: 'text', value: match[1] }],
      }

      // A div, not an aside: aside is a complementary landmark, and seven of
      // them scattered through the prose is seven unnamed landmarks in the
      // page outline. It is also the element Asciidoctor emits for an
      // admonition, so both halves of the site keep the same shape.
      ctx.replaceNode(node, {
        type: 'element',
        tagName: 'div',
        properties: { className: ['admonition', `admonition--${type}`] },
        children: [label, ...node.children.map((c) => (c === first ? head : c))],
      })
    },
  },
}

export const admonitionTypes = TYPES
export default admonitions

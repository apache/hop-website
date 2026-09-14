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
 * Turn a [mermaid] block into markup the browser can draw.
 *
 *   [mermaid]
 *   ....
 *   flowchart TB
 *     A --> B
 *   ....
 *
 * Without this, Asciidoctor has no idea what "mermaid" means and falls back to
 * rendering the block as a literal one - the diagram source, printed. That is
 * what docker-build.adoc has been doing since it was written, on this site and
 * on the published one, with no warning from anything: an unrecognised block
 * style is not an error.
 *
 * The conversion belongs here rather than in a pass over the built HTML,
 * because [mermaid] leaves no trace in that HTML. A literal block is a literal
 * block, and the only way to pick the diagrams back out would be to guess from
 * their contents.
 *
 * The output carries the source as text inside <pre class="mermaid">, which is
 * what mermaid.run() looks for. The block is left alone if the script never
 * loads, so the reader still sees the source rather than an empty space -
 * exactly what they see today.
 */

const escapeHtml = (s) => s
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

module.exports.register = (registry) => {
  registry.block(function () {
    const self = this
    self.named('mermaid')
    self.onContexts('listing', 'literal', 'open', 'paragraph')
    self.process((parent, reader, attrs) => {
      const source = reader.getLines().join('\n')
      const title = attrs.title ? `<div class="title">${escapeHtml(attrs.title)}</div>` : ''
      return self.createBlock(parent, 'pass',
        `<div class="mermaidblock">${title}<pre class="mermaid">${escapeHtml(source)}</pre></div>`)
    })
  })
}

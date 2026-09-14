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
 * Container directives, so a Markdown page can hand a block to CSS:
 *
 *   :::steps
 *   1. **[Discuss](#create-github-issue)**
 *      ...
 *   :::
 *
 * becomes <div class="steps">, and the styling lives with the layout rather
 * than in the content. AsciiDoc did this with block attributes ([cols="4"]);
 * this is the Markdown equivalent, and it keeps the content inside a
 * directive as ordinary Markdown - a real ordered list stays a real <ol>.
 *
 * Sätteri renders an unrecognised parent node as a bare <div>, so without
 * this the directive's name would be dropped and every block would look the
 * same. The `directive` feature is off by default and is enabled alongside
 * this plugin in astro.config.mjs.
 */

const NAME = /^[a-z][a-z0-9-]*$/

export const directives = {
  name: 'hop-directives',
  containerDirective (node, ctx) {
    if (!NAME.test(node.name)) return
    ctx.setProperty(node, 'data', {
      ...node.data,
      hName: 'div',
      hProperties: { class: node.name },
    })
  },
}

export default directives

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

import { defineConfig } from 'astro/config'

import { satteri } from '@astrojs/markdown-satteri'

import { admonitions } from './tools/satteri-admonitions.mjs'
import { directives } from './tools/satteri-directives.mjs'

export default defineConfig({
  site: 'https://hop.apache.org',

  // Root-level assets - favicons, doap_Hop.rdf, the Helm index.yaml,
  // .well-known/atproto-did, graphical_resources and every /img/** the blog
  // posts reference - are copied verbatim. This replaces ui.yml static_files
  // and restores /img/** to the URL the live site actually uses.
  publicDir: 'static',

  // Antora writes /manual and /dev-manual into this same directory afterwards,
  // with output.clean disabled, so the two halves land in one artifact.
  outDir: 'public',

  // Directory-style URLs, so /community/team/ keeps working exactly as it did
  // under Hugo. Antora's half keeps its own .html URLs, which is the contract
  // the 976 documentationUrl annotations in shipped Hop binaries depend on.
  build: { format: 'directory' },

  trailingSlash: 'always',

  // AsciiDoc had admonitions built in; Markdown does not, and neither does
  // Astro. See tools/satteri-admonitions.mjs.
  markdown: {
    processor: satteri({
      features: { directive: true },
      mdastPlugins: [directives],
      hastPlugins: [admonitions],
    }),
  },

  devToolbar: { enabled: false },
})

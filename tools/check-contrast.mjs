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
 * Check the design tokens against WCAG 2.1 contrast minimums, in both themes.
 *
 *   1.4.3  text            4.5:1   (3:1 for large text: 24px, or 18.66px bold)
 *   1.4.11 UI components   3:1     (borders, icons, focus rings, form outlines)
 *
 * This checks the palette, which is where a contrast failure becomes systemic.
 * It cannot catch a one-off colour hard-coded in a component, so the rule is
 * that components take colour from tokens and this file is the gate.
 */

import { readFileSync } from 'node:fs'

const css = readFileSync('shared/tokens.css', 'utf8')

const paletteFrom = (blockRe) => {
  const block = css.match(blockRe)
  if (!block) return {}
  const out = {}
  for (const m of block[1].matchAll(/--([a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})/g)) out[m[1]] = m[2]
  return out
}

const light = paletteFrom(/:root\s*\{([\s\S]*?)\}/)
const darkOverrides = paletteFrom(/:root\[data-theme="dark"\]\s*\{([\s\S]*?)\}/)
const dark = { ...light, ...darkOverrides }

const srgb = (hex) => {
  let h = hex.replace('#', '')
  if (h.length === 3) h = [...h].map((c) => c + c).join('')
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
}
const lum = (hex) => {
  const [r, g, b] = srgb(hex).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p)
  return (x + 0.05) / (y + 0.05)
}

/* Pairs that actually occur in the stylesheets, with the minimum each needs. */
const PAIRS = [
  // body text
  ['ink', 'ground', 4.5, 'body text on the page'],
  ['ink', 'surface', 4.5, 'body text on a card'],
  ['ink-2', 'ground', 4.5, 'secondary text on the page'],
  ['ink-2', 'surface', 4.5, 'secondary text on a card'],
  ['ink-2', 'surface-2', 4.5, 'secondary text on a chip'],
  ['ink-3', 'ground', 4.5, 'muted text (dates, counts, captions)'],
  ['ink-3', 'surface', 4.5, 'muted text on a card'],
  // links and accents
  ['link', 'ground', 4.5, 'links in prose'],
  ['link', 'surface', 4.5, 'links on a card'],
  ['accent', 'ground', 4.5, 'accent text'],
  ['accent', 'surface', 4.5, 'accent text on a card'],
  ['accent', 'surface-2', 4.5, 'accent text on a chip'],
  ['on-accent', 'accent', 4.5, 'button label on the accent fill'],
  ['on-accent', 'accent-hover', 4.5, 'button label, hovered'],
  // admonitions
  ['note', 'surface', 4.5, 'note admonition title'],
  ['tip', 'surface', 4.5, 'tip admonition title'],
  ['warning', 'surface', 4.5, 'warning admonition title'],
  ['caution', 'surface', 4.5, 'caution admonition title'],
  // syntax highlighting, which is text sitting on the code block's own ground
  ['hl-comment', 'code-bg', 4.5, 'code comments'],
  ['hl-keyword', 'code-bg', 4.5, 'code keywords'],
  ['hl-string', 'code-bg', 4.5, 'code strings'],
  ['hl-number', 'code-bg', 4.5, 'code numbers and literals'],
  ['hl-title', 'code-bg', 4.5, 'code function and class names'],
  ['hl-attr', 'code-bg', 4.5, 'code attributes and tags'],
  ['hl-type', 'code-bg', 4.5, 'code types and built-ins'],
  ['hl-meta', 'code-bg', 4.5, 'code metadata and punctuation'],
  ['ink', 'code-bg', 4.5, 'unhighlighted code'],
  ['ink-2', 'code-bg', 4.5, 'the language label on a code block'],
  // Fixed in both themes: a diagram keeps its own light canvas.
  ['diagram-ink', 'diagram-bg', 4.5, 'diagram source before it is drawn'],
  // 1.4.11 non-text contrast.
  // Only visual information *required to identify* a component or its state is
  // in scope. --rule and --rule-2 draw dividers and card edges, which are
  // decoration: remove them and the card is still identifiable by its content.
  // A control's border is different - it is the only thing that says "this is
  // an input" - so those use --control-border and are checked here.
  ['control-border', 'ground', 3, 'control border against the page'],
  ['control-border', 'surface', 3, 'control border on a card or the header'],
  ['control-border', 'surface-2', 3, 'control border on a tinted surface'],
  ['accent', 'ground', 3, 'focus ring on the page'],
  ['accent', 'surface', 3, 'focus ring on a card'],
]

let failures = 0
for (const [label, palette] of [['LIGHT', light], ['DARK', dark]]) {
  console.log(`\n${label}`)
  for (const [fg, bg, min, what] of PAIRS) {
    if (!palette[fg] || !palette[bg]) { console.log(`  ?      --${fg} / --${bg} not found`); continue }
    const r = ratio(palette[fg], palette[bg])
    const ok = r >= min
    if (!ok) failures++
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${r.toFixed(2).padStart(5)}:1 (needs ${min})  --${fg} on --${bg}  — ${what}`)
  }
}
console.log(`\n${failures} failure(s)`)
process.exit(failures ? 1 : 0)

# Website modernization — draft branch

A **working draft** of the Split-Concerns architecture from the website
investigation: Astro builds the marketing and blog pages, Antora keeps the
versioned documentation, and both publish into one directory behind one design
system.

It builds. It is not finished. Read "Not done yet" before forming an opinion.

## Try it

```sh
npm ci
npm run build:local      # Astro + one documentation branch (~70s)
npm run serve            # http://localhost:4000
npm run dev              # Astro only, hot reload
```

## Why this shape

| | Hugo + Antora (main) | This branch |
|---|---|---|
| Marketing/blog generator | Hugo 0.83.1 (May 2021) | Astro 7.2 |
| Documentation generator | Antora 3.0.1 | Antora 3.2 |
| Template languages | Go templates + Handlebars | Astro components + Handlebars |
| Asciidoctor engines | 2 (drifting) | 1 (`@asciidoctor/core` ~2.2 both sides) |
| Theme build | gulp + browserify + postcss | none for Antora; Vite for Astro |
| Package manager | Yarn 1 + PnP + vendored binary | npm |
| Design system | forked twice, drifted | one `shared/` directory |
| Marketing page build | ~14s Hugo | 1.9s for 78 pages |
| Dark mode | structurally impossible | works |

The documentation stays on Antora because it carries a contract that cannot be
renegotiated: 976 `documentationUrl` annotations across 434 paths are compiled
into every Hop binary ever shipped and resolve to `/manual/<version>/<path>.html`.
Antora produces that shape from AsciiDoc across 12 git branches; nothing else
does.

## How the two halves join

1. `astro build` writes `public/` and copies `static/` into it.
2. `antora antora-playbook.yml` adds `/manual` and `/dev-manual` to the same
   directory. `output.clean` **must** stay `false` or Antora deletes the Astro half.
3. `pagefind` indexes the whole thing.

`shared/tokens.css` and `shared/base.css` are the single source for the design
system. Astro imports them and Vite bundles them; Antora serves plain files and
cannot reach outside its UI directory, so `tools/sync-tokens.mjs` copies them in
before the Antora build. If that step stops running, the two halves drift.

## Using Astro properly

The first pass ported one monolithic stylesheet with wrapper-scoped selectors,
which is not how Astro works and caused two visible bugs: every home page
section rendered full-bleed because its container rules were scoped to a
`.home-sections` wrapper the Astro version no longer had, and the nav dropdowns
desynced because a `:hover` rule fought the click state.

The structure now is:

- `shared/tokens.css` and `shared/chrome.css` - the only CSS both halves share:
  design tokens, reset, base typography, buttons, header, footer. Deliberately
  small.
- **Everything page-specific is a scoped `<style>` block** in the `.astro`
  component that owns it. Astro hashes those selectors, so a rule cannot leak
  into or out of the component it belongs to.
- `is:global` is used only where the markup comes from Asciidoctor rather than
  from Astro, since scoped hashes never reach it.
- `src/data/nav.mjs` is the single source for navigation. `tools/sync-nav.mjs`
  generates the Antora Handlebars partials from it, so the two headers cannot
  drift - which is exactly what happened on the old site, where the two footers
  ended up asserting different copyright holders.

## Traps found while building this

1. **The site content is Markdown; the documentation stays AsciiDoc.** Keeping
   the site in AsciiDoc meant every page body arrived as one opaque HTML blob:
   no component could reach inside it, headings had to be recovered with a
   regex, and a table used as a page layout could only be restyled, never
   replaced. Markdown removes all three, and Astro's own glob loader replaces
   the hand-written Asciidoctor loader entirely.
2. **`downdoc` converts prose well but is built for READMEs.** On its own it
   drops the `:page-*` attributes rather than writing front matter, leaves a
   duplicate H1, leaks link attributes into link text (`[Text ,window=_blank]`),
   leaves `anchor:id[]` macros literal in headings, and leaves AsciiDoc tables
   as raw `|===` blocks that render as visible garbage. Only 2 of 75 files
   needed hand work, and both were tables being used as page layouts.
3. **Astro's glob loader slugifies ids**, which turned
   `blog/2020/05/preview-release-0.21` into `preview-release-021` and silently
   broke a live URL. `generateId` keeps the directory path verbatim.
4. **link-checker has no site-root concept** - it resolves `/img/foo.png`
   against the page, so a correct absolute link reads as broken. Rather than
   silence it with `--url-ignore` and validate nothing,
   `tools/check-absolute-links.mjs` does the absolute half and link-checker
   keeps relative links and anchors.
5. **Antora 3.0.1 rejects a git worktree** as a local content source (`.git` is
   a file, not a directory). 3.2 handles it.
6. **Antora camel-cases playbook keys**: `hop_version` is `hopVersion` in a
   template, and fails silently as an empty string.
7. **`runtime.log.failure_level: warn` is the strictest setting, not the
   loosest.** It fails the build on any warning, and the upstream documentation
   emits ~125 of them, so Antora exited 2 on every run and the `&&` chain never
   reached Pagefind - a build that looked like it worked but shipped no search
   index.

## Not done yet

- **`src/data/releases.mjs` only feeds the download page and the home page.**
  It should also generate the Antora branch list, the per-release `.htaccess`
  rule and `doap_Hop.rdf` - the four files a release currently touches by hand.
- **The hero screenshot is salvaged, not shot.** `static/img/home/hop-gui.png`
  is cropped from the 2.17 release capture to drop a stray selection rectangle
  and bleed the bottom edge. It shows a three-transform sample pipeline, which
  is thin for a hero - a purpose-shot capture of a real pipeline would be
  better, ideally at 2x for high-density screens.
- **No social-card image** (`/img/social-card.png` is referenced but absent).
- **Search UI is a bare input.** Pagefind indexes both halves; there is no
  results panel yet.
- **No sitemap index** covering both halves, and no redirects for the
  `/categories/<Term>/` URLs the Hugo site published.
- **Docs pages beyond the user manual are untested** - `build:local` fetches one
  branch. Run the full `npm run build` before trusting anything about the
  12-version matrix.
- **`archetypes/` is gone.** They were Hugo archetypes - Go templates for
  `hugo new`, which has no equivalent here - describing three content types the
  site no longer publishes. Release notes and news are blog posts now, and
  security advisories are not site content at all: `/security/` sends readers to
  https://security.apache.org/projects/hop/, which is the project of record for
  them. For the record, `security-advisory.adoc` asked for cve, severity,
  summary, description, mitigation, credit, affected and fixed.
- **`failure_level` is `fatal`** (Antora's default). The severity order is
  warn < error < fatal and the build fails at or above the level given, so
  `warn` is the *strictest* setting - it failed on the ~125 warnings apache/hop's
  own docs emit. `error` is the target, and it needs the 44 stale
  `xref:tech-manual::` references burned down across 11 frozen release branches
  in apache/hop first.

## Licensing

`ui/`, `shared/` and everything in `src/` is written from scratch and carries
ASF license headers. It is **not** derived from `antora-ui-hop`, which was an
MPL-2.0 fork of the Antora default UI whose README was still titled "Antora
Default UI" and none of whose 106 source files carried an ASF header. Trimming
that fork would have produced a Modification that must stay MPL-2.0 under
section 3.1, which is why this is a rewrite rather than a port.

Fonts in `static/font/` are Open Sans (SIL OFL 1.1), including the **400 weight
the old theme never shipped** - it declared 300/700/800 only, so every paragraph
on the site rendered in Open Sans Light.

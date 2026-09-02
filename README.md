# Hop Website

Sources for [hop.apache.org](https://hop.apache.org).

The site is built from two generators that publish into one directory:

- **[Astro](https://astro.build)** builds the marketing, blog, community,
  download and security pages from `src/`. Fast, component-based, and the right
  substrate for pages that need design.
- **[Antora](https://antora.org)** builds the versioned documentation from
  AsciiDoc in the [apache/hop](https://github.com/apache/hop) repository,
  publishing `/manual/` and `/dev-manual/` once per release branch. It owns
  cross-references, includes and the version picker - and the
  `/manual/<version>/<path>.html` URL shape that every shipped Hop binary links
  to from its Help button.

Both halves share one design system in `shared/`, so the seam is invisible.

> This branch is a draft of a rewrite. See [MIGRATION.md](MIGRATION.md) for what
> is done, what is not, and the traps found on the way.

## Requirements

Node.js 22.12 or newer, and npm. That is the whole list. (Astro 7 sets the
floor; anything older fails at `astro build` rather than at install.)

## Build

```sh
npm ci
npm run build          # Astro + all documentation versions + search index
npm run serve          # http://localhost:4000
```

The full build fetches every release branch of apache/hop and takes several
minutes on a cold cache. Three shorter ways in, depending on what you are
changing:

```sh
npm run dev            # Astro dev server, hot reload, no documentation
npm run build:local    # both halves, one documentation branch from GitHub
npm run build:hop      # both halves, documentation from ../hop on disk
```

`build:hop` reads the working tree of a hop checkout sitting next to this one,
uncommitted edits included, so an `.adoc` change is one build away instead of a
commit and a push. `dev` never renders documentation at all: the Antora half
only exists after a build.

Astro writes `public/` first and Antora adds `/manual` and `/dev-manual` to it,
so `output.clean` is off in every playbook. Deleting `public/` by hand is safe;
building only one half into a stale `public/` leaves the other half stale.

## Layout

| Path | What it is |
|---|---|
| `src/pages/` | Astro routes. `.astro` for pages that need design |
| `src/content/` | Markdown: `blog/` posts and `pages/` prose, as content collections |
| `src/components/`, `src/layouts/` | header, footer, hero canvas, page shell |
| `src/data/` | releases, team, events, tools, navigation - the facts pages read from |
| `shared/` | `tokens.css` and `chrome.css` - what both halves share |
| `static/` | served at the site root: `/img`, fonts, favicons, `doap_Hop.rdf`, `index.yaml`, `.well-known` |
| `ui/` | the Antora UI for the documentation half |
| `antora-playbook*.yml` | documentation sources, versions and output - one per build above |
| `tools/` | the Markdown extensions, the sync steps, the build-time passes and the checks |
| `.htaccess` | redirects and the 404 handler, copied to the site root on deploy |

Parts of `ui/` are generated and gitignored: `ui/css/tokens.css` and
`ui/css/chrome.css` are copied from `shared/`, `ui/partials/header.hbs` and
`footer.hbs` are written from `src/data/nav.mjs`, and `ui/js/` is vendored from
a dependency. Editing those by hand is silently undone on the next build - edit
the source they come from.

## Editing

**A marketing or community page** is Markdown under `src/content/pages/`.
`src/content/pages/community/ethos/index.md` publishes as `/community/ethos/`.
A page that needs real layout is an `.astro` file in `src/pages/` instead -
`/community/team/` is `src/pages/community/team.astro`, reading `src/data/team.mjs`.

**A blog post** is Markdown under `src/content/blog/<year>/<month>/<slug>/index.md`
with `title`, `description`, `publishDate`, `authors`, `categories` and
`preview` in the frontmatter. The index, the home page teasers, the tag list
and `/blog/index.xml` all derive from those.

**A documentation page** lives in apache/hop, not here. Open a PR there against
`main`; it appears under `/manual/next/` on the next build and `/manual/latest/`
when the release branch is cut. Two page attributes are rendered by this repo's
UI rather than by Asciidoctor:

```adoc
:page-engines: Hop Engine=yes, Single Threaded=yes, Native Spark=no
:page-marketplace: hop-misc-lint
```

The first becomes the engine tags under the breadcrumb - names written out in
full, states `yes`, `no` or anything else for unknown. The second marks a page
as documenting a plugin the standard client does not ship, and takes the id the
marketplace installs by, so the note can give the exact command.

**Colours, type and spacing** are CSS custom properties in `shared/tokens.css`.
Both halves read them, so a change lands on the whole site - and because there
is no postcss step inlining them away, dark mode is a token override rather
than a second stylesheet.

## Markdown extensions

Astro 7 parses Markdown with Sätteri, not remark. Two small plugins in `tools/`
add what AsciiDoc had and Markdown does not:

```markdown
> [!WARNING]
> GitHub's alert syntax. NOTE, TIP, IMPORTANT, WARNING and CAUTION.

:::steps
1. **[Discuss](#discuss)**
   A container directive; the name becomes a class, and the styling lives with
   the layout. :::checklist is the other one in use.
:::
```

Both are ordinary Markdown to any other renderer, so the source still reads
correctly on GitHub.

## Build-time passes

After Antora runs, three passes rewrite the built HTML. They are part of every
build, and each prints what it did:

| Pass | What it does |
|---|---|
| `tools/highlight-code.mjs` | colours code blocks with highlight.js and labels them with their language, so no highlighter runs in the browser |
| `tools/external-links.mjs` | gives every link that leaves the site `target="_blank"` and `rel="noopener"` |
| `tools/stabilise-sitemap.mjs` | keeps `<lastmod>` off the build clock, so an unchanged page is an unchanged file |

## Checks

```sh
npm run checks           # all five
npm run check:links      # relative links and anchors
npm run check:absolute   # site-absolute links and assets, resolved from the site root
npm run check:contrast   # WCAG 1.4.3 and 1.4.11 against the tokens, both themes
npm run check:a11y       # the WCAG 2.1 criteria that can be read off the built HTML
npm run check:html       # html-validate
```

`check:contrast` reads `shared/tokens.css` rather than the output, so a colour
added to a component instead of a token escapes it. That is the trade: the
palette is the gate, and components take their colour from it.

Two things to know before trusting a green run. `Jenkinsfile` runs `check:links`
and `check:absolute`, and `check:html` with `|| true`; `check:contrast` and
`check:a11y` are not in CI at all. And `check:html` currently exhausts a 4 GB
heap on the full site and dies, which is why it is `|| true` - it needs
batching before it means anything.

## Publishing

Pushing to `main` triggers the Jenkins job in `Jenkinsfile`, which builds the
site, verifies the artifact is not truncated, and pushes `public/` to the
`asf-site` branch, from which ASF infrastructure serves it.

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
/*
 * Apache Hop site behaviour. Plain ES2015, no bundler, no dependencies.
 * Everything here degrades: with JS off the nav still opens on hover and
 * focus-within, and the docs sidebar renders expanded.
 */
;(function () {
  'use strict'

  /* ----- theme toggle ----- */
  var toggle = document.getElementById('theme-toggle')
  if (toggle) {
    var mql = window.matchMedia('(prefers-color-scheme: dark)')
    var current = function () {
      var explicit = document.documentElement.getAttribute('data-theme')
      return explicit || (mql.matches ? 'dark' : 'light')
    }
    var label = function () {
      var next = current() === 'dark' ? 'light' : 'dark'
      toggle.setAttribute('aria-label', 'Switch to ' + next + ' theme')
    }
    label()
    toggle.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try { localStorage.setItem('hop-theme', next) } catch (e) { /* private mode */ }
      label()
    })
    mql.addEventListener('change', label)
  }

  /* ----- main nav: dropdowns + mobile ----- */
  var closeAll = function (except) {
    Array.prototype.forEach.call(document.querySelectorAll('.has-menu[data-open="true"]'), function (li) {
      if (li === except) return
      li.setAttribute('data-open', 'false')
      var b = li.querySelector('.mainnav__toggle')
      if (b) b.setAttribute('aria-expanded', 'false')
    })
  }

  Array.prototype.forEach.call(document.querySelectorAll('.mainnav__toggle'), function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation()
      var li = btn.parentNode
      var open = li.getAttribute('data-open') === 'true'
      closeAll(li)
      li.setAttribute('data-open', open ? 'false' : 'true')
      btn.setAttribute('aria-expanded', open ? 'false' : 'true')
    })
  })

  document.addEventListener('click', function () { closeAll(null) })
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return
    closeAll(null)
    setDocNav(false)
  })

  var burger = document.getElementById('nav-burger')
  var mainnav = document.getElementById('mainnav')
  if (burger && mainnav) {
    burger.addEventListener('click', function () {
      var open = mainnav.getAttribute('data-open') === 'true'
      mainnav.setAttribute('data-open', open ? 'false' : 'true')
      burger.setAttribute('aria-expanded', open ? 'false' : 'true')
      burger.setAttribute('aria-label', open ? 'Open menu' : 'Close menu')
    })
  }

  /* ----- docs sidebar: expand/collapse, open to current page ----- */
  Array.prototype.forEach.call(document.querySelectorAll('.doc-nav__expand'), function (btn) {
    btn.addEventListener('click', function () {
      var li = btn.parentNode
      var open = li.classList.toggle('is-open')
      btn.setAttribute('aria-expanded', open ? 'true' : 'false')
    })
  })
  var currentItem = document.querySelector('.doc-nav__item.is-current')
  while (currentItem) {
    if (currentItem.classList && currentItem.classList.contains('doc-nav__item')) {
      currentItem.classList.add('is-open')
      var eb = currentItem.querySelector(':scope > .doc-nav__expand')
      if (eb) eb.setAttribute('aria-expanded', 'true')
    }
    currentItem = currentItem.parentNode
    if (currentItem && currentItem.classList && currentItem.classList.contains('doc-nav')) break
  }

  /* ----- documentation sidebar, off-canvas below 1000px ----- */
  var docNav = document.getElementById('doc-nav')
  var docOpen = document.querySelector('.doc-nav__open')
  var docClose = document.querySelector('.doc-nav__close')
  var setDocNav = function (open) {
    if (!docNav) return
    docNav.setAttribute('data-open', open ? 'true' : 'false')
    if (docOpen) docOpen.setAttribute('aria-expanded', open ? 'true' : 'false')
    document.documentElement.style.overflow = open ? 'hidden' : ''
    if (open && docClose) docClose.focus()
    else if (!open && docOpen) docOpen.focus()
  }
  if (docOpen) docOpen.addEventListener('click', function () { setDocNav(true) })
  if (docClose) docClose.addEventListener('click', function () { setDocNav(false) })
  if (docNav) {
    docNav.addEventListener('click', function (e) {
      // follow a link, then get out of the way
      if (e.target.closest('a')) setDocNav(false)
    })
  }

  /* ----- on-this-page -----
   * Two shapes: the documentation list is built here from the rendered
   * article, while the Astro pages render theirs at build time. Both get the
   * same scroll spy, so the active entry is never signalled by colour alone
   * without also being tracked.
   */
  var spy = function (linkContainer, article) {
    if (!linkContainer || !article || !('IntersectionObserver' in window)) return
    var links = {}
    Array.prototype.forEach.call(linkContainer.querySelectorAll('a[href^="#"]'), function (a) {
      links[decodeURIComponent(a.getAttribute('href').slice(1))] = a
    })
    var ids = Object.keys(links)
    if (!ids.length) return
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = links[en.target.id]
        if (a && en.isIntersecting) {
          Array.prototype.forEach.call(linkContainer.querySelectorAll('a.is-active'), function (x) {
            x.classList.remove('is-active')
          })
          a.classList.add('is-active')
        }
      })
    }, { rootMargin: '-80px 0px -70% 0px' })
    ids.forEach(function (id) {
      var el = document.getElementById(id)
      if (el) obs.observe(el)
    })
  }

  /* documentation: build the list, then spy on it */
  var tocBody = document.querySelector('.doc-toc__body')
  var article = document.querySelector('.doc')
  if (tocBody && article) {
    var headings = article.querySelectorAll('h2[id], h3[id]')
    if (headings.length < 2) {
      var aside = document.querySelector('.doc-toc')
      if (aside) aside.style.display = 'none'
    } else {
      Array.prototype.forEach.call(headings, function (h) {
        var a = document.createElement('a')
        a.href = '#' + h.id
        a.textContent = h.textContent.replace(/¶/g, '').trim()
        if (h.tagName === 'H3') a.className = 'toc-h3'
        tocBody.appendChild(a)
      })
      spy(tocBody, article)
    }
  }

  /* Astro pages: the list is already rendered */
  spy(document.querySelector('.onthispage nav'), document.querySelector('.prose'))
  spy(document.querySelector('.post__toc nav'), document.querySelector('.post__body'))

  /* ----- mermaid diagrams -----
     Loaded only where there is one to draw: the bundle is several megabytes,
     and one page in the documentation currently has a diagram. Until it
     arrives, and if it never does, the block still shows its own source -
     which is what these have always shown.

     Always mermaid's light theme, never its dark one. A diagram sets its own
     colours - docker-build.adoc gives every node a pale fill - and the dark
     theme only switches the label text to something light, which puts light
     text on those pale fills. The block gets a light canvas of its own in CSS
     instead, so a diagram reads as a figure on the page rather than as part of
     it, in either theme. */
  if (document.querySelector('pre.mermaid')) {
    var script = document.createElement('script')
    script.src = '/_/js/mermaid.js'
    script.addEventListener('load', function () {
      if (!window.mermaid) return
      window.mermaid.initialize({ startOnLoad: false, theme: 'default' })
      window.mermaid.run({ querySelector: 'pre.mermaid' })
    })
    document.head.appendChild(script)
  }

  /* ----- copy button on code blocks -----
     The button goes in the block's container, not in the <pre>: inside, it
     took part in the preformatted layout, and the copied text picked up the
     word "Copy" along with the code. The language label sits in the same
     strip, written into the page at build time. */
  if (navigator.clipboard) {
    Array.prototype.forEach.call(
      document.querySelectorAll('.doc .listingblock > .content, .doc .literalblock > .content'),
      function (content) {
        var pre = content.querySelector('pre')
        if (!pre) return
        var source = pre.querySelector('code') || pre
        var btn = document.createElement('button')
        btn.type = 'button'
        btn.className = 'copy-btn'
        btn.textContent = 'Copy'
        // The text is the accessible name, so the change of state is what a
        // screen reader hears; no aria-label, which would mask it.
        btn.setAttribute('aria-live', 'polite')
        btn.addEventListener('click', function () {
          navigator.clipboard.writeText(source.innerText).then(function () {
            btn.textContent = 'Copied'
            setTimeout(function () { btn.textContent = 'Copy' }, 1600)
          })
        })
        content.appendChild(btn)
      }
    )
  }

  /* ----- copy button on the hero snippet ----- */
  Array.prototype.forEach.call(document.querySelectorAll('.snippet-copy'), function (btn) {
    if (!navigator.clipboard) { btn.hidden = true; return }
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(btn.getAttribute('data-copy') || '').then(function () {
        var original = btn.textContent
        btn.textContent = 'Copied'
        setTimeout(function () { btn.textContent = original }, 1600)
      })
    })
  })

  /* ----- search -----
   * Pagefind is generated by `npm run build:search`, so it is absent under
   * `astro dev`. Everything here is behind a successful import: if the index
   * is not there the field stays inert rather than throwing.
   */
  var input = document.getElementById('search-input')
  if (input) {
    var panel = document.createElement('div')
    panel.className = 'search-results'
    panel.setAttribute('role', 'listbox')
    panel.hidden = true
    input.parentNode.appendChild(panel)

    var pagefind = null
    var loading = null
    var active = -1

    var load = function () {
      if (loading) return loading
      loading = import(new URL('/pagefind/pagefind.js', window.location.origin).href)
        .then(function (mod) { pagefind = mod; return mod.init() })
        .catch(function () { pagefind = null })
      return loading
    }

    var close = function () { panel.hidden = true; active = -1; input.setAttribute('aria-expanded', 'false') }
    var options = function () { return panel.querySelectorAll('.search-result') }

    var highlight = function (i) {
      var els = options()
      if (!els.length) return
      active = (i + els.length) % els.length
      els.forEach(function (el, n) {
        el.classList.toggle('is-active', n === active)
        if (n === active) el.scrollIntoView({ block: 'nearest' })
      })
    }

    var render = function (results, term) {
      if (!results.length) {
        panel.innerHTML = '<p class="search-empty">No results for “' + term.replace(/[<&]/g, '') + '”</p>'
        panel.hidden = false
        return
      }
      Promise.all(results.slice(0, 8).map(function (r) { return r.data() })).then(function (items) {
        panel.innerHTML = items.map(function (d) {
          var where = d.url.startsWith('/manual/') ? 'User manual'
            : d.url.startsWith('/dev-manual/') ? 'Developer docs'
            : d.url.startsWith('/blog/') ? 'Blog' : 'Site'
          return '<a class="search-result" role="option" href="' + d.url + '">' +
            '<span class="search-result__where">' + where + '</span>' +
            '<span class="search-result__title">' + (d.meta && d.meta.title ? d.meta.title : d.url) + '</span>' +
            '<span class="search-result__excerpt">' + d.excerpt + '</span></a>'
        }).join('')
        panel.hidden = false
        input.setAttribute('aria-expanded', 'true')
        active = -1
      })
    }

    var run = function () {
      var term = input.value.trim()
      if (term.length < 2) { close(); return }
      load().then(function () {
        if (!pagefind) return
        pagefind.debouncedSearch(term).then(function (search) {
          if (search === null) return   // superseded by a later keystroke
          render(search.results, term)
        })
      })
    }

    input.setAttribute('role', 'combobox')
    input.setAttribute('aria-expanded', 'false')
    input.setAttribute('aria-autocomplete', 'list')
    input.addEventListener('focus', load)
    input.addEventListener('input', run)
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); input.blur(); return }
      if (panel.hidden) return
      if (e.key === 'ArrowDown') { e.preventDefault(); highlight(active + 1) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(active - 1) }
      else if (e.key === 'Enter' && active > -1) { e.preventDefault(); options()[active].click() }
    })
    document.addEventListener('click', function (e) {
      if (!input.parentNode.contains(e.target)) close()
    })
  }
})()

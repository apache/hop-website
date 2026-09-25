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
 * Matomo page-view tracking on the ASF instance (site 11). Shared by the
 * Astro pages and the Antora manuals so both halves report to one site.
 * Cookies stay disabled to avoid privacy issues.
 */
var _paq = window._paq = window._paq || []
_paq.push(['disableCookies'])
/* tracker methods like "setCustomDimension" must be called before "trackPageView" */
_paq.push(['trackPageView'])
_paq.push(['enableLinkTracking'])
;(function () {
  var u = 'https://analytics.apache.org/'
  _paq.push(['setTrackerUrl', u + 'matomo.php'])
  _paq.push(['setSiteId', '11'])
  var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0]
  g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s)
})()

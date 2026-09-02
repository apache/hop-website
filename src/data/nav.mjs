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
 * The single source for site navigation.
 *
 * The Astro header imports this; tools/sync-nav.mjs generates the Antora
 * header partial from it. The previous site kept two hand-written navs and
 * they drifted - the two footers ended up asserting different copyright
 * holders - so the links live in exactly one file.
 */

export const mainNav = [
  { label: 'Blog', href: '/blog/' },
  { label: 'Documentation', id: 'docs', children: [
    { label: 'Getting started', href: '/manual/latest/getting-started/' },
    { label: 'User manual', href: '/manual/latest/' },
    { label: 'Developer documentation', href: '/dev-manual/latest/' },
    { label: 'Architecture', href: '/docs/architecture/' },
    { label: 'Roadmap', href: '/docs/roadmap/' },
  ]},
  { label: 'Community', id: 'community', children: [
    { label: 'Contributing', href: '/community/contributing/' },
    { label: 'Mailing lists', href: '/community/mailing-list/' },
    { label: 'Tools & chat', href: '/community/tools/' },
    { label: 'Events & user groups', href: '/community/events/' },
    { label: 'Team', href: '/community/team/' },
    { label: 'Support', href: '/community/support/' },
    { label: 'Commercial support', href: '/community/commercial/' },
    { label: 'Ethos', href: '/community/ethos/' },
    { label: 'Security advisories', href: '/security/' },
  ]},
  { label: 'Apache', id: 'asf', children: [
    { label: 'Foundation', href: 'https://www.apache.org/' },
    { label: 'Events', href: 'https://www.apache.org/events/current-event' },
    { label: 'License', href: 'https://www.apache.org/licenses/' },
    { label: 'Security', href: 'https://www.apache.org/security/' },
    { label: 'Privacy', href: 'https://privacy.apache.org/policies/privacy-policy-public.html' },
    { label: 'Thanks', href: 'https://www.apache.org/foundation/thanks.html' },
    { label: 'Sponsorship', href: 'https://www.apache.org/foundation/sponsorship.html' },
  ]},
]

/* The download call to action. Kept out of mainNav so it can sit at the very
   end of the bar, immediately before the theme toggle, rather than in the
   middle of the link list. */
export const downloadCta = { label: 'Download', href: '/download/' }

export const footerNav = [
  { title: 'Documentation', links: [
    { label: 'Getting started', href: '/manual/latest/getting-started/' },
    { label: 'User manual', href: '/manual/latest/' },
    { label: 'Developer docs', href: '/dev-manual/latest/' },
    { label: 'Download', href: '/download/' },
  ]},
  { title: 'Community', links: [
    { label: 'Contributing', href: '/community/contributing/' },
    { label: 'Mailing lists', href: '/community/mailing-list/' },
    { label: 'Events', href: '/community/events/' },
    { label: 'Support', href: '/community/support/' },
    { label: 'Commercial support', href: '/community/commercial/' },
  ]},
  { title: 'Apache', links: [
    { label: 'Foundation', href: 'https://www.apache.org/' },
    { label: 'License', href: 'https://www.apache.org/licenses/' },
    { label: 'Privacy', href: 'https://privacy.apache.org/policies/privacy-policy-public.html' },
    { label: 'Sponsorship', href: 'https://www.apache.org/foundation/sponsorship.html' },
    { label: 'Thanks', href: 'https://www.apache.org/foundation/thanks.html' },
  ]},
]

/*
 * Project accounts, shown as icons in the header and the footer.
 *
 * X is deliberately absent: the project's announcements have moved to Bluesky
 * and LinkedIn. Icon paths are 24x24 and drawn with currentColor so they take
 * the surrounding text colour in both themes.
 */
export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/apache/hop',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/apachehop/',
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14M7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0',
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/hop.apache.org',
    path: 'M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078 2.67.297 5.568-.628 6.383-3.364C23.622 9.418 24 4.458 24 3.768c0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z',
  },
]

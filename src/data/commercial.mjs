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
 * Companies offering commercial services around Apache Hop.
 *
 * This is an informational listing, not a recommendation. The ASF does not
 * endorse vendors, and the Hop PMC does not rank or select between the
 * entries here - which is why the list is sorted alphabetically in code
 * rather than by hand, so its order can never be read as a preference.
 *
 * Entries are supplied by the companies themselves and must stay factual.
 * Two kinds of field, with different rules.
 *
 * `body` is each company's own words, reproduced verbatim. Do not rewrite it
 * for house style or brevity - the page's own policy says entries are theirs
 * to write.
 *
 * `market` and `services` are structured metadata for scanning. They must be
 * supplied or confirmed by the company, never deduced. An earlier version of
 * this file carried a country inferred from a domain name, which was wrong:
 * know.bi works globally, not only in Belgium.
 *
 * See the policy at the foot of the page.
 */

const entries = [
  {
    // Verbatim, as supplied by the company. Do not edit for style: this is
    // their copy, and the page's own policy says entries are theirs to write.
    name: 'know.bi',
    href: 'https://www.know-bi.be/contact',
    market: 'Global',                        // confirmed by the PMC
    services: ['Migration', 'Installation', 'Coaching', 'Training', 'Enterprise support'],
    body: 'know.bi helps organizations be successful with Apache Hop. Started by a number of the core Hop committers and Hop project founders, know.bi has in-depth knowledge of the Hop platform and can support your organization to hit the ground running with Hop. The services provided by know.bi include migrations, certified installations, coaching, training and enterprise-level support.',
  },
  {
    // Verbatim, as supplied by the company. Do not edit for style.
    name: 'Yupiik',
    href: 'https://www.yupiik.com',
    // market: not stated. "Based in France" is where they are, which is not
    // the same thing - ask before filling this in.
    services: ['Performance tuning', 'Best practice guidance', 'Commercial support'],
    body: 'Based in France, Yupiik has years of experience in data integration and Java performance optimization, and we know how to get the best out of Hop. We actively contribute to other Apache Software Foundation projects, giving us a deep understanding of the open-source ecosystem. Our services include performance tuning, best practice guidance, and ongoing commercial support to help your organization get up and running with Hop quickly and efficiently.',
  },
]

export const vendors = [...entries].sort((a, b) =>
  a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }))

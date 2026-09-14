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
 * The people listed at https://people.apache.org/phonebook.html?ctte=hop
 *
 * Kept as data rather than as a Markdown table so the page can render it as a
 * list of people instead of a spreadsheet, and so adding someone is one line
 * in one place.
 *
 * orgs is a list so a person can be affiliated with more than one, each with
 * an optional href.
 *
 * Social fields are optional and each takes either a handle or a full URL:
 *   twitter:  "bartmaer"  or  "https://twitter.com/bartmaer"
 *   linkedin: "some-handle" or "https://www.linkedin.com/in/some-handle"
 * The Twitter handles are the ones the previous page carried; the project's
 * own account has since moved to Bluesky.
 */

export const pmc = [
  {
    name: "Bart Maertens", id: "bamaer",
    orgs: [{ name: "know.bi", href: "https://www.know.bi" }, { name: "putki.io", href: "https://putki.io" }],
    email: "bart.maertens@putki.io", linkedin: "bmaertens",
  },
  { name: "Brandon Jackson", id: "usbrandon", twitter: "usbrandon" },
  { name: "Dave Campen", id: "dcampen" },
  { name: "François Papon", id: "fpapon", twitter: "fpapon2" },
  {
    name: "Hans Van Akelyen", id: "hansva",
    orgs: [{ name: "know.bi", href: "https://www.know.bi" }, { name: "putki.io", href: "https://putki.io" }],
    email: "hans.van.akelyen@putki.io", linkedin: "hansvanakelyen",
  },
  { name: "Julian Hyde", id: "jhyde", orgs: [{ name: "Looker/Google" }], twitter: "julianhyde" },
  { name: "Kevin Ratnasekera", id: "djkevincr" },
  { name: "Matt Casters", id: "mcasters", twitter: "mattcasters" },
  { name: "Nicolas Adment", id: "nadment", twitter: "nadment" },
  { name: "Sergio Ramazzina", id: "sramazzina", orgs: [{ name: "Serasoft Italy" }], twitter: "sramazzina" },
]

export const committers = [
  { name: "Bruno Silva", id: "bsilva", twitter: "bfasilva" },
  { name: "Gabriel Dutra", id: "gvdutra", twitter: "gvdutra" },
  { name: "Hiromu Hota", id: "hiromu", twitter: "HiromuHota" },
  { name: "Jason Chu", id: "jianjunchu", orgs: [{ name: "Beijing Auphi Data Co" }] },
  { name: "Mahendran Mookkiah", id: "mookkiah", twitter: "mmookkiah" },
  { name: "Maximilian Michels", id: "mxm", twitter: "stadtlegende" },
  { name: "Peter Fabricius", id: "pfabrici", twitter: "pfabrici" },
  { name: "Ray Chang", id: "uraychang" },
  { name: "Ricardo Gouvea", id: "rgouvea", orgs: [{ name: "Openin Big Data" }], twitter: "rdegouvea" },
  { name: "Rodrigo Haces", id: "rhaces", orgs: [{ name: "Neo4j" }], twitter: "rhaces" },
  { name: "Sergio De Lorenzis", id: "xdelox", orgs: [{ name: "Serasoft Italy" }] },
  { name: "Tom Barber", id: "magicaltrout", twitter: "magicaltrout" },
  { name: "Yannick Mols", id: "yannickmols", twitter: "yannickmols" },
]

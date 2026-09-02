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
 * Community events and user groups.
 *
 * Upcoming and past are derived from the date at build time rather than being
 * two hand-maintained tables. The old page kept them as separate sections, and
 * its one "upcoming" entry had been in the past for five months.
 *
 * Dates are ISO. Two entries in the original table used single-digit months
 * (2021-7-15), which sorted wrong as strings; they are normalised here.
 */

export const userGroups = [
  { name: "3Hx - Apache Hop Hot Hop Hangouts", href: "https://www.meetup.com/3hx-apache-hop-hot-hop-hangouts/" },
  { name: "Hop User Group Italia", href: "https://www.meetup.com/Hop-Italia-Users-Group/" },
  { name: "Apache Hop em Português no Telegram", href: "https://t.me/apachehop" },
  { name: "日本Apache Hop ユーザーグループ (Apache Hop User Group Japan)", href: "https://www.meetup.com/apache-hop-user-group-japan/" },
]

export const events = [
  { date: "2026-03-27", name: "Enterprise- und Geo-Datenintegration mit Apache Hop", lang: "DE", description: "Vernetze dich mit der Community rund um Apache Hop – der leistungsstarken Open-Source-Plattform für ETL. Wir zeigen den Stand aktueller GIS-Plugins. Beteilige dich an der Diskussion, bringe deine Anwendungsfälle ein und gestalte die Priorisierung neuer Features.", link: { label: "Register", href: "https://pretalx.com/fossgis2026/talk/B379DJ/" } },
  { date: "2026-02-10", name: "Webinar Möglichkeiten der Enterprise- und Geo-Datenintegration mit Apache Hop", lang: "DE", description: "Description: Eine Einführung (online, kostenlos) in Apache Hop mit Fokus auf Geodaten. Dabei steht die Weiterentwicklung der GIS-Plug-ins von AtolCD im Vordergrund. Zudem werden Lösungen zur Einbindung externer Werkzeuge - für Formate wie 3D, INTERLIS oder IFC/BIM - in Pipelines und Workflows präsentiert.", link: { label: "Register", href: "https://www.giswiki.ch/Webinar_Apache_Hop_GIS_2026" } },
  { date: "2025-11-18", name: "Apache Hop User Meeting Vol. 5", lang: "DE", description: "Das fünfte Apache Hop User Meetup zeigt, wie lebendig die Community ist. Es erwarten dich frische Features, echte Use Cases und viel Austausch mit anderen. Egal, ob du Apache Hop schon nutzt oder erst kennenlernen willst: als Fan von Datenintegrationstools bist du hier richtig!", link: { label: "Video links on page", href: "https://data.it-novum.com/termine/apache-hop-user-meetup/?utm_source=linkedin&utm_medium=social" } },
  { date: "2025-08-26", name: "[KI-gestützte Enterprise- und Geo-Datenintegration und Apache Hop 2025-08](https://www.giswiki.ch/KI-gest%C3%BCtzte_Enterprise-_und_Geo-Datenintegration_und_Apache_Hop_2025-08)", lang: "DE", description: "Webinar \"KI-gestützte Enterprise- und Geo-Datenintegration und Apache Hop 2025-08\" Ein kompakter Überblick zur Datenintegration vom Vibe- bis zum No-Coding mit dem Open-Source-Tool Apache Hop.", link: null },
  { date: "2022-11-10", name: "3H17", lang: "EN", description: "Introducing the new Execution Information framework in Apache Hop 2.1.0", link: { label: "youtube", href: "https://www.youtube.com/watch?v=HCbW2TB3pEo" } },
  { date: "2022-06-23", name: "3H16", lang: "EN", description: "Packaging Hop as a Windows Application and Parsing Stripe API Data", link: { label: "youtube", href: "https://www.youtube.com/watch?v=nxgZOJx-FKc" } },
  { date: "2022-06-09", name: "3H15", lang: "EN", description: "Apache Hop updates and use case: Apache Hop and Debezium", link: { label: "youtube", href: "https://youtu.be/_sTSGwmV-3w" } },
  { date: "2022-06-09", name: "-", lang: "DE", description: "Zweites Apache Hop Meetup (IT-Novum)", link: { label: "video links on page", href: "https://data.it-novum.com/termine/zweites-apache-hop-meetup/" } },
  { date: "2021-12-16", name: "3H14", lang: "EN", description: "Apache Hop in Docker", link: { label: "youtube", href: "https://youtu.be/v2rNxAQEhu0" } },
  { date: "2021-11-18", name: "3H13", lang: "EN", description: "Apache Hop Sucks. Let’s un-suck it!", link: { label: "youtube", href: "https://youtu.be/qW5Jwe5OipU" } },
  { date: "2021-11-16", name: "-", lang: "JP-EN", description: "Apache Hop - User Group Japan #1", link: null },
  { date: "2021-10-28", name: "3H12", lang: "EN", description: "A well-designed Hop project walkthrough", link: { label: "youtube", href: "https://youtu.be/a1jg1A2vmtA" } },
  { date: "2021-10-26", name: "-", lang: "DE", description: "5-fach Speed für Ihr Datenprojekt mit Hop (IT-Novum)", link: null },
  { date: "2021-10-07", name: "3H11", lang: "EN", description: "Apache Hop 1.0, TLP graduation and beyond", link: { label: "youtube", href: "https://youtu.be/eaHuga0IReg" } },
  { date: "2021-07-15", name: "-", lang: "PT", description: "First Brazilian Hop User Group Meetup", link: { label: "youtube", href: "https://youtu.be/NGD6PGr8Id4" } },
  { date: "2021-07-01", name: "3H10", lang: "EN", description: "Apache Hop and Neo4j", link: { label: "youtube", href: "https://youtu.be/i30SWDiiZqw" } },
  { date: "2021-06-17", name: "3H9", lang: "EN", description: "End-to-end workflows", link: { label: "youtube", href: "https://youtu.be/63LxM3gU1sQ" } },
  { date: "2021-06-16", name: "-", lang: "ES", description: "First Spanish Hop User Group Meetup", link: { label: "youtube", href: "https://youtu.be/rosC4KvBivM" } },
  { date: "2021-06-03", name: "3H8", lang: "EN", description: "Apache Hop in Docker", link: { label: "youtube", href: "https://www.youtube.com/watch?v=ayMD6RST4Do" } },
  { date: "2021-05-20", name: "3H7", lang: "EN", description: "End-to-end pipelines with testing, logging, monitoring and best practices", link: { label: "youtube", href: "https://www.youtube.com/watch?v=CkbOThb2HPo" } },
  { date: "2021-04-29", name: "3H6", lang: "EN", description: "Big Data Orchestration on Spark, Flink and DataFlow using Apache Beam", link: { label: "youtube", href: "https://www.youtube.com/watch?v=s_cstCPdnKI" } },
  { date: "2021-04-15", name: "3H5", lang: "EN", description: "Get Started With Hop - Concepts and First Pipelines", link: { label: "youtube", href: "https://youtu.be/gKVb_r4v_Oc" } },
  { date: "2021-04-01", name: "3H4", lang: "EN", description: "The Road to Hop 1.0", link: { label: "youtube", href: "https://www.youtube.com/watch?v=EhO_DYszu_Y&t=2s" } },
]

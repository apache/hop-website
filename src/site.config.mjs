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

import { current } from './data/releases.mjs'

/*
 * Site-wide facts.
 *
 * The version and release date are derived from src/data/releases.mjs rather
 * than repeated here. They used to be duplicated, so a release meant editing
 * the same number in two files and nothing would have caught them drifting
 * apart. Adding one entry to releases.mjs now updates the whole site.
 */
export const site = {
  title: 'Apache Hop',
  url: 'https://hop.apache.org',
  javaVersion: '21',
  dockerCommand: 'docker run -p 8080:8080 apache/hop-web',

  get version () { return current.version },
  get releaseDate () {
    return new Date(current.date).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
    })
  },
}

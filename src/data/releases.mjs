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
 * One place for release facts. The download page, the home page hero and the
 * version shown in the header all read from here.
 *
 * The next step is generating this from the ASF release process rather than
 * hand-editing it, and having it also emit the Antora branch list, the
 * per-release .htaccess rule and doap_Hop.rdf - the four files a release
 * currently touches by hand.
 */

const DOWNLOADS = 'https://downloads.apache.org/hop'
const MIRROR = 'https://www.apache.org/dyn/closer.lua'

const artifacts = (version) => ({
  client: {
    name: `apache-hop-client-${version}.zip`,
    href: `${MIRROR}/hop/${version}/apache-hop-client-${version}.zip?action=download`,
    asc: `${DOWNLOADS}/${version}/apache-hop-client-${version}.zip.asc`,
    sha512: `${DOWNLOADS}/${version}/apache-hop-client-${version}.zip.sha512`,
  },
  source: {
    name: `apache-hop-${version}-src.tar.gz`,
    href: `${MIRROR}/hop/${version}/apache-hop-${version}-src.tar.gz?action=download`,
    asc: `${DOWNLOADS}/${version}/apache-hop-${version}-src.tar.gz.asc`,
    sha512: `${DOWNLOADS}/${version}/apache-hop-${version}-src.tar.gz.sha512`,
  },
})

export const releases = [
  { version: '2.19.0', date: '2026-08-17', announcement: '/blog/2026/08/hop-2.19.0/', ...{ files: artifacts('2.19.0') } },
  { version: '2.18.1', date: '2026-06-18', announcement: '/blog/2026/06/hop-2.18.1/', ...{ files: artifacts('2.18.1') } },
  { version: '2.18.0', date: '2026-06-01', announcement: '/blog/2026/06/hop-2.18.0/', ...{ files: artifacts('2.18.0') } },
  { version: '2.17.0', date: '2026-02-06', announcement: '/blog/2026/02/hop-2.17.0/', ...{ files: artifacts('2.17.0') } },
]

export const current = releases[0]

export const containers = [
  { name: 'apache/hop', label: 'Hop', href: 'https://hub.docker.com/r/apache/hop', pull: 'docker pull apache/hop', note: 'the client and Hop Server, on Alpine' },
  { name: 'apache/hop-web', label: 'Hop Web', href: 'https://hub.docker.com/r/apache/hop-web', pull: 'docker pull apache/hop-web', note: 'work in progress, provided as-is' },
]

export const helm = {
  repo: 'helm repo add apache-hop https://hop.apache.org',
  install: 'helm install hop apache-hop/hop',
}

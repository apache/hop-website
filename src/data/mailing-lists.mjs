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
 * The project's mailing lists.
 *
 * Archive links point at lists.apache.org, the current searchable archive. The
 * previous page linked mail-archives.apache.org/mod_mbox, the legacy interface,
 * over plain http.
 */

const list = (name, title, purpose, note) => ({
  name,
  title,
  purpose,
  note,
  address: `${name}@hop.apache.org`,
  subscribe: `mailto:${name}-subscribe@hop.apache.org`,
  unsubscribe: `mailto:${name}-unsubscribe@hop.apache.org`,
  archive: `https://lists.apache.org/list.html?${name}@hop.apache.org`,
})

export const lists = [
  list(
    'users',
    'Users',
    'Questions about using Hop: how to do something, why a pipeline behaves the way it does, which transform fits your problem.',
    'If you are not sure which list you want, this is the one.'
  ),
  list(
    'dev',
    'Developers',
    'Development of Hop itself: design discussions, releases, votes and project decisions.',
    'Decisions that matter to the project are taken here, in public and on the record.'
  ),
  list(
    'commits',
    'Commits',
    'Automated notifications of every change to the code, the website and the issue tracker.',
    'High volume and read-only in practice. Subscribe only if you want the firehose.'
  ),
]

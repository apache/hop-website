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

'use strict'

// Turn a root-relative Antora URL into one relative to the page being rendered.
// Antora already computes siteRootPath ('.', '..', '../..' and so on) for every
// page, so this is just a join - no path arithmetic of our own to get wrong.
module.exports = (to, options) => {
  if (!to) return '#'
  if (to.charAt(0) !== '/') return to
  const root = options.data.root.siteRootPath || '.'
  return root + to
}

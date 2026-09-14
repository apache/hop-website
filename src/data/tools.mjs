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
 * The tools the Hop community actually uses.
 *
 * Checked against the repositories rather than transcribed: apache/hop carries
 * seven GitHub Actions workflows and three Jenkinsfiles, and sonar.projectKey
 * is apache_hop. Every URL here was verified to resolve, except the LinkedIn
 * page: LinkedIn answers automated requests with HTTP 999 regardless, so that
 * one is the URL the previous site's header carried, unverified.
 */

export const toolGroups = [
  {
    title: 'Code and issues',
    lede: 'Everything is public. There is no private tracker and no internal fork.',
    tools: [
      {
        name: 'GitHub',
        href: 'https://github.com/apache/hop',
        body: 'All source code lives in apache/hop, with the website in apache/hop-website. Contributions arrive as pull requests.',
      },
      {
        name: 'GitHub Issues',
        href: 'https://github.com/apache/hop/issues',
        body: 'Bugs and feature requests. Read the GitHub guide first - a well-formed issue is much more likely to get picked up.',
        more: { label: 'GitHub guide', href: '/community/contribution-guides/github-guide/' },
      },
      {
        name: 'GitHub Discussions',
        href: 'https://github.com/apache/hop/discussions',
        body: 'Open-ended questions and ideas that are not yet a bug or a proposal, for people who would rather not use a mailing list.',
      },
    ],
  },
  {
    title: 'Build and quality',
    lede: 'Two systems, doing different jobs.',
    tools: [
      {
        name: 'GitHub Actions',
        href: 'https://github.com/apache/hop/actions',
        body: 'Runs on every pull request: it builds the code, builds the documentation, and handles the issue and milestone housekeeping.',
      },
      {
        name: 'Jenkins',
        href: 'https://ci-builds.apache.org/job/Hop/',
        body: 'ASF-hosted CI for the branch builds, the nightly build and the Hop Web Selenium suite. The website is published from here too.',
      },
      {
        name: 'SonarQube Cloud',
        href: 'https://sonarcloud.io/project/overview?id=apache_hop',
        body: 'Static analysis and coverage for the apache_hop project, tracked over time.',
      },
    ],
  },
  {
    title: 'Talking to each other',
    lede: 'Decisions are made on the mailing lists. Everything else is convenience.',
    tools: [
      {
        name: 'Mailing lists',
        href: '/community/mailing-list/',
        body: 'users@ for questions, dev@ for development and project decisions, commits@ for change notifications. The archives are public and searchable.',
      },
      {
        name: 'Slack',
        href: 'https://the-asf.slack.com/',
        body: 'The #hop channel on the ASF Slack. An @apache.org address gets you in directly; otherwise ask for an invite on the users list.',
        more: { label: 'Ask for an invite', href: '/community/mailing-list/' },
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/apachehop/',
        body: 'Release announcements, events and community news, and the easiest place to share Hop with colleagues.',
      },
      {
        name: 'Bluesky',
        href: 'https://bsky.app/profile/hop.apache.org',
        body: 'Release announcements and project news from @hop.apache.org.',
      },
    ],
  },
  {
    title: 'Documentation',
    lede: 'Docs are code, and live beside the code.',
    tools: [
      {
        name: 'The manuals',
        href: '/manual/latest/',
        body: 'The user and developer manuals are AsciiDoc in the apache/hop repository, published once per release branch. A documentation change is an ordinary pull request.',
        more: { label: 'Documentation guide', href: '/community/contribution-guides/documentation-contribution-guide/' },
      },
    ],
  },
]

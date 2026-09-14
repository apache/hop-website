---
title: "Apache Hop 2.3 is available!!"
description: "The latest Apache Hop release 2.3.0  is now available. Let's walk through the most important new features in this release."
publishDate: "2023-01-30T07:49:56+02:00"
authors: bamaer
categories: "2.3, Release, Apache Hop"
preview: Apache Hop 2.3 Released
---
After almost two months of work on 82 tickets, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.3.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.3/hop-23.svg)


or [***download Hop 2.3.0 ***](https://hop.apache.org/download/) right away.

Apache Hop 2.3.0 is mostly a bug fixing release with only a limited number of new features.

## Weblate - New Translation tool

With the switch to [Weblate](https://weblate.org/en/), it is now a lot easier to contribute translations to Apache Hop.

All it takes is heading over to [https://translate.project-hop.org](https://translate.project-hop.org), creating an account and start translating Apache Hop in your native language. 

Please create a [ticket](https://github.com/apache/hop/issues) if you want to translate Apache Hop into a language that is not yet available.

![Weblate](/img/Release-2.3/weblate.png)

## Documentation updates 

Creating and updating documentation is a never-ending task. 

There have been some layout changes: 

* commands now live in tabs for Windows an Linux/Mac
* large tables, code blocks etc can now be expanded or collapsed. 

![Documentation tabs](/img/Release-2.3/docs-tabs.png)

![Documentation expand and collapse](/img/Release-2.3/docs-expand-collapse.png)

A lot of pages were added and updated, some notable changes are: 

* improved [Metadata Injection](https://hop.apache.org/manual/next/pipeline/metadata-injection.html) pages and samples 
* improved [Pipeline Probe](https://hop.apache.org/manual/next/metadata-types/pipeline-probe.html) docs and samples
* a new [list of community posts and articles](https://hop.apache.org/manual/next/community-blogs/index.html) was added.

## Vertica Bulk Loader 

The [Vertica](https://www.vertica.com) [Bulk Loader](https://hop.apache.org/manual/next/pipeline/transforms/verticabulkloader.html) was already available as an external plugin, but has now been integrated into the main code base.

This bulk loader drastically improves the data loading speed to the Vertica analytical database. 

![Vertica Bulk Loader transform](/img/Release-2.3/vertica-bulk-loader.png)

## Community 

The Hop community continues to grow!

No new committers have been added since the 2.2.0 release.

The overview below shows the community growth compared to the 2.2.0 release in December:

* chat: 516 registered members (up from 481) [join](https://chat.project-hop.org)
* LinkedIn: 1180 followers (up from 1126) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 844 followers (up from 819) [follow](https://twitter.com/ApacheHop)
* YouTube: 739 subscribers (up from 700) [subscribe](https://www.youtube.com/ApacheHop)
* 3Hx Meetup: 276 members (up from 275)  [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/)

![Apache Hop Community Growth](/img/Release-2.3/hop-community-growth.png)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## GitHub Issues 

Apache Hop 2.3.0 is the first release after we switched to [Github Issues](https://github.com/apache/hop/issues) instead of JIRA. 

This release contains work on 82 tickets:

Check the [Release notes](https://github.com/apache/hop/releases/tag/2.3.0-rc1) for a full overview of all tickets.

---
title: Roundup April 2021
publishDate: "2021-05-01T08:59:56+02:00"
authors: bamaer
categories: "Roundup, Apache Hop"
preview: Roundup April 2021
---
## Roundup April 2021

As always at the start of another new month, let’s have a look at what happened at Hop over the last month. Here’s the recap for April 2021!

## 0.70 release

On April, 12th, the Hop community release Apache Hop (Incubating) 0.70. As our first release with downloadable binaries, 0.70 is another major step forward for Hop as a maturing Apache project.

In a nutshell, the 0.70 release brought:

* Dark mode
* File Explorer perspective
* Kettle/PDI importer
* Metadata Injection improvements
* Neo4j integration
* Over 45 new plugins
* Project and Environment improvements
* Translator and translation improvements
* VFS Drivers for AWS S3, Azure Blog Storage, Google Cloud Storage and Google Drive

Re-read the [release announcement](/blog/2021/04/release-0.70/) or [download](/download/) 0.70 to catch up on all the 0.70 goodies.

The Hop team obviously continued to work after the 0.70 release. The current working branch is now at 0.99, as a first step towards Hop 1.0.

## 3Hx (Hot Hop Hangout) Sessions

The Hop community organized a couple of Hot Hop Hangout Sessions in 2020. These were a lot of fun, but pretty much guerrilla style, without a clear schedule and with joyful amount of chaos.

We’ve picked up where we left of last year and, as Hop matures, so do the 3Hx sessions. We’ll now have a 3Hx session every other week, alternating between user oriented sessions and technical deep dives.

We’ve had three 3Hx sessions in April:

* [3H4 - The Road to Hop 1.0](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/events/277117234/), recording on [youtube](https://www.youtube.com/watch?v=EhO_DYszu_Y&t=2765s)
* [3H5 - Get Started with Apache Hop](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/events/277439258/), recording on [youtube](https://www.youtube.com/watch?v=gKVb_r4v_Oc&t=19s)
* [3H6 - Big Data Orchestration on Spark, Flink and DataFlow using Apache Beam](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/events/277681256/), recording will be on youtube soon.

With about 120 members in the [Meetup group](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/) and an increasing number of registrations (close to 70 3H6) for the sessions, we heard the community loud and clear. The 3Hx sessions are here to stay.

Let us know which topics you’d like to see discussed in a future 3Hx session. We’re very interested in how **you** use Hop. Let us know (chat, Twitter, mailing list) if you’d like to present your Hop story or use case in an upcoming session.

Check the full [3Hx schedule](/community/events/) for upcoming sessions.

## Documentation, Samples, Integration tests

With Hop 0.70 generally available, we started working towards Hop 1.0. We’ve spent a lot of effort in hardening and documentating Hop, and will continue to do so.

* ***Documentation***: almost all aspects of the Hop platform are now documented. Documentation is an eternal work in progress. Don’t hesitate if you find a bug in the documentation, or if you find undocumented Hop functionality.
* ***Integration Tests***: since the integration tests were introduced earlier this year, they have proven to be incredibly valuable to iron out bugs and prevent regressions. We now have over 60 integration tests that run on a daily basis, expect that number to increase significantly. The integration tests run on a daily basis, check the [Jenkins job](https://ci-builds.apache.org/job/Hop/job/Hop-integration-tests/).
* ***Samples***: in addition to documentation, samples are an invaluable tool to quickly check how a given transform or design pattern works. A huge thanks to [Saurabh](https://twitter.com/OfficialSauru) who stepped in and provides us with an almost daily delivery of fresh Hop samples!

## Various

### Neo4j logo updated

Neo4j announced a new logo and overall look and feel earlier this month. The new logo has been incorporated in all available Neo4j functionality in Hop.

![New Neo4j logo in Hop](/img/Roundup-2021-05/new-neo4j-logo.png)

### Cleanup

The major api breaking code changes are far behind us, but code cleanup and optimization is an ongoing process.

* we had a couple of remaining plugins lingering around in the engine code. These were all isolated and moved to plugins
* documentation was hosted in a separate repository. With the general availability of 0.70, we’re working towards releasing version specific documentation with each release. To improve the process of writing, maintaining and testing documentation, the docs repository has been incorporated in the default Hop repository. The 'old' [incubator-hop-docs](https://github.com/apache/incubator-hop-docs) repository is still available, but is now archived (read-only).
* Hop translations are managed in language-specific properties files. These properties files needed a major cleanup after all of the changes Hop has been through since early 2020. This cleanup is now done.

### Apache Doris (Incubating)

Support for [Apache Doris (Incubating)](https://doris.apache.org/master/en/) was added. Doris is a fast MPP database for all modern analytics on big data.

## Hop search

[Hop Search](https://hop.apache.org/manual/latest/hop-tools/hop-search.html) is a command line tool that offers all the functionality in Hop Gui’s Search perspective: find information or occurrences for any metadata items in Hop or a specific project.

<a id="community"></a>

## Community

### Hop Mailing lists

Don’t forget to subscribe to our [dev](mailto:dev-subscribe@hop.apache.org) and [users](mailto:users-subscribe@hop.apache.org) mailing lists!
These mailing lists allow us to discuss and make decisions in a process that is as transparent and inclusive as possible, and as such are an important tool in our communication as an Apache project.

The dev and user lists currently _only_ have 28 and 18 subscribers respectively. We can do better, Hop Community!

Subscribing is as easy as sending an empty email by clicking the links below:

* [users](mailto:users-subscribe@hop.apache.org): general how-to and functionality questions. Ask us anything!
* [dev](mailto:dev-subscribe@hop.apache.org): developer discussions. There’s a lot of informal discussion going on in our [chat channels](https://chat.project-hop.org), but decisions that matter are taken on the dev list!

### Hop Community

The Hop community continues to grow:

* chat: 170 registered members (up from 153) [join](https://chat.project-hop.org)
* LinkedIn: 490 followers (up from 420) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 405 followers (up from 358) [follow](https://twitter.com/ApacheHop)
* YouTube: 124 subscribers (up from 87) [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)
* Meetup: 119 members link: [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts)

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

<a id="tickets"></a>

## JIRA Activity

* Resolved: 95
* In Progress: 10
* Open: 42
* Closed: 10

The full list of issues that had activity over the last month is available [here](https://issues.apache.org/jira/issues/?jql=project%20%3D%20HOP%20AND%20status%20in%20(Resolved%2C%20Closed)%20AND%20resolved%20%3E%3D%202021-04-01%20AND%20resolved%20%3C%3D%202021-04-30%20ORDER%20BY%20updated%20ASC&startIndex=50)

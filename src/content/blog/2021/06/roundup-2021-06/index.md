---
title: Roundup May 2021
publishDate: "2021-06-01T08:59:56+02:00"
authors: bamaer
categories: "Roundup, Apache Hop"
preview: Roundup May 2021
---
## Roundup May 2021

As always at the start of another new month, let’s have a look at what happened at Hop over the last month. Here’s the recap for May 2021!

## Hop 0.99 Release process started

At the very end of the month (on May, 27th), the release process for Hop 0.99 was [started](http://mail-archives.apache.org/mod_mbox/hop-dev/202105.mbox/browser), with a code cutoff point in early June.

Hop 0.99 will be a release candidate for Hop 1.0, which should follow pretty quickly after the community had some time to test Hop 0.99.

The focus on new functionality was decreased since the Hop 0.70 release in favor of hardening Hop for a 1.0 release.
This hardening includes:

* ***continued code cleanup and bug hunting***: multiple api cleanups and lots of plugin dialog cleanups not only make the code cleaner, lighter and easier to maintain, but also pave the way for future (post Hop 1.0) development.
* ***documentation*** has been integrated with the Hop code allows us to have dedicated documentation per Hop version. The documentation is now considered to be as good as feature comple. There’s always more documentation to write and update, but we now have a solid base to continue working.
* ***samples***: a first batch of samples is now available in Hop. Just like with documentation, there will never be enough samples. We will continue working from this point onwards.
* the number of ***integration tests*** continues to grow. More important than the number of tests: the integration tests continuously prove to be invaluable in detecting bugs, verifying bug fixes and preventing regressions

All of these were required to make sure Hop 1.0 will be the robust and stable platform we as a community want to build and use.

Hop 1.0 will follow quite quickly after the 0.99 release. We’ll start implement new functionality again after Hop 1.0. Once Hop 1.0 is released, we’ll also start looking into graduating Hop as an Apache Top Level Project (TLP).

## Avro Support

Hop now has support for the [Apache Avro](https://avro.apache.org) data serialization system.

* [Avro Decode](http://hop.apache.org/manual/latest/pipeline/transforms/avro-decode.html): decode an Avro field and convert to Hop field.
* [Avro File Input](http://hop.apache.org/manual/latest/pipeline/transforms/avro-file-input.html): reads Avro records from one or more files. Each record is encapsulated in an Avro field. Each value has its own Schema and record.
* Avro data type

[![Avro transforms](/img/Roundup-2021-06/avro.png)](/img/Roundup-2021-06/avro.png)

## Various

* Single click is now the default option in Hop Gui. Single click on a transform or action icon to open the available actions and operations for that transform or action. Single click on an action or transform name to open its properties.
* open a pipeline from a pipeline action in a workflow through CTRL-SHIFT-Click on the action’s icon

## 3Hx (Hot Hop Hangout) Sessions

We had one 3Hx session in May: [3H7 - End-to-end pipelines with testing, logging, monitoring and best practices](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/events/278103629). The recording is available on [youtube](https://www.youtube.com/watch?v=CkbOThb2HPo)

<a id="community"></a>

## Community

### Hop Mailing lists

Don’t forget to subscribe to our [dev](mailto:dev-subscribe@hop.apache.org) and [users](mailto:users-subscribe@hop.apache.org) mailing lists!
These mailing lists allow us to discuss and make decisions in a process that is as transparent and inclusive as possible, and as such are an important tool in our communication as an Apache project.

The dev and user lists currently _only_ have 29 and 20 subscribers respectively. We can do better, Hop Community!

Subscribing is as easy as sending an empty email by clicking the links below:

* [users](mailto:users-subscribe@hop.apache.org): general how-to and functionality questions. Ask us anything!
* [dev](mailto:dev-subscribe@hop.apache.org): developer discussions. There’s a lot of informal discussion going on in our [chat channels](https://chat.project-hop.org), but decisions that matter are taken on the dev list!

### Hop Community

The Hop community continues to grow:

* chat: 181 registered members (up from 170) [join](https://chat.project-hop.org)
* LinkedIn: 509 followers (up from 490) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 419 followers (up from 405) [follow](https://twitter.com/ApacheHop)
* YouTube: 166 subscribers (up from 124) [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)
* Meetup: 139 members (up from 119) link: [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts)

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

<a id="tickets"></a>

## JIRA Activity

* Resolved: 49
* In Progress: 7
* Open: 27
* Closed: 7

The full list of issues that had activity over the last month is available [here](https://issues.apache.org/jira/issues/?jql=project%20%3D%20HOP%20AND%20status%20in%20(Resolved%2C%20Closed)%20AND%20resolved%20%3E%3D%202021-05-01%20AND%20resolved%20%3C%3D%202021-05-31%20ORDER%20BY%20updated%20ASC&startIndex=50)

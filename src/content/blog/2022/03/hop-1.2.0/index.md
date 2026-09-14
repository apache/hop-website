---
title: "Apache Hop 1.2 is available!!"
description: Hop 1.2.0 bring lots of bug fixes and minor changes on almost 90 tickets and almost two months of work.
publishDate: "2022-03-08T07:59:56+02:00"
authors: bamaer
categories: "1.2, Release, Apache Hop"
preview: Apache Hop 1.2 Released
---
The Apache Hop community is pleased to announce the general availability of Apache Hop 1.2.0.\
A huge thank you to everyone involved to made this possible.

Read on for an overview of what has changed in this release or [download Hop 1.2.0](https://hop.apache.org/download/) right away.

## Hop Gui

Hop Gui continues to evolve. The following list of improvements will make you even more productive in Hop.

* [HOP-3298](https://issues.apache.org/jira/browse/HOP-3298): Hop Gui now remembers the last environment you used when you switch to a project.
* [HOP-3736](https://issues.apache.org/jira/browse/HOP-3736): Hop Gui now remembers the logging level of the last run (used to default back to "Basic")
* [HOP-3762](https://issues.apache.org/jira/browse/HOP-3762): dark mode is improved on Windows. Other operating systems now default to the look of the OS ([HOP-3761](https://issues.apache.org/jira/browse/HOP-3761))
* [HOP-3775](https://issues.apache.org/jira/browse/HOP-3775): the Hop icon (hop.ico) is now included for your Hop Gui and other desktop launchers

![the Hop icon is now included for your Hop Gui and other desktop launchers](/img/Release-1.2/hop-shortcut.png)

## Docker

* [HOP-3169](https://issues.apache.org/jira/browse/HOP-3169) and [HOP-3708](https://issues.apache.org/jira/browse/HOP-3708): the Hop and Hop Web Docker images on Dockerhub are now available for ARM
* [HOP-3767](https://issues.apache.org/jira/browse/HOP-3767): the long-lived Docker container now detects if a project already exists.

## Neo4j

* [HOP-2859](https://issues.apache.org/jira/browse/HOP-2859): a number of internationalization issues were fixed in the [Neo4j Import](https://hop.apache.org/manual/latest/pipeline/transforms/neo4j-import.html) transform.
* [HOP-3684](https://issues.apache.org/jira/browse/HOP-3684): the Neo4j connection dialog was cleaned up. Recent Neo4j Java driver versions are capable of automatically figuring out the encryption, routing, trust all certificates options. All of these were enabled with an "Automatic" option.
* [HOP-3073](https://issues.apache.org/jira/browse/HOP-3073): Metadata injection support was added to the [Neo4j Import](https://hop.apache.org/manual/latest/pipeline/transforms/neo4j-import.html) transform.
* [HOP-3783](https://issues.apache.org/jira/browse/HOP-3783): Add label to nodes based on key/value of previous hop in Neo4j Graph Output

![Neo4j automatic connection option](/img/Release-1.2/neo4j-automatic.png)

## Kafka and Avro

* [HOP-2788](https://issues.apache.org/jira/browse/HOP-2788):The [Kafka producer](https://hop.apache.org/manual/latest/pipeline/transforms/kafkaproducer.html) transform now has additional options to produce to security-enabled clusters (e.g. Confluence Cloud).
* [HOP-3739](https://issues.apache.org/jira/browse/HOP-3739): the Kafka Producer and Consumer transforms now support Avro, including the ability to communicate the Avro Schema with a Schema Registry service.
* [HOP-3686](https://issues.apache.org/jira/browse/HOP-3686): the brand new [Avro Encode](https://hop.apache.org/manual/latest/pipeline/transforms/avro-encode.html) transform allows encoding multiple fields into a single Avro field.

![Avro Encode transform](/img/Release-1.2/avro-encode.png)

## Translations and Hop Translator

Hop is now fully available in Chinese, with work on the Brazilian Portuguese in progress.

Hop Translator is a Hop tool that provides a user interface to make translating Hop into your own native language easier. Translator received a couple of bug fixes and improvements to make translating Hop even easier. Thanks, [Shl Xue](https://github.com/shlxue)! [HOP-3715](https://issues.apache.org/jira/browse/HOP-3715), [HOP-3801](https://issues.apache.org/jira/browse/HOP-3801), [HOP-3776](https://issues.apache.org/jira/browse/HOP-3776), [HOP-3807](https://issues.apache.org/jira/browse/HOP-3807), [HOP-3788](https://issues.apache.org/jira/browse/HOP-3788)

## Community

The Hop community continues to grow:

* chat: 300 registered members (up from 282) [join](https://chat.project-hop.org)
* LinkedIn: 840 followers (up from 786) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 670 followers (up from 634) [follow](https://twitter.com/ApacheHop)
* YouTube: 452 subscribers (up from 415) [subscribe](https://www.youtube.com/ApacheHop)
* 3Hx Meetup: 219 members (up from 217)  [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## JIRA

Hop 1.2.0 contains work on 87 tickets:

* Resolved: 84
* Closed: 3

Check the [Hop Jira](https://issues.apache.org/jira/browse/HOP-3807?jql=project%20%3D%20%22Apache%20Hop%22%20and%20fixVersion%20%3D%201.2.0) for a full overview of all tickets.

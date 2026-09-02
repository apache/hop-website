---
title: Roundup January 2022
description: "The Apache Hop recap for January 2022:"
publishDate: "2022-02-03T07:59:56+02:00"
authors: bamaer
categories: "Roundup, Apache Hop"
preview: Roundup January 2022
---
## Hop Graduation - Apache Software Foundation Press Release

Everyone who follows Apache Hop knows we graduated to a Top-Level Project in the final days of 2021.

Since not everyone follows Hop (yet), the Apache Hop PMC worked with the Apache Software Foundation to issues a press release that was sent out on January 18th.

Home to over 350 projects, some of which are wildly popular, the ASF has access to a massive audience. The press release created a major surge in the Apache Hop website visitor and downloads. With the increase in numbers, we saw a lot of new attention from Asia, especially China.

We’d like to take this opportunity to welcome all new Hop users and enthusiasts the Apache Hop community!

Read the original [ASF press release](https://www.globenewswire.com/en/news-release/2022/01/18/2368576/17401/en/The-Apache-Software-Foundation-Announces-Open-Source-data-orchestration-platform-Apache-Hop-as-a-Top-Level-Project.html) or the [reprint](/blog/2022/01/hop-graduation/) on the Apache Hop website.

![Apache Software Foundation](/img/asf_logo_wide.png)

## Apache Hop 1.1.0

On January 24th, the Apache Hop PMC and community released Apache Hop 1.1.0.

All the details about this release are available in the [release announcement](/blog/2022/01/hop-1.1.0/), so let’s just walk through a number highlights:

* Hop Server now supports SSL, projects and environments and asynchronous web services for long-running pipelines and workflows. There also is a new Hop Server Status transform.
* the Docker image now supports optionally supports projects and environments, has additional logging information and status code improvements.
* Apache Beam has been upgraded to 2.35.0 with support for Apache Spark 2.35.0 and Apache Flink 1.13.5. Apache Beam on Google Cloud Dataflow now supports service accounts and `DataflowServiceOptions`, which pass various options through if they’re not available in the GUI
* new transform plugins:
  * Hop Server Status: retrieves a lot of server and operating system metrics from one of your Hop Servers.
  * Apache Tika Input parses files in all sorts of formats and extracts the text content as well as available metadata it can extract.
  * Metadata Input gives you access to the Hop Metadata items in the current project. It outputs all the metadata objects of all types unless one or more types are filtered.
  * Neo4j Graph Output now supports models with multiple relationships between two nodes, models with multiple node labels and models with self-relationships
* Log4j completely removed

![Apache Beam was updated to version 2](/img/Release-1.1/hop-beam.png)

## Various

With the busy start of the year running up to the Hop 1.1.0, the Apache Hop community hasn’t had a lot of time to work on spectacular new features since the Hop 1.1.0 release.

A couple of items worth highlighting:

* the Apache Kafka have been getting quite a bit of attention in code hardening and robustness. Expect some additional functionality in this area soon.
* an Avro Encode transform is work in progress
* the Hop 2.0 branch now builds with Java 11. Follow progress on the [Hop build server](https://ci-builds.apache.org/job/Hop/job/Hop-integration-tests-java11/).
* Hop now support ARM on Linux and in the Docker container

## Community

### new Contributions

With the increased Apache Hop visibility after the graduation and the 1.1.0 release, we’ve seen a significant uptick in the number of forks of the Hop github code repository and contributions. We’ll work on updates statistics on community interaction and contributions soon.

A couple of notable new contributions are SonarCube code cleanup and fixes, Brazilian Portuguese translations and a new [Hop web services in Docker tutorial](https://hop.apache.org/manual/latest/how-to-guides/apache-hop-web-services-docker.html). A huge thank you to everyone who contributed!

### New Committers

The Apache Hop welcomed two new committers in January:

* [Yu-Jui (Ray) Chang](https://github.com/uraychang): Ray started picking up small JIRA tickets months ago and has since then grown to become a valuable member of the Hop development team.
* [Ricardo Gouvea](https://twitter.com/rdegouvea): started the Hop community in Brazil and has been very active in evangelising Hop in Brazil and in Portuguese. Ricardo is building a lot of hands-on Hop experience and provides lots of suggestions and feedback.

### the Apache Hop Community in numbers

The Hop community continues to grow:

* chat: 275 registered members (up from 256) [join](https://chat.project-hop.org)
* LinkedIn: 786 followers (up from 728) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 634 followers (up from 578) [follow](https://twitter.com/ApacheHop)
* YouTube: 415 subscribers (up from 368) [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)
* Meetup: 217 members (up from 215) link: [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts)

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## JIRA Activity

Here’s a quick overview of the 129 tickets the Hop community worked on in January:

* Resolved: 78
* In Progress: 16
* Open: 34
* Closed: 1

The full list of issues that had activity over the last month is available [here](https://issues.apache.org/jira/issues/?jql=project%20%3D%20HOP%20AND%20status%20in%20(Resolved%2C%20Closed)%20AND%20resolved%20%3E%3D%202022-12-01%20AND%20resolved%20%3C%3D%202022-01-31%20ORDER%20BY%20updated%20ASC&startIndex=50)

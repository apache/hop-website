---
title: "Apache Hop 2.5 is available!!"
description: "The latest Apache Hop release 2.5.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2023-06-12T06:49:56+02:00"
authors: bamaer
categories: "2.5, Release, Apache Hop"
preview: Apache Hop 2.5 Released
---
After another two months of work on exactly 100 tickets, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.5.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.5/hop-25.svg)


or [***download Hop 2.5.0 ***](https://hop.apache.org/download/) right away.

Apache Hop 2.5.0 is another mostly bug fixing release with a number of new features.

## Apache Beam Upgrade

Apache Beam has been upgraded to 2.48.0, with support for Apache Spark 3.4, Apache Flink 1.16 and Google Cloud Dataflow.

## Documentation 

### Beam and Google Dataflow how-to guide

The Apache Hop docs now contain a new [how-to guide](https://hop.apache.org//manual/next/pipeline/beam/beam-samples-dataflow.html) to run the Beam pipelines in the samples project on Google Dataflow. 

### Extended Apache Airflow how-to guide

The [Apache Airflow how-to guide](https://hop.apache.org//manual/next/how-to-guides/run-hop-in-apache-airflow.html) has been extended, and now covers all the basics you need to run Apache Hop workflows and pipelines in Apache Airflow. 

### Looping how-to guide

A new [Looping how-to guide](https://hop.apache.org//manual/next/how-to-guides/loops-in-apache-hop.html) explains how to work with the various ways to build loops in workflows and pipelines, and provides guidance on which of these different types to use in different scenarios. 

## Hop Gui Improvements 

The viewport in Hop Gui is now optional. If you prefer scroll bars to horizontally and vertically navigate in Hop Gui, you can now disable the viewport from the "Look and Feel" tab in the configuration perspective. 

![Viewport option](/img/Release-2.5/viewport-option.png)

Fields in your stream can now be sorted by name or by the order the fields were added to the stream. 
Change the option from the "General" tab in the configuration perspective.

![Sort field by name](/img/Release-2.5/sort-field-by-name.png)

## Various changes and improvements

* a new [Intersystems IRIS](https://hop.apache.org//manual/next/database/databases/iris.html) database type 
* improvements, bug fixes in JSON input and (enhanced) output
* improvements, bug fixes in Salesforce input 
* duckdb upgraded to 0.8 (with lots of performance updates and new functionality)
* lots of translation updates, new Polish language added

## Community 

The Hop community continues to grow!

No new committers have been added since the 2.4.0 release.

The overview below shows the community growth compared to the 2.4.0 release in March:

* chat: 587 registered members (up from 548) [join](https://chat.project-hop.org)
* LinkedIn: 1358 followers (up from 1245) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 894 followers (up from 857) [follow](https://twitter.com/ApacheHop)
* YouTube: 838 subscribers (up from 799) [subscribe](https://www.youtube.com/ApacheHop)
* 3Hx Meetup: 279 members (up from 278)  [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/)

![Apache Hop Community Growth](/img/Release-2.5/hop-community-growth.png)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## GitHub Issues 

This release contains work on 100 tickets:

Check out the full list of issues in Apache Hop 2.5.0 in our [Github Issues](https://github.com/apache/hop/issues) 
and the [Release notes](https://github.com/apache/hop/releases/tag/2.5.0-rc1).

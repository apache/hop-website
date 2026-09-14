---
title: "Apache Hop 2.1 is available!!"
description: "The latest Apache Hop release 2.1.0  is now available. Let's walk through the most important new features in this release."
publishDate: "2022-10-14T07:49:56+02:00"
authors: bamaer
categories: "2.1, Release, Apache Hop"
preview: Apache Hop 2.1 Released
---
After four and a half months of work, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.1.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.1/hop-21.svg)


or [***download Hop 2.1.0 ***](https://hop.apache.org/download/) right away.

## MongoDB

![MongDB](/img/Release-2.1/mongodb-logo.svg) Apache Hop has had support for MongoDB since the very first releases, with a [MongoDB connection](https://hop.apache.org/manual/latest/metadata-types/mongodb-connection.html) metadata type and [MongoDB input](https://hop.apache.org/manual/latest/pipeline/transforms/mongodbinput.html) and [MongoDB Output](https://hop.apache.org/manual/latest/pipeline/transforms/mongodbinput.html) transforms. Hop 2.1.0 now adds a new [MongoDB Delete](https://hop.apache.org/manual/next/pipeline/transforms/mongodbdelete.html) transform to the mix.

In addition to this new MongoDB delete transform, the MongoDB drivers and documentation have been updated.

* [HOP-3925](https://issues.apache.org/jira/browse/HOP-3925) MongoDB Delete transform

## Apache Beam

![Apache Beam](/img/Release-2.1/apache-beam-logo.svg) [Apache Beam](https://beam.apache.org) has been updated to 2.41.0, with [Apache Spark](https://spark.apache.org) 3.3.0 and [Apache Flink](https://flink.apache.org) 1.15.2.

The [Apache Spark run configuration](https://hop.apache.org/manual/latest/pipeline/pipeline-run-configurations/beam-spark-pipeline-engine.html) now supports local execution again, making it easier to test your Apache Hop pipelines on Apache Spark.

Your Apache Hop pipelines on any of the supported Apache Beam run configurations should see major performance improvements. We’ve optimized the Beam rows serialization, especially for locking, serialization and removal of redundant checks.

AWS Kinesis is now supported in the Beam run configurations with two new transforms: [Beam Kinesis Consume](https://hop.apache.org/manual/next/pipeline/transforms/beamkinesisconsume.html) and [Beam Kinesis Produce](https://hop.apache.org/manual/next/pipeline/transforms/beamkinesisconsume.html).

* [HOP-3985](https://issues.apache.org/jira/browse/HOP-3985): Support AWS Kinesis over Beam
* [HOP-4170](https://issues.apache.org/jira/browse/HOP-4170): Upgrade Apache Beam to 2.41
* [HOP-4226](https://issues.apache.org/jira/browse/HOP-4226): Beam rows serialize too much data

## Execution Information Framework and Data Profiling

A lot of the work in the 2.1.0 release was spent on a new Execution Information and Data Profiling framework.

Apache Hop users already had the flexibility to run workflows and pipelines from Hop Gui, hop-run or hop-server. What was missing was a unified, transparent and centralized way of keeping track of current and previous executions. That has now been resolved with the new execution information framework.

You can now configure your workflow and pipeline run configuration to use an [execution information location](https://hop.apache.org/manual/next/metadata-types/execution-information-location.html). These locations can be a local file system, a remote Hop Server or a Neo4j graph database.
Execution information includes the run information (parameters, variables, start and time, status and so on), the complete workflow or pipeline log, metrics and (for pipelines) optional [execution data profiles](https://hop.apache.org/manual/next/metadata-types/execution-data-profile.html).

Execution data profiles are another addition in 2.1.0 that allow pipelines to log a number of data profiles for the transforms in your pipeline. Data profiles include the minimum and maximum values, number of (non) null values and so on. Additionally, you can sample the first, last or a random set of rows.

The execution and data profiling information can be consulted in the new Execution Information perspective. This perspective not only lets you consult your execution information, but also lets you drill up to or down from the parent or child workflow or pipeline. Additionally, the embedded workflow and pipeline viewer in the perspective also lets you jump straight to the workflow or pipeline editor.

Check the [Execution Information Perspective](https://hop.apache.org/manual/next/hop-gui/perspective-execution-information.html), [Execution Information Location](https://hop.apache.org/manual/next/metadata-types/execution-information-location.html) and [Execution Data Profile](https://hop.apache.org/manual/next/metadata-types/execution-data-profile.html) docs for more information.

![Execution Information Perspective](/img/Release-2.1/execution-information-perspective.png)

* [HOP-4024](https://issues.apache.org/jira/browse/HOP-4024): Create a new execution information platform
* [HOP-4229](https://issues.apache.org/jira/browse/HOP-4229): document new execution platform

## Kubernetes

![Kubernetes](/img/Release-2.1/kubernetes-logo.svg) Apache Hop already contained a basic Kubernetes Helm chart. With Apache Hop 2.1.0, we’re also releasing new Helm charts for Hop Server and Hop Web. These do not necessarily have to follow the same release cycle as the official Apache Hop releases, hence the 0.1 version number...

In addition to the Helm charts, the Hop docs now contain a how-to guide on [running a Hop pipeline using the Flink Kubernetes operator](https://hop.apache.org/manual/next/pipeline/beam/flink-k8s-operator-running-hop-pipeline.html).

* [HOP-3979](https://issues.apache.org/jira/browse/HOP-3979): Enhance Helm Chart
* [HOP-4162](https://issues.apache.org/jira/browse/HOP-4162): Add hop-web to Helm Charts

## Documentation

Documentation is never-ending ongoing effort. As with every release, the Apache Hop team worked hard to improve and extend the available documentation to support the Apache Hop community as good as possible.

The transform documentation pages have been updated to contain an indication of the supported engines. A lot of these are placeholders for now, but will be updated continuously.

New how-to guides were added on how to work with [Joins and Lookups](https://hop.apache.org/manual/next/how-to-guides/joins-lookups.html) and on how to [run workflows and pipelines from Apache Airflow](https://hop.apache.org/manual/next/how-to-guides/run-hop-in-apache-airflow.html) with the docker operator.

The installation and configuration instructions have been extended with an upgrade section. Installing and configuring Apache Hop already always was a breeze, but this section explains a couple of tweaks.

## New plugins

As with every release, a number of new plugins make their first appearance in Apache Hop:

* ***transforms***
  * the [***Microsoft Access Output***](https://hop.apache.org/manual/next/pipeline/transforms/accessoutput.html) transform lets you write data to Microsoft Access databases. Even though MS Access is not the most advanced data platform, it’s still an indispensable data format in a lot of organizations.\
  ![Microsoft Access](/img/Release-2.1/microsoft-access-logo.svg)
  * the [***Snowflake Bulk Loader***](https://hop.apache.org/manual/next/pipeline/transforms/snowflakebulkloader.html) transform lets you bulk upload data to your Snowflake analytical cloud databases.\
  ![Snowflake](/img/Release-2.1/snowflake-logo.svg)
* ***databases****: [****Apache Hive***](https://hop.apache.org/manual/next/database/databases/apache-hive.html) is now a fully supported database type. Support for Apache Hive was lacking in previous Apache Hop releases. That functionality gap has now been closed.\
![Apache Hive](/img/Release-2.1/apache-hive-logo.svg)
* [HOP-4003](https://issues.apache.org/jira/browse/HOP-4003): add Snowflake Bulk Loader
* [HOP-4109](https://issues.apache.org/jira/browse/HOP-4109): Microsoft Access connector
* [HOP-4262](https://issues.apache.org/jira/browse/HOP-4262): Add support for Apache Hive databases

## Community

The Hop community continues to grow!

The Apache Hop PMC and community welcomed one new committer since the 2.0.0 release.
[Shl Xue](https://github.com/shlxue) made various contributions to Apache Hop internationalization, the Chinese translation and many other areas. Thank you very much and a warm welcome, Shl Xue!

We’d also like to give a shoutout to Iranian community member @morti, who helped to identify, troubleshoot and test the Apache Beam performance improvements. Thank you, Nouri!

The overview below shows the community growth compared to the 2.0.0 release in June:

* chat: 440 registered members (up from 355) [join](https://chat.project-hop.org)
* LinkedIn: 1026 followers (up from 911) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 780 followers (up from 714) [follow](https://twitter.com/ApacheHop)
* YouTube: 644 subscribers (up from 519) [subscribe](https://www.youtube.com/ApacheHop)
* 3Hx Meetup: 259 members (up from 236)  [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/)

![Apache Hop Community Growth](/img/Release-2.1/hop-community-growth.png)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## JIRA

Hop 2.1.0 contains work on 213 tickets:

* Resolved: 204
* Closed: 9

Check the [Hop Jira](https://issues.apache.org/jira/browse/HOP-3962?jql=project%20%3D%20%22Apache%20Hop%22%20and%20fixVersion%20%3D%202.1.0) for a full overview of all tickets.

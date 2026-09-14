---
title: "Apache Hop 2.0 is available!!"
description: "Apache Hop 2.0.0 adds support for Java 11, Chinese translations, new Formula, Avro, Drools and Apache Doris plugins and lots of improvements and bug fixes."
publishDate: "2022-06-02T07:49:56+02:00"
authors: bamaer
categories: "2.0, Release, Apache Hop"
preview: Apache Hop 2.0 Released
---
After three months of work, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.0.0.\
A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.0/hop-20.svg)


or [***download Hop 2.0.0 ***](https://hop.apache.org/download/) right away.

## Upgrade to Java 11

Upgrading all of the Apache Hop code to not only run but more importantly build reliably on Java 11 instead of Java 8 is not a small task, and therefore justified a major release.

The upgrade to Java 11 has been in te making for months, meticulously fixing and extending the tests and code issues. With this 2.0 release, Hop runs reliably on Java 11.

We used the necessary code changes for the Java 11 upgrade as an opportunity to make some code cleanup and breaking API changes. Check [the docs](https://hop.apache.org/dev-manual/latest/upgrading-to-20.html) to see which changes you need to make to upgrade your Hop plugins to 2.0.

## Chinese translations

Apache Hop is increasingly popular in Asia, with a large and growing Chinese community.

Hop 2.0.0 includes a major contribution (thanks, [Shl Xue](https://github.com/shlxue)!) to translate Apache Hop to Simplified Chinese (zh_CN). This contribution includes updates and improvements to Hop Translator.

![Hop Gui - Simplified Chinese](/img/Release-2.0/hop-gui-simplified-chinese.png)

## New transform plugins

### Apache Avro File Output

The [Apache Avro File Output](https://hop.apache.org/manual/next/pipeline/transforms/avro-file-output.html) transforms writes to binary files or fields in Avro Binary or JSON formats.

![Avro File Output transform](/img/Release-2.0/apache-avro-file-output-transform.png)

### Apache Doris Bulk Loader

[Apache Doris](https://doris.apache.org) is a modern MPP analytical database product. It can provide sub-second queries and efficient real-time data analysis. With it’s distributed architecture, up to 10PB level datasets will be well-supported and easy to operate.

The [Apache Doris Bulk Loader](https://hop.apache.org/manual/next/pipeline/transforms/dorisbulkloader.html) transform allows you to insert data into Apache Doris at high speed and volume, making it a faster way to load data than using the traditional database insert statements.

The Apache Doris Bulk Loader transform was kindly contributed by the Apache Doris community.

![Avro File Output transform](/img/Release-2.0/apache-doris-bulk-loader-transform.png)

### Drools Rules Accumulator

The [Drools Accumulator](https://hop.apache.org/manual/next/pipeline/transforms/rulesaccumulator.html) transform collects incoming rows and executes them against a rule set. This may be useful to determine the answer to a question or otherwise analyze a dataset.

![Drools Rules Accumulator transform](/img/Release-2.0/drools-rules-accumulator-transform.png)

### Drools Rules Executor

The [Drools Rule Executor](https://hop.apache.org/manual/next/pipeline/transforms/rulesexecutor.html) transform allows fields of incoming rows to be executed against a rule set. This may be useful to determine additional information or route rows onto another transform.

![Drools Rules Executor transform](/img/Release-2.0/drools-rules-executor-transform.png)

Many thanks to add these transforms to Apache Hop, [Sergio](https://twitter.com/sramazzina)!

### Formula

The [Formula](https://hop.apache.org/manual/next/pipeline/transforms/formula.html) transform allows you to apply Excel-like formulas and functions on fields in a pipeline.

The screenshot below shows a couple of examples of date and time functions with the Apache Hop graduation date.

![Formula transform](/img/Release-2.0/formula-transform.png)

## Apache Beam upgrade

[Apache Beam](https://beam.apache.org) is an advanced unified programming model that allows you to implement batch and streaming data processing jobs that run on any execution engine. Popular execution engines are for example Apache Spark, Apache Flink or Google Cloud Platform Dataflow.

Apache Beam has been an important plugin in Apache Hop, and was upgraded to 2.38.0 with [Apache Spark](https://spark.apache.org) 3.1.3 and [Apache Flink](https://flink.apache.org) 1.14.4.

![Apache Beam](https://beam.apache.org/images/beam_logo_navbar.png)

## Various

### Variable Annotations

A new `@Variable` annotation makes it easier for Hop developers to declare variables at the right place in the code.

Static final fields annotated with "Variable" are automatically recognized and registered as a described variable.

Thanks, [Nicolas](https://github.com/nadment)!

### Dimension Lookup/Update new dialog

The [Dimension Lookup/Update](https://hop.apache.org/manual/next/pipeline/transforms/dimensionlookup.html) transform has been around for ages. Over time, so much functionality was added to the transform’s dialog that it became cluttered.

The dialog has been cleaned up and now shows the available options in 4 tabs: keys, fields, technical key and versioning.

![Dimension Lookup Update transform](/img/Release-2.0/dimension-lookup-update-transform.png)

### Integration tests

The library of integration tests continues to grow. Hop 2.0 was tested on a daily basis with close to 200 integration tests. These integration tests make sure that bugs that are fixed remain fixed (prevent regressions), to make sure all existing workflows and pipelines continue to work as Hop evolves, and help to keep Hop as a platform as robust and reliable as possible.

Feel free to follow the status of the integration tests at any moment on the [Hop CI Builds](https://ci-builds.apache.org/job/Hop/job/Hop-integration-tests/).

## Community

The Hop community continues to grow!

The overview below shows the community growth compared to the 1.2.0 release in March:

* chat: 355 registered members (up from 300) [join](https://chat.project-hop.org)
* LinkedIn: 911 followers (up from 840) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 714 followers (up from 670) [follow](https://twitter.com/ApacheHop)
* YouTube: 519 subscribers (up from 452) [subscribe](https://www.youtube.com/ApacheHop)
* 3Hx Meetup: 236 members (up from 219)  [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## JIRA

Hop 2.0.0 contains work on 151 tickets:

* Resolved: 143
* Closed: 8

Check the [Hop Jira](https://issues.apache.org/jira/browse/HOP-3962?jql=project%20%3D%20%22Apache%20Hop%22%20and%20fixVersion%20%3D%202.0.0) for a full overview of all tickets.

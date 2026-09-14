---
title: "Apache Hop 2.6 is available!!"
description: "The latest Apache Hop release 2.6.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2023-09-18T06:49:56+02:00"
authors: bamaer
categories: "2.6, Release, Apache Hop"
preview: Apache Hop 2.6 Released
---
After a summer of hard work on 65 tickets, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.6.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.6/hop-26.svg)


or [***download Hop 2.6.0 ***](https://hop.apache.org/download/) right away.

After a number of mostly bug fixing releases, Apache Hop 2.6.0 comes with a couple of new features.

## Apache Beam Upgrade and doc updates

The [Apache Beam](https://beam.apache.org) dependency in Apache Hop 2.6.0 has been upgraded to 2.50.0, with support for Apache Spark 3.4, Apache Flink 1.16 and Google Cloud Dataflow.

The [Running the Beam samples](https://hop.apache.org//manual/latest/pipeline/beam/running-the-beam-samples.html) docs section now also contains a [guide](https://hop.apache.org//manual/latest/pipeline/beam/beam-samples-dataflow.html) to run the Apache Hop samples on Google Cloud Dataflow. 

## New Google Transforms 

### Google Analytics 4 

Since Google switched Google Universal Analytics off on July 1st, all Google Analytics traffic now flows through GA4 properties. 

This new [Google Analytics 4](https://hop.apache.org//manual/latest/pipeline/transforms/google-analytics.html) Input transform collects data from Google Analytics dimensions and metrics into your pipelines. 

![Google Analtytics 4 transform](/img/Release-2.6/google-analytics-4-transform.png)

### Google Sheets Input and Output 

The [Google Sheets Input](https://hop.apache.org//manual/latest/pipeline/transforms/google-sheets-input.html) and [Google Sheets Output](https://hop.apache.org//manual/latest/pipeline/transforms/google-sheets-output.html) transforms have been available in the [external plugins repository](https://github.com/project-hop/hop-plugins) for a couple of years.

Originally contributed by https://github.com/jfmonteil/[
Jeff Monteil], these plugins have now been integrated in the main Apache Hop code base, and have been updated to work with the latest Apache Hop api and the latest Google Sheets and Google Drive apis.

![Google Sheets Input transform](/img/Release-2.6/google-sheets-input-transform.png)

![Google Sheets Output transform](/img/Release-2.6/google-sheets-output-transform.png)

## Community 

The Hop community continues to grow!

No new committers have been added since the 2.5.0 release.

The overview below shows the community growth compared to the 2.5.0 release in June:

* chat: 641 registered members (up from 587) [join](https://chat.project-hop.org)
* LinkedIn: 1.445 followers (up from 1358) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 906 followers (up from 894) [follow](https://twitter.com/ApacheHop)
* YouTube: 892 subscribers (up from 838) [subscribe](https://www.youtube.com/ApacheHop)
* 3Hx Meetup: 279 members (stable)  [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/)

![Apache Hop Community Growth](/img/Release-2.6/hop-community-growth.png)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## GitHub Issues 

This release contains work on 65 tickets:

Check out the full list of issues in Apache Hop 2.6.0 in our [Github Issues](https://github.com/apache/hop/issues) 
and the [Release notes](https://github.com/apache/hop/releases/tag/2.6.0-rc1).

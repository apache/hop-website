---
title: "Apache Hop 2.13 is available!!"
description: "The latest Apache Hop release 2.13.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2025-04-22T06:44:56+02:00"
authors: bamaer
categories: "2.13, Release, Apache Hop"
preview: Apache Hop 2.13 Released
---
After about two months of work on 84 tickets by 8 contributors, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.13.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.13/hop-213.svg)


or [***download Hop 2.13.0 ***](https://hop.apache.org/download/) right away.

## Multiple GCP Storage locations 

Apache Hop now supports multiple [GCP Storage](https://hop.apache.org//manual/next/metadata-types/google-storage-authentication.html) locations. This allows you to connect to multiple storage accounts at the same time.

![Multiple GCP Storage locations](/img/Release-2.13/gcs-accounts.png)

## MySQL Bulk Loader Transform

In addition to the MySQL Bulk Loader workflow action, Apache Hop 2.13 now includes a [MySQL Bulk Loader transform](https://hop.apache.org//manual/next/pipeline/transforms/mysqlbulkloader.html). This allows you to load data into MySQL in bulk from an Apache Hop pipeline.

![MySQL Bulk Loader transform](/img/Release-2.13/mysql-bulk-loader-transform.png)

## Various improvements

* The Text File Input transform now support new line characters in fields. 
* Apache Hop workflows now have new and improved validations.

## Community 

The Hop community continues to grow!

The overview below shows the community growth compared to the 2.12.0 release in December:

* LinkedIn: 3.050 followers (up from 2.847) [follow](https://www.linkedin.com/company/hop-project)
* Twitter/X: 973 followers (up from 956) [follow](https://twitter.com/ApacheHop)
* YouTube: 1.390 subscribers (up from 1.320) [subscribe](https://www.youtube.com/ApacheHop)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## GitHub Issues 

This release contains work on 84 tickets by 8 contributors.

Check out the full list of issues in Apache Hop 2.13.0 in our [Github Issues](https://github.com/apache/hop/issues) 
and the [Release notes](https://github.com/apache/hop/releases/tag/2.13.0-rc1).

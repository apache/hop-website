---
title: "Apache Hop 2.4 is available!!"
description: "The latest Apache Hop release 2.4.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2023-03-31T06:49:56+02:00"
authors: bamaer
categories: "2.4, Release, Apache Hop"
preview: Apache Hop 2.4 Released
---
After another two months of work on 98 tickets, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.4.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.4/hop-24.svg)


or [***download Hop 2.4.0 ***](https://hop.apache.org/download/) right away.

Apache Hop 2.4.0 is another mostly bug fixing release with a number of new features.

## New Features 

[DuckDB](https://hop.apache.org/manual/next/database/databases/duckdb.html) is now a supported database type. DuckDB is an in-process SQL OLAP and column-oriented database management system. Check the [DuckDB](https://duckdb.org/) website for more information.

![DuckDB](https://duckdb.org/images/DuckDB_Logo_dl.png)

The Relational Database Connection metadata type in Hop Gui now shows which database driver (if any) and version is available. 

![Relational Database Connection driver info](/img/Release-2.4/rdbms-driver-info.png)

When selecting multiple transforms, you can now enable or disable all hops in this selection from the context dialog. 

![Enable of disable hops between selected transforms](/img/Release-2.4/enable-disable-hops-between-selection.png)

A new JSR-223 [Script transform](https://hop.apache.org/manual/next/pipeline/transforms/script.html) supports scripts in ECMAScript (JavaScript as part of the JVM), Groovy and Python (through the Jython library).

![Script transform](/img/Release-2.4/script-transform.png)

A new [Data Validator](https://hop.apache.org//manual/latest/pipeline/transforms/validator.html) transform. This transform allows you to add data validations which can each validate the input data for the various fields in the input rows.

![Data Validator transform](/img/Release-2.4/data-validator-transform.png)

You can now change the default behavior of the environment dropdown box (show all environments) to only show the environments for the selected project. (Configuration perspective -> Plugins -> Projects -> check "Restrict environment list to active project")

![Restrict environment list to current project](/img/Release-2.4/restrict-environment-list-to-current-project.png)

## Improvements 

A Lot of bugs have been fixed in among others the [Filter rows](https://hop.apache.org//manual/latest/pipeline/transforms/filterrows.html), [Formula](https://hop.apache.org//manual/latest/pipeline/transforms/formula.html) and [Microsoft Excel input](https://hop.apache.org//manual/latest/pipeline/transforms/excelinput.html) (large file handling) transforms. 

Apache Hop comes with lots of new and improved documentation pages, translation updates and a batch of new samples in the samples project. 

Translations for German, Italian and French have been updated.

## Container image 

The default path for the hop installation inside the container image has been updated from `/opt/hop/hop`
to `/opt/hop`.
Make sure to update your paths if you extended or modified the base image.

## Community 

The Hop community continues to grow!

No new committers have been added since the 2.3.0 release.

The overview below shows the community growth compared to the 2.3.0 release in January:

* chat: 548 registered members (up from 516) [join](https://chat.project-hop.org)
* LinkedIn: 1245 followers (up from 1180) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 857 followers (up from 844) [follow](https://twitter.com/ApacheHop)
* YouTube: 799 subscribers (up from 739) [subscribe](https://www.youtube.com/ApacheHop)
* 3Hx Meetup: 278 members (up from 276)  [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/)

![Apache Hop Community Growth](/img/Release-2.4/hop-community-growth.png)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## GitHub Issues 

This release contains work on 98 tickets:

Check out the full list of issues in Apache Hop 2.4.0 in our [Github Issues](https://github.com/apache/hop/issues) 
and the [Release notes](https://github.com/apache/hop/releases/tag/2.4.0-rc1).

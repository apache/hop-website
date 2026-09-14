---
title: "Apache Hop 1.1 is available!!"
description: Hop 1.1.0 is the Hop first release as a Top-Level Project. This release contains four months of work and contains tons of improvements and bugfixes.
publishDate: "2022-01-24T07:59:56+02:00"
authors: bamaer
categories: "1.1, Release, Apache Hop"
preview: Apache Hop 1.1 Released
---
After four months of work, the Apache Hop community is pleased to announce the general availability of Apache Hop 1.1.0.\
A huge thank you to everyone who made this possible.

![ width="45](/img/Release-1.1/hop-11.svg)


or [***download Hop 1.1.0 ***](https://hop.apache.org/download/) right away.

## Known Issue

There is a known issue where text is displayed as white on a white background in Windows. Enable the 'Use look of OS' option in `Options -> Look & Feel` to avoid this.

![Use Look of OS](/img/Release-1.1/use-look-of-os.png)

## Hop Server

* Hop Server can now be started with [SSL (https) enabled](https://hop.apache.org/manual/latest/hop-server/index.html#_ssl_configuration).
* [Asynchronous web services](https://hop.apache.org/manual/latest/hop-server/async-web-service.html) can be used to execute long-running workflows. Instead of results, this webservice returns a unique ID that can be used to query the server for that workflow or pipeline’s status.
* Hop Server can now be started with projects and environments as parameters.

## Docker

* the project and environment name are now optional
* project and environment are now supported in long-lived container
* logging options can now be set in the long-lived container (max_log_lines, max_log_timeout_minutes, object_timeout_minutes).
* the short-lived container now returns the correct exit code for the executed hop-run command.

## Apache Beam updates and improvements

Hop 1.1.0 comes with new and updated Apache Beam libraries.

* upgraded versions: Apache Beam in Hop was upgraded to 2.35.0, with support for Apache Spark 3.1.2 and Flink 1.13.5.
* Beam on Google Cloud Dataflow now supports service accounts.
* Beam on Google Cloud Dataflow now support DataflowServiceOptions which pass various options through if they’re not available in the GUI

## New and updated plugins

* the [***Hop Server Status***](https://hop.apache.org/manual/latest/pipeline/transforms/serverstatus.html) transform retrieves a lot of server and operating system metrics from one of your Hop Servers.
* the [***Apache Tika***](https://hop.apache.org/manual/latest/pipeline/transforms/apache-tika.html) transform parses files in all sorts of formats and extracts the text content as well as available metadata it can extract.
* the [***Metadata Input***](https://hop.apache.org/manual/latest/pipeline/transforms/metadata-input.html) gives you access to the Hop Metadata items in the current project. It outputs all the metadata objects of all types unless one or more types are filtered.
* the [***Neo4j Graph Output***](https://hop.apache.org/manual/latest/pipeline/transforms/neo4j-graphoutput.html) transform now supports
  * models with multiple relationships between two nodes
  * models with multiple node labels
  * models with self-relationships

![Apache Tika transform](/img/Roundup-2022-01/apache-tika-transform.png)

![Hop - Neo4j Graph Output](/img/Roundup-2021-12/hop-transforms-neo4j-graph-output.png)

## Hop Gui improvements

Hop GUI continues to evolve. Hop 1.1.0 contains a lot of minor improvements that together significantly improve the Hop user experience.

* large pipelines and workflows: sometimes there is no way around building or working with large workflows and pipelines (even though that is against [best practices](https://hop.apache.org/manual/latest/best-practices/index.html#_size_matters)). Hop Gui now lets you scroll through large workflows and pipelines correctly. The additional ***SCROLL-drag*** gesture makes navigating large workflows and pipelines in Hop GUI even easier.
* File Explorer Perspective:
  * files and folders are now loaded lazily, reducing the need to wait for refreshes or a "hanging" Hop Gui.
  * any text file type can now be edited in the File Explorer perspective (this was only possible for CSV and JSON in Hop 1.0).
  * users now get a warning when trying to open large files

## Various

* Log4j removal: Hop never actively used Log4j but included Log4j libraries for developer convenience. These libraries have been removed in 1.1.0.
* Kafka consumer transform improvements: improved error handling, logging from sub-pipelines is now passed to parent pipeline.
* search in the context (popup) dialog is now keyword-aware. This works with internationalization, so searching for keywords in your own language (if available in Hop) also works.
* CockroachDB is now a supported database type
* documentation continues to grow in depth and in breadth. Hop 1.1.0 contains almost 500 individual documentation pages.
* English, French and Italian have complete translations. The other supported languages have been moved to beta. Check the [translation contribution guide](https://hop.apache.org/community/contribution-guides/translation-contribution-guide/) if you want to help to translate Hop to your own language.

## Community

The Hop community continued to grow significantly since the 1.0 release:

* chat: 264 registered members (Hop 1.0: 210) [join](https://chat.project-hop.org)
* LinkedIn: 758 followers (Hop 1.0: 545) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 606 followers (Hop 1.0: 476) [follow](https://twitter.com/ApacheHop)
* YouTube: 399 subscribers (Hop 1.0: 232) [subscribe](https://www.youtube.com/ApacheHop)
* 3Hx Meetup: 216 members (Hop 1.0: 167)  [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/)

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## JIRA

Hop 1.1.0 contains work on 235 tickets:

* Resolved: 219
* Closed: 16

Check the [Hop JIRA](https://issues.apache.org/jira/browse/?jql=project%20%3D%20%22Apache%20Hop%22%20AND%20fixVersion%20~%201.1.0%20and%20status%20%3D%20Resolved%20order%20by%20updated%20desc) for a full overview of all tickets.

## Download Hop 1.1.0

[***Download Hop 1.1.0***](https://hop.apache.org/download/).

---
title: Roundup December 2021
description: "The Apache Hop (Incubating) recap for December 2021:"
publishDate: "2022-01-10T07:59:56+02:00"
authors: bamaer
categories: "Roundup, Apache Hop"
preview: Roundup December 2021
---
## Graduation - Hop is now a Top Level Project

As an early Christmas present, Apache Hop’s graduation was confirmed by that ASF Board on December, 16th.

This graduation marks the end of Hop’s passage through the Apache Incubator, where the Hop team learned how to work "The Apache Way". We created four releases (0.60, 0.70, 0.99 and 1.0), gradually improving our release process and fixing any copyright and licensing issues.

The Incubation process resulted in the active and mature project Hop currently is, with a thriving and growing community. Thanks a lot to everyone involved!

An official press release from the Apache Software Foundation will be available soon.

![Apache Hop - Graduated as a Top Level Project](/img/Roundup-2022-01/hop-graduation.jpeg)

## Hop 1.1.0 preparation

Work on Hop 1.1.0 continued during the graduation process.

Hop 1.1.0 will contain work on well over 200 tickets.

The cutoff point for Hop 1.1.0 will be at the end of this week. Preparing and building releases will be a faster process now that Hop left the incubator.

Stay tuned for more news on Hop 1.1.0 soon!

## Hop 2.0 preparation - Java 11 build is taking shape

As always, the Hop team has been fighting on multiple fronts.

In addition to the graduation and the Hop 1.1.0 release preparation, we created a [new Java 11 build](https://ci-builds.apache.org/job/Hop/job/Hop-integration-tests-java11/) in preparation for Hop 2.0.

It took a while to do the necessary code changes, but the Java 11 and integration tests now run successfully.

Thanks for all the hard work on this, Hans!

## Lots and lots of improvements and bug fixes

As always, the Hop community went bug hunting in December. Tens of bugs have been found and fixed, which will allow Hop 1.1.0 to be yet another robust and stable release.

### New Transform Plugins

* [Metadata input](https://hop.apache.org/manual/latest/pipeline/transforms/metadata-input.html): gives you access to the Hop Metadata items in the current project
* [Apache Tika](https://hop.apache.org/manual/latest/pipeline/transforms/apache-tika.html): parses files in all sorts of formats and extracts the text content as well as available metadata it can extract

![Apache Tika transform](/img/Roundup-2022-01/apache-tika-transform.png)

### Hop Server

The [Hop Server Asynchronous Web Service](https://hop.apache.org/manual/latest/hop-server/async-web-service.html#top) is used to execute long-running workflows. This web service returns the unique ID of the executing workflow. This ID can be used to periodically check the workflow’s status.

Hop Server can now be started with SSL enabled.

### Log4j removed

Even though Hop never used Log4j for logging, a Log4j jar was shipped with Hop versions up to 1.0.

This Log4j jar was for a version (1.2.17) that was not impacted by [CVE-2021-45046](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45046) and subsequent vulnerabilities.

Since Hop never used Log4j, the Hop team decided to remove Log4j from the build entirely. Hop 1.1.0 will ship without any Log4j jars.

### Various

* Beam was upgraded to 2.34.0, support for Spark was upgraded to 3.
* the File Explorer now uses lazy loading. This makes the perspective respond a lot snappier when browsing files and folders.
* the Docker long-lived container now supports projects and environments
* Metadata Injection for an additional number of transforms. Check the [full list](https://hop.apache.org/manual/latest/pipeline/metadata-injection.html#top) for an overview.

## Community

The Hop community continues to grow:

* chat: 256 registered members (up from 243) [join](https://chat.project-hop.org)
* LinkedIn: 728 followers (up from 690) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 578 followers (up from 545) [follow](https://twitter.com/ApacheHop)
* YouTube: 368 subscribers (up from 325) [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)
* Meetup: 215 members (up from 211) link: [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts)

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## JIRA Activity

Here’s a quick overview of the 79 tickets the Hop community worked on in December

* Resolved: 62
* In Progress: 1
* Open: 38
* Closed: 4

The full list of issues that had activity over the last month is available [here](https://issues.apache.org/jira/issues/?jql=project%20%3D%20HOP%20AND%20status%20in%20(Resolved%2C%20Closed)%20AND%20resolved%20%3E%3D%202021-11-01%20AND%20resolved%20%3C%3D%202021-11-30%20ORDER%20BY%20updated%20ASC&startIndex=50)

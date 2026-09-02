---
title: "Apache Hop 2.14 is available!!"
description: "The latest Apache Hop release 2.14.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2025-05-19T06:44:56+02:00"
authors: bamaer
categories: "2.14, Release, Apache Hop"
preview: Apache Hop 2.14 Released
---
After about two months of work on 35 tickets by 7 contributors, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.14.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.14/hop-214.svg)


or [***download Hop 2.14.0 ***](https://hop.apache.org/download/) right away.

## Updated release cycle

As discussed on the [development mailing list](https://lists.apache.org/thread/hwnoo1dl1r2vk039qocsn2nbly1gvrbx), the Apache Hop project is moving to a quarterly release cycle. 
This means that this release comes quite quickly after 2.13 and is therefore quite small. The next release will be 2.15, which is scheduled for August 2025.

## Mail server metadata type 

Apache Hop now supports a new metadata type for [Mail Server](https://hop.apache.org//manual/next/metadata-types/mail-server.html). This allows you to connect to a mail server and send emails from Apache Hop workflows and pipelines.

The actions and transforms that use this metadata type are:

* actions: 
  * Mail
  * Get Mails (POP3/IMAP)
* transforms:
  * Email messages input
  * Mail 

To support this new metadata type, the integration tests were updated and extended and now uses [Apache James](https://james.apache.org) as a mail server.

![Mail Server metadata](/img/Release-2.14/mail-server-metadata-type.png)

## Various improvements and fixes 

* metadata fetch for query operations is now faster 
* the file explorer perspective now shows different colors for stages files 

![File Explorer Perspective staged files](/img/Release-2.14/staged-files-color.png)

* the Text File Input transform new has a new option to show file contents from and to a range of lines, instead of just the first lines of a file.

![Text File Input](/img/Release-2.14/file-content-from-to.png)

* Hop Web has a fix in the error logging widget
* deleting an environment now correctly clears all variables for that environment 
* a fix was added to the "Inherit all variables" option in the pipeline executor transform. 

## Community 

The Hop community continues to grow!

The overview below shows the community growth compared to the 2.13.0 release in April:

* LinkedIn: 3.130 followers (up from 3.050) [follow](https://www.linkedin.com/company/hop-project)
* Twitter/X: 976 followers (up from 973) [follow](https://twitter.com/ApacheHop)
* YouTube: 1.400 subscribers (up from 1.390) [subscribe](https://www.youtube.com/ApacheHop)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## GitHub Issues 

This release contains work on 35 tickets by 7 contributors.

Check out the full list of issues in Apache Hop 2.14.0 in our [Github Issues](https://github.com/apache/hop/issues) 
and the [Release notes](https://github.com/apache/hop/releases/tag/2.14.0-rc1).

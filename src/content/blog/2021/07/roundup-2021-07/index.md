---
title: Roundup June 2021
publishDate: "2021-07-02T07:59:56+02:00"
authors: bamaer
categories: "Roundup, Apache Hop"
preview: Roundup June 2021
---
## Roundup June 2021

As always at the start of another new month, let’s have a look at what happened at Hop over the last month. Here’s the recap for June 2021!

## Hop 0.99 Release process

We’ve created a couple of release candidate for Apache Hop (Incubating) 0.99.
Since the Hop code base no longer contains a WIP (Work In Progress) disclaimer, the review process has become a little more strict. We’ve encountered a problem with a limited number of files in the Hop code base. These files were ported from Pentaho Data Integration (Kettle) after the initial import and, as it turns out, we haven’t followed the onboarding process correctly for these files.

Even though the amount of code was fairly limited, we’ve decided to go through the entire code base and remove any source code that may cause issues further down the road. After two years of heavy development on the Hop code base, Porting code requires so much refactoring to fit into the Hop api and to meet our code quality standards by now that it’s just not worth it anymore. Going forward, we’ll focus on new development instead of (partly) porting over existing code, which will only improve Apache Hop in the long run.

We still expect to release Apache Hop 0.99, closely folowed by Hop 1.0, some time this summer. As this additional code cleanup will bring Hop closer to graduating as an Apache Hop Top Level Project (TLP), we consider the little bit of delay that comes with the additional cleanup a good thing. .

## VFS Improvements

A lot of work has gone into further integration of [VFS](http://hop.apache.org/manual/latest/vfs.html) in Hop. VFS is now available in almost every part of Hop.

Among other things, VFS support for Hop project folders means your projects can now live in any supported VFS location, including cloud storage like AWS S3, Google Drive or Google Cloud Storage and Azure Blob Service. In combination with a quickly maturing Hop Web, this brings using Hop in cloud environments a lot closer.

## Importer Improvements

The Pentaho Data Integration (Kettle) importer has received a major update:

* as part of the VFS improvements, projects can now be imported to any VFS folder you choose
* option to skip existing target files
* option to skip hidden files and folders
* option to skip folders in the source
* variables are now imported as environment rather than project variables (with the option to specify your environment file).  .

[![Pentaho Data Integration (Kettle) Importer](/img/Roundup-2021-07/kettle-importer.png)](/img/Roundup-2021-07/kettle-importer.png)

## Hop Web

Hop Web continues to mature. The code base has been fully integrated for months now, and we’ve been hunting and fixing bugs since then.

Hop Gui was designed from the start to provide one single, fully integrated user interface for the major desktop platforms (Windows, Linux and Mac OS), the web and even mobile devices. With Hop Web reaching maturity, we’re getting closer to that goal.

Hop Web now even has its own dark mode. Trying Hop Web on your local machine has never been easier:

`docker pull apache/hop-web:1.0-SNAPSHOT docker run -p 8080:8080 -e HOP_WEB_THEME=dark apache/hop-web:1.0-SNAPSHOT`

[![Hop Web Dark Mode](/img/Roundup-2021-07/hop-web-dark.jpeg)](/img/Roundup-2021-07/hop-web-dark.jpeg)

## Various

As always, we’ve made numerous bug fixes and minor improvements over the course of the last month. A couple of additional changes stand out:

* Metadata Injection support for the [Row Denormaliser](http://hop.apache.org/manual/latest/pipeline/transforms/rowdenormaliser.html) and [Data Grid](http://hop.apache.org/manual/latest/pipeline/transforms/datagrid.html) transforms.
* numerous small improvements in the project and environment dialogs: projects can now correctly be renamed, there is a protection to delete or modify projects that have child projects etc.

[![Project Dialog](/img/Roundup-2021-07/hop-project-dialog.png)](/img/Roundup-2021-07/hop-project-dialog.png)

## 3Hx (Hot Hop Hangout) Sessions

We had two 3Hx session in June:

* [3H8 - Apache Hop in Docker](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/events/278469535/). The recording is available on [youtube](https://www.youtube.com/watch?v=ayMD6RST4Do)
* [3H9 - End-to-end Workflows](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts/events/278470431/). The recording is available on [youtube](https://www.youtube.com/watch?v=63LxM3gU1sQ)

<a id="community"></a>

## Community

### Hop Mailing lists

Don’t forget to subscribe to our [dev](mailto:dev-subscribe@hop.apache.org) and [users](mailto:users-subscribe@hop.apache.org) mailing lists!
These mailing lists allow us to discuss and make decisions in a process that is as transparent and inclusive as possible, and as such are an important tool in our communication as an Apache project.

The dev and user lists currently _only_ have 32 and 23 subscribers respectively. We can do better, Hop Community!

Subscribing is as easy as sending an empty email by clicking the links below:

* [users](mailto:users-subscribe@hop.apache.org): general how-to and functionality questions. Ask us anything!
* [dev](mailto:dev-subscribe@hop.apache.org): developer discussions. There’s a lot of informal discussion going on in our [chat channels](https://chat.project-hop.org), but decisions that matter are taken on the dev list!

### Hop Community

The Hop Community is pleased to welcome [Bruno Silva](https://twitter.com/bfasilva/) as a committer. Over the past months, Bruno has proven to provide valuable input to the project. Welcome on board, Bruno!

The Hop community continues to grow:

* chat: 191 registered members (up from 181) [join](https://chat.project-hop.org)
* LinkedIn: 529 followers (up from 509) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 451 followers (up from 419) [follow](https://twitter.com/ApacheHop)
* YouTube: 201 subscribers (up from 166) [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)
* Meetup: 162 members (up from 139) link: [join](https://www.meetup.com/3hx-apache-hop-incubating-hot-hop-hangouts)

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

<a id="tickets"></a>

## JIRA Activity

The Hop community worked on over 100 tickets again in June.

* Resolved: 70
* In Progress: 6
* Open: 24
* Closed: 5

The full list of issues that had activity over the last month is available [here](https://issues.apache.org/jira/issues/?jql=project%20%3D%20HOP%20AND%20status%20in%20(Resolved%2C%20Closed)%20AND%20resolved%20%3E%3D%202021-06-01%20AND%20resolved%20%3C%3D%202021-06-30%20ORDER%20BY%20updated%20ASC&startIndex=50)

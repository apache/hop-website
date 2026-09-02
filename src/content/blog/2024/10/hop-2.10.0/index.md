---
title: "Apache Hop 2.10 is available!!"
description: "The latest Apache Hop release 2.10.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2024-10-07T06:44:56+02:00"
authors: bamaer
categories: "2.10, Release, Apache Hop"
preview: Apache Hop 2.10 Released
---
After about four months of work on 139 tickets, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.10.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.10/hop-210.svg)


or [***download Hop 2.10.0 ***](https://hop.apache.org/download/) right away.

Apache Hop 2.10.0 comes with a lot of bug fixes, code hardening and a couple of new features. 

## Notable bug fixes

* improved dialog handling on MacOS 
* the `Save` shortcut (CTRL/CMD+S) in the metadata perspective now works correctly 
* the "Export to SVG" functionality now works correctly in other languages/locales other than `en_US`
* the `Dimension Lookup/Update` transform in lookup mode now works correctly outside of Hop Gui (there was an issue when running in `hop-run`)

## New Features 

* Apache Hop is now built on Java 17. Apache Hop 2.10 will no longer work on Java 11 or lower. 
* Apache Beam upgrade to 2.59.0
* Upgrade of Azure storage dependencies 
* All transforms and actions now support variables in the database connection name 

### Block code execution in UDJC and UDJE 

The User Defined Java Class and User Defined Java Expression now provide the option to block unwanted code. 

This code exclusion can be configured through an XML file in the `Janino` plugin folder. Check the [UDJE docs](https://hop.apache.org/manual/next/pipeline/transforms/userdefinedjavaexpression.html#_blocking_specific_code) for more information. This configuration works exactly the same way in the UDJC transform. 

### Ability to configure multiple Azure accounts 

The metadata perspective now contains a new [Azure Authentication](https://hop.apache.org/manual/next/metadata-types/azure-authentication.html) metadata type. 

This allows Apache Hop users to configure multiple Azure accounts and use the appropriate account at various points in their data pipelines. 

### File Explorer perspective improvements 

The File Explorer perspective has been enhanced to 

* provide a right-click menu with a number of common operations through a right-click menu
* new file types are recognized and shown with the corresponding icon 
* files in `.gitignore` are now shown in light grey 

![File Explore Perspective](/img/Release-2.10/file-explorer.png)

## Community 

The Hop community continues to grow!

The overview below shows the community growth compared to the 2.9.0 release in May:

* chat: 867 registered members (up from 780) [join](https://chat.project-hop.org)
* LinkedIn: 2.262 followers (up from 1.776) [follow](https://www.linkedin.com/company/hop-project)
* Twitter/X: 949 followers (up from 947) [follow](https://twitter.com/ApacheHop)
* YouTube: 1.220 subscribers (up from 1.100) [subscribe](https://www.youtube.com/ApacheHop)

![Apache Hop Community Growth](/img/Release-2.10/hop-community-growth.png)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## GitHub Issues 

This release contains work on 139 tickets by 14 contributors, including 4 new contributors: 

* [dave-csc](https://github.com/dave-csc)
* [hector-stratebi](https://github.com/hector-stratebi)
* [zhangymPerson](https://github.com/zhangymPerson)
* [rramthun](https://github.com/rramthun)

Check out the full list of issues in Apache Hop 2.10.0 in our [Github Issues](https://github.com/apache/hop/issues) 
and the [Release notes](https://github.com/apache/hop/releases/tag/2.10.0-rc1).

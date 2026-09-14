---
title: "Apache Hop 2.17 is available!!"
description: "The latest Apache Hop release 2.17.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2026-02-06T06:44:56+02:00"
authors: hansva
categories: "2.17, Release, Apache Hop"
preview: Apache Hop 2.17 Released
---
The Apache Hop community is proud to announce the release of Apache Hop 2.17!  

After another three months of hard work, collaboration, and testing, this release closes ***194 tickets*** by ***18 contributors***, delivers powerful new capabilities, important integrations, and a series of quality-of-life improvements to make data orchestration even more flexible, robust, and enterprise-ready.
We want to extend a heartfelt thank you to every contributor, tester, and user who helped shape this release.  

Your feedback, patches, and enthusiasm fuel the project and help make Apache Hop the versatile, reliable platform it is today.

![ width="45](/img/Release-2.17/hop-217.svg)


or [***download Hop 2.17.0 ***](https://hop.apache.org/download/) right away.

## UI Changes

The largest set of changes has happened around the UI and there have been some big changes, let’s go over them.

### Remove beta label from Portuguese (Brazil) language

We have reached around 70% translated, this brings Portuguese (Brazil) support on par with other official languages in the application.
I would like to thank everyone that has worked on these translations.

Current languages without Beta label:

* Chinese
* English
* French
* Italian
* Portuguese (Brazil) 

If you want to contribute to translations read our [guide](https://hop.apache.org/community/contribution-guides/translation-contribution-guide/)

### File explorer and Designer have been merged

You now have direct access to your project files while working on your pipelines. This way you no longer have to switch physical views to open project files.
We have also added a search function to quickly find files in a larger project.

![merged perspective](/img/Release-2.17/new-perspective.png)

### New location and appearance for projects and environments

The project and environments buttons have been moved to the bottom toolbar and are using a new view to make it all a bit less cluttered.

### New properties panel

The properties panel has had a major overhaul, all options have been: reviewed, renamed and tested.
We have added an overview that will show you all shortcuts that are available in the application.

![properties panel](/img/Release-2.17/properties-panel.png)

### Open HTML and PDF files inside the UI

You can now open PDF files directly inside the UI, when pressing the Help button the page will open inside a new tab inside the UI.

### Error highlighting

When running a pipeline and encountering an error the logging lines related to that error will now be shown in red, this also applies to console output using our command line tools.

This feature does not work in Hop Web.\
When we write error lines to the console we detect if it is being printed or being used by an other command, if it is used by an other command we remove the control characters to set the colors. This can also be managed with the `HOP_CONSOLE_COLORS` environment variable.

Valid Values:\
true - Always use ANSI color codes in console output\
false - Never use color codes (disables coloring)\
auto - (Default) Auto-detect whether to use colors based on the output destination

![error highlighting](/img/Release-2.17/error-highlights.png)

### Checkboxes with variables

You can use variables in a lot of locations inside Apache Hop, what wasn’t that obvious is that we also have checkboxes that can be changed with a variable.
You can now clearly see which checkboxes have variable support and where to enter the variable.

![checkbox with variable](/img/Release-2.17/variable-checkbox.png)

### A new look for the database lookup transform

The database lookup transform has received a new lay-out with tabs, making it less clunky.

![database lookup transform](/img/Release-2.17/database-lookup.png)

### Select values

The dropdowns in the Select values transform will now reflect the changes done in previous tabs.
It will only show fields that have been selected in the "Select & Alter" tab and use correct field names in the "Remove" and "Meta-Data" tab

### Other UI fixes

* fixed some dialogs having inconsistent lay-out
* macOS fixes for background colors (still not perfect)
* avoid spamming "file reverted" when doing git revert on multiple files
* "Save As" will now use original filename by default
* inconsistencies in the save button enabling
* multiway join transform UI improvement

## Git improvements

### git repository in parent directory

An option has been added to allow the git repository to be in a parent folder of the project you are working on. This can be enabled via settings -> git -> search parent folders for git repository.

### Automatically stage files

When a file is already under version control and a change has been made to the file it will be automatically staged.

### Git Info

The git information panel now has color highlighting for the git diff that is being shown.

## Filter rows

An issue was detected causing serious performance degradation when comparing to a static value in the filter rows transform

## MongoDB

We now have support for Atlas clusters and connections

## Hop Server

You can now start pipelines and workflows using a path, this endpoint requires an active project and will respect relative paths inside the project.

## Other Fixes and Improvements

In addition to the major new features, Apache Hop 2.17 includes a wide range of fixes, optimizations, and refinements contributed by our community members.  
Several long-standing issues were resolved, and many transforms and actions received targeted updates. Highlights include:

* Neo4j upgrade to 5.x
* Salesforce metadata injection fix
* Minio fixes to the new plugin
* Azure Blob storage now supports managed identity and will show containers when browsing to root folder
* Apache Beam upgrade to 2.70.0
* Concat fields will now respect the trim type defined in the transform
* Calculator now has Encode/Decode URL functions
* 

For the complete list of fixes, enhancements, and merged pull requests, visit the [Apache Hop 2.17 milestone on GitHub](https://github.com/apache/hop/milestone/18?closed=1).

## The Apache Hop Community Keeps Growing

Our community continues to grow steadily, with more developers, data engineers, and contributors joining the project every month.

* LinkedIn: 3,812 followers (up from 3,591) [follow](https://www.linkedin.com/company/apachehop/)  
* Twitter/X: 990 followers (up from 984) [follow](https://twitter.com/ApacheHop)  
* YouTube: 1,590 subscribers (up from 1,540) [subscribe](https://www.youtube.com/c/ApacheHop)  

From building pipelines to testing new features or enhancing documentation, every contribution helps strengthen Apache Hop.
If you haven’t yet joined the conversation, here are some great ways to get involved:

* Join our [mailing lists](https://hop.apache.org/community/mailing-list/)  
* Connect with us on [Slack](https://hop.apache.org/community/slack/)  
* Explore [GitHub](https://github.com/apache/hop) to contribute code, report bugs, or suggest features  

Your participation helps make Apache Hop better for everyone!

## Get Apache Hop 2.17 today!

Don’t wait to try the latest and greatest version of Apache Hop.  
[Download 2.17 now](https://hop.apache.org/download/) and experience the improved stability, integrations, and new features firsthand.

## GitHub Issues 

This release contains work on 194 tickets by 18 contributors.

Want to see every fix and enhancement?  
Explore the [Apache Hop 2.17 Milestone](https://github.com/apache/hop/milestone/18?closed=1) and the [Release notes](https://github.com/apache/hop/releases/tag/2.17.0-rc1) on GitHub.

## Looking forward

The Apache Hop community is already working hard on the next version, packed with even more features and improvements you won’t want to miss.
Thank you for being part of the Apache Hop journey.

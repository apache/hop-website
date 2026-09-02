---
title: "Apache Hop 2.16 is available!!"
description: "The latest Apache Hop release 2.16.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2025-11-17T06:44:56+02:00"
authors: bamaer
categories: "2.16, Release, Apache Hop"
preview: Apache Hop 2.16 Released
---
The Apache Hop community is proud to announce the release of Apache Hop 2.16!  

After another three months of hard work, collaboration, and testing, this release closes ***111 tickets*** by ***22 contributors***, delivers powerful new capabilities, important integrations, and a series of quality-of-life improvements to make data orchestration even more flexible, robust, and enterprise-ready.
We want to extend a heartfelt thank you to every contributor, tester, and user who helped shape this release.  

Your feedback, patches, and enthusiasm fuel the project and help make Apache Hop the versatile, reliable platform it is today.

![ width="45](/img/Release-2.16/hop-216.svg)


or [***download Hop 2.16.0 ***](https://hop.apache.org/download/) right away.

## Table Output Can Update Tables

The Table Output transform can now update existing tables.  
This improvement makes it easier to build and maintain staging areas and incremental data pipelines without separate update logic - a major step forward for data warehouse and ETL workflows.

## OAuth Support for Salesforce Transforms

Salesforce transforms now support ***OAuth authentication***.  
This update enhances security, simplifies configuration, and improves compatibility with enterprise Salesforce environments. Users no longer need to depend on basic username and password connections.

A new ***Salesforce connection metadata type*** has also been introduced, making it easier to manage and reuse Salesforce connection settings across projects.

In addition, the ***Salesforce Input transform*** can now use Salesforce **keys** instead of **labels**, providing greater flexibility and accuracy when working with Salesforce data structures.

![Salesforce OAuth](/img/Release-2.16/salesforce-oauth.png)

## Merge Diff: See What Changed

The Merge Diff action now shows which fields have changed values between data sets.  
This improvement increases visibility for audit and comparison workflows, making it easier to identify changes and ensure data integrity.

## UUID Column Type Support

Apache Hop 2.16 introduces native ***UUID column type*** support for both PostgreSQL and MongoDB.  
This addition enables more consistent schema management and smoother integration between relational and document databases.

## Improved JSON Field Type Handling

JSON field type support has been improved across multiple transforms, resulting in:

* More consistent parsing and serialization  
* Better compatibility with nested structures  
* Fewer edge case issues  

These updates make working with JSON data in Hop more reliable and predictable, especially in pipelines that process complex or semi-structured data.

## Parquet Input Enhancements

Reading Parquet files is now faster and more reliable.  
The enhanced Parquet Input transform improves schema inference, supports more data types, and provides smoother interoperability with data lake and Spark environments.

![Parquet Input](/img/Release-2.16/parquet-input.png)

## Azure Key Vault Variable Resolver

Hop now includes an ***Azure Key Vault variable resolver***, allowing you to reference secrets and credentials directly from Azure Key Vault.  
This feature helps organizations manage credentials securely and eliminate hardcoded secrets in workflows.

![Azure Key Vault Variable Resolver](/img/Release-2.16/azure-key-vault-variable-resolver.png)

## Other Fixes and Improvements

In addition to the major new features, Apache Hop 2.16 includes a wide range of fixes, optimizations, and refinements contributed by our community members.  
Several long-standing issues were resolved, and many transforms and actions received targeted updates. Highlights include:

* AWS S3 VFS now supports Minio
* Improved variable handling across workflows and pipelines for more consistent value resolution  
* Enhanced logging and error messages to make debugging and troubleshooting easier  
* User interface updates that improve layout consistency and dialog responsiveness  
* Performance improvements in file-based transforms and metadata loading  
* Updated plugin behavior and dependency alignment for smoother compatibility across environments

For the complete list of fixes, enhancements, and merged pull requests, visit the [Apache Hop 2.16 milestone on GitHub](https://github.com/apache/hop/milestone/17?closed=1).

## The Apache Hop Community Keeps Growing

Our community continues to grow steadily, with more developers, data engineers, and contributors joining the project every month.

* LinkedIn: 3,591 followers (up from 3,409) [follow](https://www.linkedin.com/company/apache-hop/)  
* Twitter/X: 984 followers (up from 981) [follow](https://twitter.com/ApacheHop)  
* YouTube: 1,540 subscribers (up from 1,460) [subscribe](https://www.youtube.com/c/ApacheHop)  

From building pipelines to testing new features or enhancing documentation, every contribution helps strengthen Apache Hop.
If you haven’t yet joined the conversation, here are some great ways to get involved:

* Join our [mailing lists](https://hop.apache.org/community/mailing-list/)  
* Connect with us on [Slack](https://hop.apache.org/community/slack/)  
* Explore [GitHub](https://github.com/apache/hop) to contribute code, report bugs, or suggest features  

Your participation helps make Apache Hop better for everyone!

## Get Apache Hop 2.16 today!

Don’t wait to try the latest and greatest version of Apache Hop.  
[Download 2.16 now](https://hop.apache.org/download/) and experience the improved stability, integrations, and new features firsthand.

## GitHub Issues 

This release contains work on 111 tickets by 22 contributors.

Want to see every fix and enhancement?  
Explore the [Apache Hop 2.16 Milestone](https://github.com/apache/hop/milestone/17?closed=1) and the [Release notes](https://github.com/apache/hop/releases/tag/2.16.0-rc1) on GitHub.

## Looking forward

The Apache Hop community is already working hard on the next version, packed with even more features and improvements you won’t want to miss.
Thank you for being part of the Apache Hop journey.

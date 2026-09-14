---
title: "Apache Hop 2.12 is available!!"
description: "The latest Apache Hop release 2.12.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2025-02-19T06:44:56+02:00"
authors: bamaer
categories: "2.12, Release, Apache Hop"
preview: Apache Hop 2.12 Released
---
After about two months of work on 58 tickets by 11 contributors, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.12.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.12/hop-212.svg)


or [***download Hop 2.12.0 ***](https://hop.apache.org/download/) right away.

Apache Hop 2.12.0 is mostly a bug fixing release, with a couple of new features. 

## Variable resolvers 

[Variable resolvers](https://hop.apache.org//manual/latest/variables.html#_variable_resolvers) are a new concept in Apache Hop. They allow you to resolve variable values in a consistent way across all metadata objects.

Apache Hop includes three variable resolver types:

* Pipeline variable resolver
* Hashicorp Vault variable resolver
* Google Secret Manager variable resolver

![Variable resolvers](https://hop.apache.org//manual/latest/variables/resolving-variables.png)

## Various improvements 

* REST connection metadata type improvements
* a new Impala database type and dialect 
* the Text File Output transform now supports a rounding type for numbers
* improved syntax highlighting for SQL and scripting transforms

## Community 

The Hop community continues to grow!

The overview below shows the community growth compared to the 2.11.0 release in December:

* LinkedIn: 2.847 followers (up from 2.545) [follow](https://www.linkedin.com/company/hop-project)
* Twitter/X: 956 followers (up from 949) [follow](https://twitter.com/ApacheHop)
* YouTube: 1.320 subscribers (up from 1.280) [subscribe](https://www.youtube.com/ApacheHop)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## GitHub Issues 

This release contains work on 58 tickets by 11 contributors, including 1 new contributor: 

* [Pascal Gattino](https://github.com/@Pask42)

Check out the full list of issues in Apache Hop 2.12.0 in our [Github Issues](https://github.com/apache/hop/issues) 
and the [Release notes](https://github.com/apache/hop/releases/tag/2.12.0-rc1).

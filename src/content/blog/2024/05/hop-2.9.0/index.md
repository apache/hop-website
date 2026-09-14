---
title: "Apache Hop 2.9 is available!!"
description: "The latest Apache Hop release 2.9.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2024-05-28T06:44:56+02:00"
authors: bamaer
categories: "2.9, Release, Apache Hop"
preview: Apache Hop 2.9 Released
---
After more than three months of work on 83 tickets, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.9.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.9/hop-29.svg)


or [***download Hop 2.9.0 ***](https://hop.apache.org/download/) right away.

Apache Hop 2.9.0 comes with a lot of bug fixes, code hardening and a couple of new features. 

## Static Schema 

### Static Schema Metadata Type
One of the first things new Apache Hop users learn when reading data from files is to use the `Get Fields` button to detect a file’s layout. 

Even though this is a straightforward way to get a decent estimate of schemaless input files, sometimes you _know_ what the layout of a file is, and just want to apply a known layout to your file. 

The new [Static Schema Definition](https://hop.apache.org/manual/latest/metadata-types/static-schema-definition.html) in Apache Hop 2.9.0 lets you do just that: create a static file definition, and use that definition to specify the layout in your input transforms. 

After a static schema definition has been created in the metadata perspective, it can be used in transforms like the Text File Input, CSV Input, Excel Input and more. 

![Static Schema Metadata Type](/img/Release-2.9/static-schema-metadata-type.png)

![Static Schema Definition](/img/Release-2.9/static-schema-definition.png)

![Static Schema Metadata Type](/img/Release-2.9/static-schema-use-in-text-file-input.png)

### Schema Mapping transform

The [Static Schema Mapping](https://hop.apache.org/manual/latest/pipeline/transforms/schemamapping.html) transform lets you map your current stream to a Static Schema Definition.

Fields that are available in the Static Schema Definition but not in your input stream are added with empty (null) values. 

![Static Schema Mapping](/img/Release-2.9/static-schema-mapping.png)

## CrateDB database dialect and bulk loader

![CrateDB](https://cratedb.com/hs-fs/hubfs/logos/CrateDB-logo.png?width=800&height=236&name=CrateDB-logo.png)

[CrateDB](https://cratedb.com) is an enterprise database for time series, documents and vectors, based on PostgreSQL. 

Apache Hop 2.9.0 comes with a new [CrateDB database dialect](https://hop.apache.org/manual/latest/database/databases/cratedb.html) and a new [CrateDB Bulk Loader](https://hop.apache.org/manual/latest/pipeline/transforms/cratedb-bulkloader.html) transform. 

The bulk loader uses the CrateDB [HTTP endpoint](https://cratedb.com/docs/crate/reference/en/latest/interfaces/http.html) or `COPY` command for bulk loading. 

![CrateDB Bulk Loader](/img/Release-2.9/cratedb-bulk-loader.png)

## Various 

* The REST transform now supports a configurable timeout
* The database join transform now supports caching
* Azure blob storage improvements
* Redshift Bulk Loader dialog was rewritten to align with the CrateDB bulk loader
* Improvements in database schema/table listing widget
* Lots of new and updated translations
* Lots of new and updated documentation

## Community 

The Hop community continues to grow!

The overview below shows the community growth compared to the 2.8.0 release in March:

* chat: 780 registered members (up from 729) [join](https://chat.project-hop.org)
* LinkedIn: 1.776 followers (up from 1.682) [follow](https://www.linkedin.com/company/hop-project)
* Twitter/X: 947 followers (up from 915) [follow](https://twitter.com/ApacheHop)
* YouTube: 1.100 subscribers (up from 1.020) [subscribe](https://www.youtube.com/ApacheHop)

![Apache Hop Community Growth](/img/Release-2.9/hop-community-growth.png)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## GitHub Issues 

This release contains work on 83 tickets by 9 contributors, with [maxbbse](https://github.com/maxbobse) and [xdelox](https://github.com/xdelox) as new contributors. 

Check out the full list of issues in Apache Hop 2.9.0 in our [Github Issues](https://github.com/apache/hop/issues) 
and the [Release notes](https://github.com/apache/hop/releases/tag/2.9.0-rc1).

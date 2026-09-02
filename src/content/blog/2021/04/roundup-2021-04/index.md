---
title: Roundup March 2021
publishDate: "2021-03-31T08:59:56+02:00"
authors: bamaer
categories: "Roundup, Apache Hop"
preview: Roundup March 2021
---
## Roundup March 2021

As always at the start of another new month, let’s have a look at what happened at Hop over the last month. Here’s the recap for March 2021!

## Neo4j integration

We’re really excited to welcome full Neo4j integration in Hop!

The plugins that are now a part of Hop were already available from Matt’s personal github [repository](https://github.com/mattcasters/hop-neo4j). Having all of this functionality available in the default Hop distribution is a major step forward.

[![Neo4j transforms](/img/Roundup-2021-04/neo4j-transforms.png)](/img/Roundup-2021-04/neo4j-transforms.png)

This integration brings a ton of Neo4j functionality to Hop:

* Actions:
  * ***Check Neo4j Connections***: Check to see if a Neo4j connection is available
  * ***Neo4j Cypher Script***: Execute a Neo4j cypher script
  * ***Neo4j Metadata Update***: Updates the metadata and lineage information in an audit graph
* Transforms:
  * ***Get Neo4j Logging Info***: Queries the Neo4j logging graph
  * ***Neo4j Cypher***: Reads from or writes to Neo4j with parameter data from input fields
  * ***Neo4j Generate CSV’s***: generates CSV files for nodes and relationships to load with neo4j-import.
  * ***Neo4j Graph Output***: write to a Neo4j graph using an input field mapping
  * ***Neo4j Import***: runs an import command using the provided CSV files
  * ***Neo4j Output***: loads nodes and relationships to a Neo4j graph
  * ***Neo4j Split Graph***: splits the nodes and relationships of a graph data type
* ***Neo4j perspective***: to check and query the Neo4j execution logs. All it takes is to point your `NEO4J_LOGGING_CONNECTION` to a valid Neo4j connection.
* Metadata Types:
  * ***Neo4j Connection***: connections to your Neo4j databases
  * ***Neo4j Graph Model***: description of the nodes, relationships, indexes of a Neo4j graph

## New file explorer perspective

March didn’t bring just one, but two new perspectives!

The new File Explorer perspective not only brings file handlers for JSON, CSV, TXT, XML etc, it also comes with Git integration.\
This allows Hop users and developers to manage version control for workflows, pipelines and metadata files directly in Hop Gui.

[![File Explorer Perspective](/img/Roundup-2021-04/file-explorer-perspective.png)](/img/Roundup-2021-04/file-explorer-perspective.png)

This new perspective contains a visual git diff that quickly lets you check e.g. which transforms in a pipeline have been created, updated or deleted.

[![Git visual diff](/img/Roundup-2021-04/git-visual-diff.png)](/img/Roundup-2021-04/git-visual-diff.png)

With this perspective, Hop Gui made another step towards providing a complete developer environment that enables Hop users and developers to be more productive.

<a id="metadata-types"></a>

## New Metadata Types

Hop welcomed a number of new metadata types in March:

* Apache Cassandra Connection
* MongoDB Connection
* Neo4j Connection
* Neo4j Graph Model
* Splunk Connection

<a id="vfs-types"></a>

## VFS Drivers

[Apache VFS](https://commons.apache.org/proper/commons-vfs/) (part of the Commons project) presents a uniform view of the files from various different sources, such as the files on local disk, on an HTTP server.

VFS has been supported in Hop since the early days, but is now support for the three major cloud platforms:

* AWS: `s3://`
* Azure: `azure://`
* Google Cloud Platform:
  * Google Cloud Storage `gs://`
  * Google Drive: `googledrive://`

Not only has the functionality been added, we’ve also made it as easy as possible to configure Hop for your favorite cloud platform:

[![VFS Config](/img/Roundup-2021-04/vfs-config.png)](/img/Roundup-2021-04/vfs-config.png)

Check the [docs](https://hop.apache.org/manual/latest/vfs.html) for more information.

<a id="plugins"></a>

## New Plugins

No less than ***twenty*** (20!) new transforms were added in March!

* Actions:
  * Check Neo4j Connections
  * Neo4j Cypher Script
  * Neo4j Metadata Update
* Transforms:
  * Azure Event Hub Listener and Writer
  * Dropbox Download and Upload
  * Google Analytics
  * Google Sheets Input and Output
  * MQTT Publisher and Subscriber
  * Neo4j:
    * Get Neo4j Logging Info
    * Neo4j Cypher
    * Neo4j Generate CSV’s
    * Neo4j Graph Output
    * Neo4j Import
    * Neo4j Output
    * Neo4j Split Graph
  * Splunk Input transform (with metadata)

<a id="various"></a>

## Various

* The MonetDB bulk loader (added in February) was improved
* The Hop Web docker container is now built continuously. Hop Web is getting closer by the day. We’ll be able to fully integrate the Hop Web code in the default code base in the not too distant future.
* New Keyboard shortcuts for perspectives: switch to your favorite perspective directly, or cycle through the available perspectives
* Translator improvements and Italian translations (thanks Sergio!!)
* The Hop Search perspective now has a CLI of its own: `hop-search`
* New icons for pipeline probes and pipeline and workflow logging (thanks Nicolas!!)

[![Probe Icons](/img/Roundup-2021-04/probe-icons.png)](/img/Roundup-2021-04/probe-icons.png)
[![Probe Icons](/img/Roundup-2021-04/logging-icons.png)](/img/Roundup-2021-04/logging-icons.png)

<a id="community"></a>

## Community

The Hop community continues to grow:

* chat: 153 registered members (up from 142) [join](https://chat.project-hop.org)
* LinkedIn: 420 followers (up from 387) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 358 followers (up from 291) [follow](https://twitter.com/ApacheHop)
* YouTube: 87 subscribers (up from 76) [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) to find out more.

<a id="tickets"></a>

## JIRA Activity

* Resolved: 89
* In Progress: 12
* Open: 43
* Closed: 6

The full list of issues that had activity over the last month is available [here](https://issues.apache.org/jira/issues/?jql=project%20%3D%20HOP%20AND%20status%20in%20(Resolved%2C%20Closed)%20AND%20resolved%20%3E%3D%202021-03-01%20AND%20resolved%20%3C%3D%202021-03-31%20ORDER%20BY%20updated%20ASC&startIndex=50)

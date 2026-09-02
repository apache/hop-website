---
title: "Apache Hop (Incubating) 0.70 Release Available!"
publishDate: "2021-04-12T07:59:56+02:00"
authors: bamaer
categories: "Release, Announcement, Apache Hop"
preview: "Apache Hop releases 0.70, the first release with downloadable binaries and a stepping stone towards Hop 1.0"
---
## Apache Hop (Incubating) 0.70 Released

The Hop community is pleased to announce the availability of the Apache Hop (Incubating) 0.70 release.

This release contains about 2.5 months of work. Since our 0.60 release in late January, we’ve seen a lot of activity in a variety of areas. Hop contributors not only worked on code: we’ve received contributions in artwork, translations, documentation etc. We have more than 45 new plugins, and a total of 223 jira tickets were implemented.

Great communities build great software, and we’re delighted to see the Hop community grow: since our 0.60 release, the Hop community has grown between 25% and 75% over the various channels.

Hop 0.70 is our first release with downloadable binaries. Head over to the [downloads page](/download/) and give Hop 0.70 a try.

Let’s take a closer look at what’s new in Hop 0.70

## Dark Mode

"If there’s no dark mode, it doesn’t exist."

Hop is available in dark mode on Mac OS and Linux. Unfortunately, Hop doesn’t support dark mode on Windows because there’s no publicly supported Windows dark mode api.

Since dark mode appeared in mid-February, all Hop developers seem to have switched to dark mode overnight.

[![Dark Mode](/img/Roundup-2021-03/dark-mode.png)](/img/Roundup-2021-03/dark-mode.png)

## File explorer perspective

### File Explorer, File Handlers

Hop now comes with a new File Explorer perspective that not only brings file handlers for JSON, CSV, TXT, XML etc, but also comes with Git integration.\
This allows Hop users and developers to manage version control for workflows, pipelines and metadata files directly in Hop Gui.

[![File Explorer Perspective](/img/Roundup-2021-04/file-explorer-perspective.png)](/img/Roundup-2021-04/file-explorer-perspective.png)

### Visual Git Diff

This new perspective contains a visual git diff that quickly lets you check e.g. which transforms in a pipeline have been created, updated or deleted.

[![Git visual diff](/img/Roundup-2021-04/git-visual-diff.png)](/img/Roundup-2021-04/git-visual-diff.png)

With this perspective, Hop Gui made another step towards providing a complete developer environment that enables Hop users and developers to be more productive.

## Kettle/PDI Importer

You can now import your Kettle or Pentaho Data Integration projects directly to Hop. Both PDI/Kettle and Hop continue to move on their own trajectory and with separate roadmaps since Hop started in late 2019. This importer allows you to migrate your existing jobs and transformations to Hop workflows and pipelines, and benefit from all the goodies that come with Hop 0.70.

[![Kettle/PDI Import](http://hop.apache.org/manual/latest/hop-import/import-report.png)](http://hop.apache.org/manual/latest/hop-import/import-report.png)

## Metadata Injection Improvements

Metadata injection was added to Hop months ago. As with most of the functionality that was ported from PDI/Kettle, some work was required to lift the code to the new flexibility and quality standards we’ve set for Hop. After we’ve given it some love, Hop Metadata Injection now has:

* UI improvements:
  * Fixed filter button
  * Added source-to-target (input-to-template) mapping button
  * Removed unneeded top level in the tree
  * Added a "None" button when user clicks on a target key (was missing)
* reimplemented support for additional transforms, among others CSV File Input, Group By.

[![Metadata Injection](/img/Roundup-2021-03/metadata-injection.png)](/img/Roundup-2021-03/metadata-injection.png)

## Neo4j integration

We’re really excited to welcome full Neo4j integration in Hop! Having all of this functionality available in the default Hop distribution is a major step forward.

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

## Plugins

Hop 0.70 comes with tons (over 45) new plugins in cloud (VFS, Azure, Google), NoSQL (Cassandra, Neo4j), new metadata types for logging and probing and much more.

### Actions

* [AS400 command](http://hop.apache.org/manual/latest/plugins/actions/as400command.html)
* [Check Neo4j Connections](https://hop.apache.org/manual/latest/workflow/actions/neo4j-checkconnections.html)
* [Neo4j Cypher Script](https://hop.apache.org/manual/latest/workflow/actions/neo4j-cypherscript.html)
* Neo4j Metadata Update

### Transforms

* Azure Event Hub [Listener](https://hop.apache.org/manual/latest/pipeline/transforms/azure-event-hubs-listener.html) and [Writer](https://hop.apache.org/manual/latest/pipeline/transforms/azure-event-hubs-writer.html)
* Cassandra Input and Output
* [Coalesce](https://hop.apache.org/manual/latest/plugins/transforms/coalesce.html)
* Dropbox Download and Upload
* [Enhanced JSON Output](https://hop.apache.org/manual/latest/plugins/transforms/enhancedjsonoutput.html)
* Get Neo4j Logging Info
* [Google Analytics](https://hop.apache.org/manual/latest/technology/google/google-info.html#_google_analytics)
* [Google Sheets](https://hop.apache.org/manual/latest/technology/google/google-info.html#_google_analytics) Input and Output
* [Metadata Structure of Stream](https://hop.apache.org/manual/latest/pipeline/transforms/metastructure.html)
* [MonetDB Bulk Loader](https://hop.apache.org/manual/latest/pipeline/transforms/monetdbbulkloader.html)
* MQTT [Publisher](https://hop.apache.org/manual/latest/pipeline/transforms/mqttpublisher.html) and [Subscriber](https://hop.apache.org/manual/latest/pipeline/transforms/mqttsubscriber.html#top)
* [Neo4j Cypher](https://hop.apache.org/manual/latest/pipeline/transforms/neo4j-cypher.html)
* Neo4j Generate CSV’s
* [Neo4j Graph Output](https://hop.apache.org/manual/latest/pipeline/transforms/neo4j-graphoutput.html)
* Neo4j Import
* [Neo4j Output](https://hop.apache.org/manual/latest/pipeline/transforms/neo4j-output.html)
* Neo4j Split Graph
* [Pipeline Probe](https://hop.apache.org/manual/latest/logging/logging-reflection.html#_transform_3)
* [SAS Input](https://hop.apache.org/manual/latest/pipeline/transforms/sasinput.html)

### Perspective:

* Neo4j perspective
* File Explorer

### Misc

* [AES Two Way Password Encoder](https://hop.apache.org/manual/latest/password/passwords/aespasswords.html#top)

### Metadata Types:

* [Apache Cassandra Connection](https://hop.apache.org/manual/latest/metadata-types/cassandra/cassandra-connection.html)
* [MongoDB Connection](https://hop.apache.org/manual/latest/metadata-types/mongodb-connection.html)
* [Neo4j Connection](https://hop.apache.org/manual/latest/metadata-types/neo4j/neo4j-connection.html)
* [Neo4j Graph Model](https://hop.apache.org/manual/latest/metadata-types/neo4j/neo4j-graphmodel.html)
* [Pipeline log](https://hop.apache.org/manual/latest/metadata-types/pipeline-log.html)
* [Pipeline probe](https://hop.apache.org/manual/latest/metadata-types/pipeline-probe.html)
* [Splunk Connection](https://hop.apache.org/manual/latest/metadata-types/splunk-connection.html)
* [Webservice](https://hop.apache.org/manual/latest/metadata-types/web-service.html)
* [Workflow log](https://hop.apache.org/manual/latest/metadata-types/workflow-log.html)

### VFS

* [AWS S3](https://hop.apache.org/manual/latest/vfs/aws-s3-vfs.html)
* [Azure Blob Storage](https://hop.apache.org/manual/latest/vfs/azure-blob-storage-vfs.html)
* [Google Cloud Storage](https://hop.apache.org/manual/latest/vfs/google-cloud-storage-vfs.html) and [Google Drive](https://hop.apache.org/manual/latest/vfs/google-drive-vfs.html)

## Project improvements

We continue to work on project and environment improvements. Projects are now optional, there’s a default project, and projects can inherit from other projects.

[![Project Improvements](/img/Roundup-2021-02/project-improvements.png)](/img/Roundup-2021-02/project-improvements.png)

You can now export your current project to zip:

[![Export project to zip](/img/Roundup-2021-03/export-project-to-zip.png)](/img/Roundup-2021-03/export-project-to-zip.png)

## Translator and Translations

The [Hop Translator](https://hop.apache.org/dev-manual/latest/internationalisation.html#_using_translator) tool, which helps in translating Hop to your native language, saw some improvements, but the most important changes happened behind the scenes, all text items in the Hop Gui and other tools have been internationalized.

In addition to English, Hop is now fully available in Italian, with efforts for more languages on the way.

Check the [translation contributor guide](http://hop.apache.org/community/contribution-guides/translation-contribution-guide/) for more information on how you can start translating Hop in your native language.

## VFS Drivers

[Apache VFS](https://commons.apache.org/proper/commons-vfs/) (part of the Commons project) presents a uniform view of the files from various different sources, such as the files on local disk, on an HTTP server.

VFS has been supported in Hop since the early days, but now comes with support for the three major cloud platforms:

* AWS: `s3://`
* Azure: `azure://`
* Google Cloud Platform:
  * Google Cloud Storage `gs://`
  * Google Drive: `googledrive://`

Not only has the functionality been added, we’ve also made it as easy as possible to configure Hop for your favorite cloud platform:

[![VFS Config](/img/Roundup-2021-04/vfs-config.png)](/img/Roundup-2021-04/vfs-config.png)

Check the [docs](https://hop.apache.org/manual/latest/vfs.html) for more information.

## Various

### Beam Spark runner improvements

The ability to run Hop pipelines on Apache Spark over Apache Beam has been available since the very early Hop days.

It is now a lot easier to run pipelines on Apache Spark and Apache Flink.

[![Beam Spark](/img/Roundup-2021-03/beam-spark.png)](/img/Roundup-2021-03/beam-spark.png)

Check out the updated [docs](http://hop.apache.org/manual/latest/hop-gui/pipelines/pipeline-run-configurations/beam-spark-pipeline-engine.html#_running_with_spark_submit) to take this for a spin.

### Docker improvements

A number of small issues have been fixed and improvements have been made. As the number of Docker use cases continues to grow, Hop in Docker has become stable and mature.

The [Hop image](https://hub.docker.com/r/apache/hop) is continuously pushed to , check it out with the pull command:  `docker pull apache/hop`

### Hop Web

Hop Web is now fully integrated and is included in the default Hop build. It is still a little rough around the edges, but it is starting to look very good.

Just like the default Docker image, the [Hop Web Image](https://hub.docker.com/r/apache/hop-web) is pushed to Docker Hub continuously, check it out with the pull command `docker pull apache/hop-web`.

### Ordered List

In some cases (e.g. the new Coalesce plugin), the order of fields is important. For these use cases, we now have an Ordered List:

[![Ordered List](/img/Roundup-2021-03/ordered-list.png)](/img/Roundup-2021-03/ordered-list.png)

## Community

The Hop community has grown significantly since the 0.60 release:

* chat: 161 registered members (up from 131, +23%) [join](https://chat.project-hop.org)
* LinkedIn: 435 followers (up from 347, +25%) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 368 followers (up from 275, +34%) [follow](https://twitter.com/ApacheHop)
* YouTube: 104 subscribers (up from 59, +76%) [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) to find out more.

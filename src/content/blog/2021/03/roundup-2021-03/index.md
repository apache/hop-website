---
title: Roundup February 2021
publishDate: "2021-02-28T10:01:56+02:00"
authors: bamaer
categories: "Roundup, Apache Hop"
preview: Roundup February 2021
---
## Roundup February 2021

As always at the start of another new month, let’s have a look at what happened at Hop over the last month. Here’s the recap for February 2021!

<a id="metadata-injection"></a>

## Metadata Injection

Metadata injection was added to Hop months ago. As with most of the functionality that was ported from PDI/Kettle, some work was required to lift the code to the new flexibility and quality standards we’ve set for Hop. After we’ve given it some love, Hop Metadata Injection now has:

* UI improvements:
  * Fixed filter button
  * Added source-to-target (input-to-template) mapping button
  * Removed unneeded top level in the tree
  * Added a "None" button when user clicks on a target key (was missing)
* reimplemented support for additional transforms, among others CSV File Input, Group By.

[![Metadata Injection](/img/Roundup-2021-03/metadata-injection.png)](/img/Roundup-2021-03/metadata-injection.png)

<a id="dark-mode"></a>

## Dark Mode

"If there’s no dark mode, it doesn’t exist."

It took some tweaks to get the Hop dark mode to work correctly on all major platforms (looking at you, Mac OS!!). Since it appeared in mid-February, all Hop developers seem to have switched to dark mode overnight.

[![Dark Mode](/img/Roundup-2021-03/dark-mode.png)](/img/Roundup-2021-03/dark-mode.png)

<a id="beam-spark"></a>

## Beam Spark runner improvements

The ability to run Hop pipelines on Apache Spark over Apache Beam has been available since the very early Hop days.

It is now a lot easier to run pipelines on Apache Spark and Apache Flink.

[![Beam Spark](/img/Roundup-2021-03/beam-spark.png)](/img/Roundup-2021-03/beam-spark.png)

Check out the updated [docs](http://hop.apache.org/manual/latest/hop-gui/pipelines/pipeline-run-configurations/beam-spark-pipeline-engine.html#_running_with_spark_submit) to take this for a spin.

<a id="metadata-types"></a>

## New Metadata Types

A number of new metadata types were introduced. These are all brand new, with lots of potential use cases!

* [Webservice](http://hop.apache.org/manual/latest/hop-server/web-service.html): expose data from a pipeline as a webservice
* [Pipeline Log and Workflow Log](http://hop.apache.org/manual/latest/logging/logging-reflection.html): send pipeline and workflow logging data to a probe to be picked up in a transform. The pipeline holding that transform can do whatever is possible in Hop: write to files, send to a (graph) database, Kafka producer, ...
* Pipeline Probe: similar to the logging probe, but for actual data. The processing pipeline in this case can be used for data quality, lineage and any imaginable use case.

[![Probes](/img/Roundup-2021-03/probes.png)](/img/Roundup-2021-03/probes.png)

[![Web Service](/img/Roundup-2021-03/webservice.png)](/img/Roundup-2021-03/webservice.png)

<a id="plugins"></a>

## New Plugins

The list of new plugins in Hop continues to grow. Here are the new additions for February:

* Transforms:
  * [Coalesce](http://hop.apache.org/manual/latest/plugins/transforms/coalesce.html)
  * [MonetDB bulk loader](http://hop.apache.org/manual/latest/plugins/transforms/monetdbbulkloader.html)
  * [Pipeline probe](http://hop.apache.org/manual/latest/logging/logging-reflection.html)
  * [SAS Input](http://hop.apache.org/manual/latest/plugins/transforms/sasinput.html)

<a id="various"></a>

## Various

### Docker improvements

A number of small issues have been fixed and improvements have been made. As the number of Docker use cases continues to grow, Hop in Docker has become stable and mature.

### Export project to zip

[![Export project to zip](/img/Roundup-2021-03/export-project-to-zip.png)](/img/Roundup-2021-03/export-project-to-zip.png)

### Hop Web

The merge of Hop Web is getting closer. We’ve closed a number of remaining issues, a war file is now included as part of the default Hop build. Expect a fully integrated Hop Web in the default Hop build soon!

### Migration updates

A number of bug fixes, tweaks and improvements have been made to support migration for additional PDI/Kettle steps and job entries to Hop.
It is now easy and safe to migrate your PDI/Kettle projects to Hop!

### Ordered List

In some cases (e.g. the new Coalesce plugin), the order of fields is important. For these use cases, we now have an Ordered List:

[![Ordered List](/img/Roundup-2021-03/ordered-list.png)](/img/Roundup-2021-03/ordered-list.png)

<a id="community"></a>

## Community

The Hop community continues to grow:

* chat: 142 registered members (up from 134) [join](https://chat.project-hop.org)
* LinkedIn: 387 followers (up from 375) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 291 followers (up from 250) [follow](https://twitter.com/ApacheHop)
* YouTube: 76 subscribers (up from 68) [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) to find out more.

<a id="tickets"></a>

## JIRA Tickets

The full list of issues that had activity over the last month is:

### Resolved| (72)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-2016](https://issues.apache.org/jira/browse/HOP-2016) | Variable from environment config only work after restart | GUI | 2020-10-04 | 2021-02-28 |
| [HOP-2076](https://issues.apache.org/jira/browse/HOP-2076) | port sample rows step to transform | Transforms | 2020-10-04 | 2021-02-28 |
| [HOP-2104](https://issues.apache.org/jira/browse/HOP-2104) | "Hop needs a default ""Project"" and ""Local Run Configuration""" |  | 2020-10-04 | 2021-02-05 |
| [HOP-2166](https://issues.apache.org/jira/browse/HOP-2166) | Improve first-time usage experience | GUI | 2020-11-12 | 2021-02-05 |
| [HOP-2407](https://issues.apache.org/jira/browse/HOP-2407) | change selected text color | Website | 2021-01-07 | 2021-02-03 |
| [HOP-2455](https://issues.apache.org/jira/browse/HOP-2455) | attach POM to the correct phase |  | 2021-01-25 | 2021-02-28 |
| [HOP-2474](https://issues.apache.org/jira/browse/HOP-2474) | Add UDJE (User Defined Java Expression) to ETL Metadata Injection step |  | 2021-01-28 | 2021-02-05 |
| [HOP-2478](https://issues.apache.org/jira/browse/HOP-2478) | Options Dialog : ConfigPlugins are no longer showing up | GUI | 2021-01-30 | 2021-02-03 |
| [HOP-2479](https://issues.apache.org/jira/browse/HOP-2479) | Remove IPluginFolder |  | 2021-01-30 | 2021-02-01 |
| [HOP-2480](https://issues.apache.org/jira/browse/HOP-2480) | fix typos in website | Website | 2021-01-31 | 2021-02-02 |
| [HOP-2484](https://issues.apache.org/jira/browse/HOP-2484) | README for docker image has wrong run instructions |  | 2021-02-01 | 2021-02-02 |
| [HOP-2485](https://issues.apache.org/jira/browse/HOP-2485) | Docker container references wrong deployment folder |  | 2021-02-01 | 2021-02-03 |
| [HOP-2488](https://issues.apache.org/jira/browse/HOP-2488) | Port MonetDB Bulk Loader to Hop |  | 2021-02-02 | 2021-02-27 |
| [HOP-2489](https://issues.apache.org/jira/browse/HOP-2489) | Bump Apache commons-collections version 3.2.2 to commons-collections4 version 4.4 |  | 2021-02-02 | 2021-02-03 |
| [HOP-2491](https://issues.apache.org/jira/browse/HOP-2491) | NPE when loading old project configurations | GUI | 2021-02-03 | 2021-02-04 |
| [HOP-2493](https://issues.apache.org/jira/browse/HOP-2493) | Code and logging references steps i.s.o. transforms | API | 2021-02-03 | 2021-02-04 |
| [HOP-2494](https://issues.apache.org/jira/browse/HOP-2494) | Saving a pipeline or workflow before running doesn’t work | GUI | 2021-02-03 | 2021-02-04 |
| [HOP-2498](https://issues.apache.org/jira/browse/HOP-2498) | CSV File Input: add metadata injection support | Transforms | 2021-02-05 | 2021-02-06 |
| [HOP-2500](https://issues.apache.org/jira/browse/HOP-2500) | Show last rows widget is showing incorrect data | GUI, Transforms | 2021-02-05 | 2021-02-28 |
| [HOP-2501](https://issues.apache.org/jira/browse/HOP-2501) | ETL Metadata Injection: variable and parameter passing issues | Transforms | 2021-02-05 | 2021-02-06 |
| [HOP-2502](https://issues.apache.org/jira/browse/HOP-2502) | Add toolbar icons to edit pipeline and workflow properties | GUI | 2021-02-05 | 2021-02-16 |
| [HOP-2503](https://issues.apache.org/jira/browse/HOP-2503) | Preview does not work on transforms using variables |  | 2021-02-05 | 2021-02-28 |
| [HOP-2504](https://issues.apache.org/jira/browse/HOP-2504) | Metadata Injection: Logging levels are not propagating | Transforms | 2021-02-06 | 2021-02-08 |
| [HOP-2505](https://issues.apache.org/jira/browse/HOP-2505) | Group By : add support for metadata injection | Transforms | 2021-02-06 | 2021-02-08 |
| [HOP-2508](https://issues.apache.org/jira/browse/HOP-2508) | Port the transform Coalesce plugin | Transforms | 2021-02-07 | 2021-02-09 |
| [HOP-2509](https://issues.apache.org/jira/browse/HOP-2509) | Add EnterOrderedListDialog to select in an order the elements of a list | GUI | 2021-02-07 | 2021-02-08 |
| [HOP-2514](https://issues.apache.org/jira/browse/HOP-2514) | merge join input steps are not correctly converted to transforms | Import | 2021-02-10 | 2021-02-23 |
| [HOP-2515](https://issues.apache.org/jira/browse/HOP-2515) | BlockingTransform type not correctly converted | Import | 2021-02-10 | 2021-02-23 |
| [HOP-2516](https://issues.apache.org/jira/browse/HOP-2516) | remove references to Project Hop | Documentation | 2021-02-10 | 2021-02-23 |
| [HOP-2517](https://issues.apache.org/jira/browse/HOP-2517) | "Environment dialog: Add a ""Create..."" button to create a new config file" | GUI | 2021-02-11 | 2021-02-13 |
| [HOP-2518](https://issues.apache.org/jira/browse/HOP-2518) | Add keyboard shortcut Ctrl+Shift+S to save as menu |  | 2021-02-11 | 2021-02-11 |
| [HOP-2520](https://issues.apache.org/jira/browse/HOP-2520) | full connection element not removed from workflow XML | Import | 2021-02-12 | 2021-02-23 |
| [HOP-2525](https://issues.apache.org/jira/browse/HOP-2525) | EnterMappingDialog : improve guessing and sort mapped values | GUI | 2021-02-13 | 2021-02-15 |
| [HOP-2526](https://issues.apache.org/jira/browse/HOP-2526) | Meta data injection dialog: various bugs | GUI | 2021-02-13 | 2021-02-15 |
| [HOP-2531](https://issues.apache.org/jira/browse/HOP-2531) | Integration tests: optionally generate surefire reports | Infrastructure | 2021-02-15 | 2021-02-15 |
| [HOP-2532](https://issues.apache.org/jira/browse/HOP-2532) | Hop Run: variables in environment or project are not applied to top-level parameters | Hop Run | 2021-02-15 | 2021-02-16 |
| [HOP-2533](https://issues.apache.org/jira/browse/HOP-2533) | Workflow Executor: NPE in dialog | GUI, Transforms, Workflows | 2021-02-15 | 2021-02-16 |
| [HOP-2535](https://issues.apache.org/jira/browse/HOP-2535) | Port the SAS Input step to Hop | Transforms | 2021-02-17 | 2021-02-19 |
| [HOP-2536](https://issues.apache.org/jira/browse/HOP-2536) | Long lived docker container throws NPE | docker, Hop Server | 2021-02-17 | 2021-02-18 |
| [HOP-2537](https://issues.apache.org/jira/browse/HOP-2537) | Remove inkscape metadata from SVG files | GUI | 2021-02-18 | 2021-02-19 |
| [HOP-2538](https://issues.apache.org/jira/browse/HOP-2538) | "Add ""View output"" as a context action option" | Transforms | 2021-02-19 | 2021-02-22 |
| [HOP-2539](https://issues.apache.org/jira/browse/HOP-2539) | JSON Input dialog: get fields shows white text on white background | Transforms | 2021-02-19 | 2021-02-20 |
| [HOP-2543](https://issues.apache.org/jira/browse/HOP-2543) | "Kettle Import: change pipeline run configuration to ""local""" | Import | 2021-02-22 | 2021-02-23 |
| [HOP-2544](https://issues.apache.org/jira/browse/HOP-2544) | Kettle Import: change JobExecutor to WorkflowExecutor | Import | 2021-02-22 | 2021-02-23 |
| [HOP-2545](https://issues.apache.org/jira/browse/HOP-2545) | ${Internal.Entry.Current.Folder} not working | API, Import | 2021-02-22 | 2021-02-23 |
| [HOP-2546](https://issues.apache.org/jira/browse/HOP-2546) | Workflow Executor: assume 1 row grouping if all grouping fields are blank | Transforms | 2021-02-22 | 2021-02-23 |
| [HOP-2548](https://issues.apache.org/jira/browse/HOP-2548) | Metadata Perspective: sort by metadata type name | GUI | 2021-02-23 | 2021-02-24 |
| [HOP-2549](https://issues.apache.org/jira/browse/HOP-2549) | Group By transform loses aggregation type | Transforms | 2021-02-23 | 2021-02-25 |
| [HOP-2550](https://issues.apache.org/jira/browse/HOP-2550) | Docker: simplify hop-server use case | docker, Hop Server | 2021-02-23 | 2021-02-24 |
| [HOP-2552](https://issues.apache.org/jira/browse/HOP-2552) | ExcelInput accept_stepname not replaced to accept_transform_name | Transforms | 2021-02-24 | 2021-02-25 |
| [HOP-2554](https://issues.apache.org/jira/browse/HOP-2554) | Allow logging to take place with a Hop pipeline | API | 2021-02-24 | 2021-02-24 |
| [HOP-2556](https://issues.apache.org/jira/browse/HOP-2556) | Spark runner: missing dependency | API, Beam | 2021-02-24 | 2021-02-24 |
| [HOP-2557](https://issues.apache.org/jira/browse/HOP-2557) | Spark runner : not finishing application | API, Beam | 2021-02-24 | 2021-02-25 |
| [HOP-2558](https://issues.apache.org/jira/browse/HOP-2558) | Remote pipeline engine: improve logging | Hop Server | 2021-02-24 | 2021-02-25 |
| [HOP-2559](https://issues.apache.org/jira/browse/HOP-2559) | Hop Server: broken icons in web interface | Hop Server | 2021-02-24 | 2021-02-25 |
| [HOP-2560](https://issues.apache.org/jira/browse/HOP-2560) | Docker container: Missing fonts for running hop-server | docker, Hop Server | 2021-02-24 | 2021-02-25 |
| [HOP-2561](https://issues.apache.org/jira/browse/HOP-2561) | Docker container: Make port configurable | docker, Hop Server | 2021-02-24 | 2021-02-25 |
| [HOP-2562](https://issues.apache.org/jira/browse/HOP-2562) | Remove Mouse wheel support | Hop Web | 2021-02-24 | 2021-02-24 |
| [HOP-2563](https://issues.apache.org/jira/browse/HOP-2563) | TableView widget color on Windows are bad | GUI | 2021-02-24 | 2021-02-24 |
| [HOP-2565](https://issues.apache.org/jira/browse/HOP-2565) | Beam: add a main class for executing using Spark Submit or Flink Run | Beam | 2021-02-25 | 2021-02-25 |
| [HOP-2566](https://issues.apache.org/jira/browse/HOP-2566) | Docker: libraries like snappy need libc-compat in the container | docker | 2021-02-25 | 2021-02-25 |
| [HOP-2567](https://issues.apache.org/jira/browse/HOP-2567) | Allow output rows from any transform to be streamed to another pipeline | Transforms | 2021-02-25 | 2021-02-28 |
| [HOP-2569](https://issues.apache.org/jira/browse/HOP-2569) | Bring back space while mousing over transform | GUI, Transforms | 2021-02-26 | 2021-02-26 |
| [HOP-2570](https://issues.apache.org/jira/browse/HOP-2570) | Allow a metadata editor to be set to changed or not from outside the editor | API, GUI | 2021-02-26 | 2021-02-26 |
| [HOP-2571](https://issues.apache.org/jira/browse/HOP-2571) | Expose getter/setter for metadata in IMetadataEditor | API, GUI | 2021-02-26 | 2021-02-26 |
| [HOP-2572](https://issues.apache.org/jira/browse/HOP-2572) | TableView: when a row is inserted the view is not flagged as modified | API, GUI | 2021-02-26 | 2021-02-26 |
| [HOP-2574](https://issues.apache.org/jira/browse/HOP-2574) | Keyboard shortcuts are not handled correctly | API, GUI | 2021-02-26 | 2021-02-27 |
| [HOP-2576](https://issues.apache.org/jira/browse/HOP-2576) | JSON Input step not recognizing .json file extension | Transforms | 2021-02-26 | 2021-02-27 |
| [HOP-2577](https://issues.apache.org/jira/browse/HOP-2577) | Create a Web Service metadata type | Hop Server, Metadata | 2021-02-27 | 2021-02-27 |
| [HOP-2580](https://issues.apache.org/jira/browse/HOP-2580) | Deliver a working Hop Server XML configuration file | Hop Server | 2021-03-01 | 2021-03-01 |
| [HOP-2581](https://issues.apache.org/jira/browse/HOP-2581) | Workflow Logging transform outputs same field name twice | Transforms | 2021-03-01 | 2021-03-01 |

### In Progress (7)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-2469](https://issues.apache.org/jira/browse/HOP-2469) | Ensure that Hop complies with ASF encryption policy |  | 2021-01-27 | 2021-02-23 |
| [HOP-2481](https://issues.apache.org/jira/browse/HOP-2481) | disable google analytics tracking when running website locally (draft mode) | Website | 2021-01-31 | 2021-01-31 |
| [HOP-2529](https://issues.apache.org/jira/browse/HOP-2529) | Add Hop Web Docker image to build process | Containers, Hop Web | 2021-02-14 | 2021-03-01 |
| [HOP-2555](https://issues.apache.org/jira/browse/HOP-2555) | Add support for a JSON value type | API | 2021-02-24 | 2021-02-24 |
| [HOP-2575](https://issues.apache.org/jira/browse/HOP-2575) | Create a file explorer perspective | GUI | 2021-02-26 | 2021-03-01 |

### Open (29)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-2434](https://issues.apache.org/jira/browse/HOP-2434) | When reloading project variables they are not refreshed | Metadata | 2021-01-17 | 2021-02-09 |
| [HOP-2468](https://issues.apache.org/jira/browse/HOP-2468) | NPE in file open dialog | GUI | 2021-01-27 | 2021-02-03 |
| [HOP-2482](https://issues.apache.org/jira/browse/HOP-2482) | There will be a NullPointerException if you only regist a pipeline | Hop Server | 2021-01-31 | 2021-01-31 |
| [HOP-2483](https://issues.apache.org/jira/browse/HOP-2483) | Translator does not work under Windows |  | 2021-01-31 | 2021-02-15 |
| [HOP-2486](https://issues.apache.org/jira/browse/HOP-2486) | "Picking ""Create hop"" eventually brings up action picker again" | GUI | 2021-02-02 | 2021-02-02 |
| [HOP-2487](https://issues.apache.org/jira/browse/HOP-2487) | Unit tests UI issues |  | 2021-02-02 | 2021-02-03 |
| [HOP-2490](https://issues.apache.org/jira/browse/HOP-2490) | Issue editing Data Set | GUI | 2021-02-03 | 2021-02-09 |
| [HOP-2492](https://issues.apache.org/jira/browse/HOP-2492) | Error creating Git metadata | GUI | 2021-02-03 | 2021-02-09 |
| [HOP-2496](https://issues.apache.org/jira/browse/HOP-2496) | Translator sort i18n messages on the key |  | 2021-02-03 | 2021-02-12 |
| [HOP-2499](https://issues.apache.org/jira/browse/HOP-2499) | Trim option in database lookup | Transforms | 2021-02-05 | 2021-02-05 |
| [HOP-2506](https://issues.apache.org/jira/browse/HOP-2506) | Transform Fake data call private method domainName() | Transforms | 2021-02-07 | 2021-02-07 |
| [HOP-2510](https://issues.apache.org/jira/browse/HOP-2510) | Add integration tests for MQTT transforms |  | 2021-02-08 | 2021-02-08 |
| [HOP-2511](https://issues.apache.org/jira/browse/HOP-2511) | Merge join description is incorrect | Documentation | 2021-02-08 | 2021-02-08 |
| [HOP-2519](https://issues.apache.org/jira/browse/HOP-2519) | add string operations to Metadata Injection | Transforms | 2021-02-12 | 2021-02-26 |
| [HOP-2521](https://issues.apache.org/jira/browse/HOP-2521) | document salesforce transforms | Documentation | 2021-02-12 | 2021-02-12 |
| [HOP-2522](https://issues.apache.org/jira/browse/HOP-2522) | Javascript Step does not output booleans | Transforms | 2021-02-12 | 2021-02-12 |
| [HOP-2523](https://issues.apache.org/jira/browse/HOP-2523) | document file access over VFS | Documentation | 2021-02-12 | 2021-02-12 |
| [HOP-2524](https://issues.apache.org/jira/browse/HOP-2524) | port Dropbox steps to Hop transforms | Transforms | 2021-02-12 | 2021-02-12 |
| [HOP-2530](https://issues.apache.org/jira/browse/HOP-2530) | Add Hop Web tests to nightly test process | Hop Web, Integration Testing | 2021-02-14 | 2021-02-14 |
| [HOP-2534](https://issues.apache.org/jira/browse/HOP-2534) | Add Injection Support to AddSequence Transform |  | 2021-02-15 | 2021-02-15 |
| [HOP-2540](https://issues.apache.org/jira/browse/HOP-2540) | double click or modifier-click on an action or transform name without opening the dialog | GUI | 2021-02-19 | 2021-02-19 |
| [HOP-2541](https://issues.apache.org/jira/browse/HOP-2541) | add or extend tooltip to action and transform icons and text to | GUI | 2021-02-19 | 2021-02-19 |
| [HOP-2547](https://issues.apache.org/jira/browse/HOP-2547) | Update the Beam plugin to version 2.28.0 | API, Beam | 2021-02-23 | 2021-02-23 |
| [HOP-2551](https://issues.apache.org/jira/browse/HOP-2551) | Error while executing Pipeline using Beam Spark pipeline engine | Beam, Hop Run, Pipelines | 2021-02-24 | 2021-02-25 |
| [HOP-2553](https://issues.apache.org/jira/browse/HOP-2553) | Error while executing Pipeline using Beam Spark pipeline engine - USING HOP GUI | Beam, Pipelines | 2021-02-24 | 2021-02-25 |
| [HOP-2564](https://issues.apache.org/jira/browse/HOP-2564) | Config folder is not picked up correctly | Hop Web | 2021-02-24 | 2021-03-01 |
| [HOP-2568](https://issues.apache.org/jira/browse/HOP-2568) | Text File Output | Transforms | 2021-02-25 | 2021-02-25 |
| [HOP-2573](https://issues.apache.org/jira/browse/HOP-2573) | Create a Hop sizing guide |  | 2021-02-26 | 2021-02-26 |
| [HOP-2578](https://issues.apache.org/jira/browse/HOP-2578) | Special chars in menu items not displayed correctly on macos | GUI | 2021-02-28 | 2021-02-28 |

### Closed (11)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-1882](https://issues.apache.org/jira/browse/HOP-1882) | Adding run config without name causes exception | GUI | 2020-10-04 | 2021-02-28 |
| [HOP-2091](https://issues.apache.org/jira/browse/HOP-2091) | port formula step to transform plugin | Transforms | 2020-10-04 | 2021-02-02 |
| [HOP-2477](https://issues.apache.org/jira/browse/HOP-2477) | Move interface IValueMetaConverter to package org.apache.hop.core.row[.value] |  | 2021-01-30 | 2021-02-08 |
| [HOP-2495](https://issues.apache.org/jira/browse/HOP-2495) | Translator wrong path for new language file |  | 2021-02-03 | 2021-02-03 |
| [HOP-2497](https://issues.apache.org/jira/browse/HOP-2497) | Add custom entry point extension option | Containers | 2021-02-05 | 2021-02-05 |
| [HOP-2507](https://issues.apache.org/jira/browse/HOP-2507) | ShowHelpDialog bad layout |  | 2021-02-07 | 2021-02-09 |
| [HOP-2512](https://issues.apache.org/jira/browse/HOP-2512) | Duplicated text in Calculator plugin description | Documentation | 2021-02-08 | 2021-02-09 |
| [HOP-2513](https://issues.apache.org/jira/browse/HOP-2513) | 'Split fields' instead of 'Split fields to rows' | Documentation | 2021-02-08 | 2021-02-09 |
| [HOP-2528](https://issues.apache.org/jira/browse/HOP-2528) | HOP_CONFIG_FOLDER is ignored when resolving projectHome | Projects | 2021-02-14 | 2021-02-14 |
| [HOP-2542](https://issues.apache.org/jira/browse/HOP-2542) | Display.isSystemDarkTheme is not available in RAP | Hop Web | 2021-02-20 | 2021-02-28 |
| [HOP-2579](https://issues.apache.org/jira/browse/HOP-2579) | Fix ValueMeta image pixelized | GUI | 2021-02-28 | 2021-03-01 |

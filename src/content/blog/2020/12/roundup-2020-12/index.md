---
title: Roundup November 2020
publishDate: "2020-11-30T10:01:56+02:00"
authors: bamaer
categories: "Roundup, Apache Hop"
preview: Roundup November 2020
---
## Roundup November 2020

With 2020 coming to a close, we’ve started preparing for 0.50, which will be our first Apache release. We’ll have more news on that soon!

At the start of the final month of 2020, let’s have a closer look at what happened at Apache Hop in November.

## Apache Hop Incubation - infrastructure

Our migration to the Apache Software Foundation infrastructure is now done. All references to Project Hop have been changed to Apache Hop (Incubating).

All software and documentation code have been moved to apache-hop-* repositories. All builds have been ported or recreated, some additional features have been added (e.g. PR builds over GitHub Actions). Thank you [Hans](https://twitter.com/hans_va) to get all of this to work seamlessly!

## New Plugins

Quite a number of new plugins are now available in Hop:

* Actions
  * [Repeat](https://hop.apache.org/manual/latest/plugins/actions/repeat.html) and [End-Repeat](https://hop.apache.org/manual/latest/plugins/actions/repeat-end.html)

[![Repeat End-Repeat](/img/Roundup-2020-12/actions.png)](/img/Roundup-2020-12/actions.png)

* Transforms
  * MongoDB [Input](https://hop.apache.org/manual/latest/plugins/transforms/mongodbinput.html) and [Output](https://hop.apache.org/manual/latest/plugins/transforms/mongodboutput.html)
  * [CPython](https://github.com/m-a-hall/hop-cpython): Mark Hall ported the CPython plugin he wrote for Kettle/Pentaho to Hop.
  * Salesforce:
    * Salesforce Delete
    * Salesforce Input
    * Salesforce Insert
    * Salesforce Update
    * Salesforce Upsert

[![Repeat End-Repeat](/img/Roundup-2020-12/transforms.png)](/img/Roundup-2020-12/transforms.png)

## Documentation

As mentioned a couple of times in previous updates, documentation will be work in progress for the foreseeable future. However, there is progress!

We’ve received some additions and updates to the [user manual](https://hop.apache.org/manual/latest/).

The majority of the work was done on the developer documentation (thanks, [Hans](https://twitter.com/hans_va), [Hiromu](https://twitter.com/HiromuHota), [Mahendran](https://twitter.com/mmookkiah), [Matt](https://twitter.com/mattcasters)!):

* Updated [Developer Getting Started](https://hop.apache.org/dev-manual/latest/getting-started.htmlp)
* Updated [Porting Kettle Plugins](https://hop.apache.org/dev-manual/latest/porting-kettle-plugins.html)
* New: [Metadata Plugins](https://hop.apache.org/dev-manual/latest/metadata-plugins.html) guide
* New: [Setting Up Your Development Environment](https://hop.apache.org/dev-manual/latest/setup-dev-environment.html)
* New: [Hop Plugin Development](https://hop.apache.org/dev-manual/latest/plugin-development.html)
* New: [WebHop Developer Guide](https://hop.apache.org/dev-manual/latest/webhop/developer-guide.html)

As always, ping us on [mattermost](https://chat.project-hop.org) to discuss documentation, and create [tickets](https://issues.apache.org/jira/projects/HOP/issues) if you find any missing or incorrect information in the docs. Documentation is code, we take bugs in the documentation just as serious as bugs in the code.

## Community

The Hop community continues to grow:

* chat: 108 registered members (up from 104) [join](https://chat.project-hop.org)
* LinkedIn: 309 followers (up from 263) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 233 followers (up from 219) [follow](https://twitter.com/ApacheHop)
* YouTube: 40 subscribers (up from 38) [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)
* Facebook: 20 followers (up from 19) [like](https://www.facebook.com/apachehop)

The following people have been added as committers:

* Peter Fabricius
* Sergio Ramazzina

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) to find out more.

## Various

The full list of issues that had activity over the last month is:

### Resolved (76)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-1733](https://issues.apache.org/jira/browse/HOP-1733) | Update MSSQLNative documentation with info on how to use integrated security | Database, Documentation | 2020-10-04 | 2020-11-15 |
| [HOP-1757](https://issues.apache.org/jira/browse/HOP-1757) | Error thrown when hop.properties doesn’t exist |  | 2020-10-04 | 2020-11-23 |
| [HOP-1847](https://issues.apache.org/jira/browse/HOP-1847) | Editing Pipeline Run Configuration causes error |  | 2020-10-04 | 2020-11-23 |
| [HOP-1896](https://issues.apache.org/jira/browse/HOP-1896) | Refactor UuidUtil |  | 2020-10-04 | 2020-11-26 |
| [HOP-1905](https://issues.apache.org/jira/browse/HOP-1905) | MemoryGroupByMeta not working in Beam | Beam | 2020-10-04 | 2020-11-23 |
| [HOP-1943](https://issues.apache.org/jira/browse/HOP-1943) | hop-conf.sh: Create config.json if missing |  | 2020-10-04 | 2020-11-23 |
| [HOP-1997](https://issues.apache.org/jira/browse/HOP-1997) | Transform context option to specify row distribution doesn’t work | Transforms | 2020-10-04 | 2020-11-23 |
| [HOP-2013](https://issues.apache.org/jira/browse/HOP-2013) | Project not correctly created | GUI | 2020-10-04 | 2020-11-23 |
| [HOP-2045](https://issues.apache.org/jira/browse/HOP-2045) | Update Generic Database connection Documentation | Database, Documentation | 2020-10-04 | 2020-11-15 |
| [HOP-2057](https://issues.apache.org/jira/browse/HOP-2057) | update environments page | Documentation | 2020-10-04 | 2020-11-15 |
| [HOP-2080](https://issues.apache.org/jira/browse/HOP-2080) | Remove or adapte file resources/org/apache/hop/ui/core/dialog/license/license.txt | GUI | 2020-10-04 | 2020-11-25 |
| [HOP-2082](https://issues.apache.org/jira/browse/HOP-2082) | port Stream Schema Merge plugin to Hop transform | Transforms | 2020-10-04 | 2020-11-18 |
| [HOP-2090](https://issues.apache.org/jira/browse/HOP-2090) | Stream Schema Merge - NPE | Transforms | 2020-10-04 | 2020-11-18 |
| [HOP-2101](https://issues.apache.org/jira/browse/HOP-2101) | In a fresh copy of hop, a pipeline will fail to run without a project. |  | 2020-10-04 | 2020-11-23 |
| [HOP-2102](https://issues.apache.org/jira/browse/HOP-2102) | If you close the Preview Rows dialog using the "X", the preview will keep running with no way to cancel (ever). |  | 2020-10-04 | 2020-11-18 |
| [HOP-2103](https://issues.apache.org/jira/browse/HOP-2103) | Without a project; Text Input Step fails to record the whole file name for browsing and selecting files. |  | 2020-10-04 | 2020-11-25 |
| [HOP-2121](https://issues.apache.org/jira/browse/HOP-2121) | Update base doc url to https://hop.apache.org/ | Documentation, GUI | 2020-10-18 | 2020-11-15 |
| [HOP-2123](https://issues.apache.org/jira/browse/HOP-2123) | Code cleanup: rename variables with bad style |  | 2020-10-19 | 2020-11-09 |
| [HOP-2126](https://issues.apache.org/jira/browse/HOP-2126) | Parameter HOP_MAX_LOG_SIZE_IN_LINES is set too low |  | 2020-10-22 | 2020-11-12 |
| [HOP-2127](https://issues.apache.org/jira/browse/HOP-2127) | Workflows do not correctly capture their log channel |  | 2020-10-22 | 2020-11-09 |
| [HOP-2128](https://issues.apache.org/jira/browse/HOP-2128) | Context dialog for Notes is missing in workflows |  | 2020-10-23 | 2020-11-25 |
| [HOP-2134](https://issues.apache.org/jira/browse/HOP-2134) | Add support for ordered categories for context actions, expose in context dialog | GUI | 2020-10-27 | 2020-11-16 |
| [HOP-2135](https://issues.apache.org/jira/browse/HOP-2135) | Null pointer exception when running Shell action in a workflow | Actions | 2020-10-27 | 2020-11-12 |
| [HOP-2136](https://issues.apache.org/jira/browse/HOP-2136) | Options: Font size changes are not honored | GUI | 2020-10-30 | 2020-11-23 |
| [HOP-2137](https://issues.apache.org/jira/browse/HOP-2137) | Zoom factor is incorrectly calculated on Windows | GUI | 2020-10-30 | 2020-11-12 |
| [HOP-2140](https://issues.apache.org/jira/browse/HOP-2140) | Exception raised when running Hop Translator |  | 2020-11-03 | 2020-11-12 |
| [HOP-2146](https://issues.apache.org/jira/browse/HOP-2146) | AuditManagerTest fails |  | 2020-11-06 | 2020-11-09 |
| [HOP-2152](https://issues.apache.org/jira/browse/HOP-2152) | Enum HopExtensionPoint use Job name |  | 2020-11-10 | 2020-11-30 |
| [HOP-2156](https://issues.apache.org/jira/browse/HOP-2156) | AbstractMetaTest.testMultithreadHammeringOfListener causes OOM |  | 2020-11-11 | 2020-11-12 |
| [HOP-2160](https://issues.apache.org/jira/browse/HOP-2160) | Wrong name of project and enviroment after update | GUI | 2020-11-12 | 2020-11-25 |
| [HOP-2164](https://issues.apache.org/jira/browse/HOP-2164) | Add format selector in Data Set creation | GUI | 2020-11-12 | 2020-11-12 |
| [HOP-2165](https://issues.apache.org/jira/browse/HOP-2165) | Add format selector in File Definition creation | GUI | 2020-11-12 | 2020-11-12 |
| [HOP-2167](https://issues.apache.org/jira/browse/HOP-2167) | ContextDialog NPE | GUI | 2020-11-12 | 2020-11-17 |
| [HOP-2168](https://issues.apache.org/jira/browse/HOP-2168) | Store run configuration names per file | GUI | 2020-11-12 | 2020-11-17 |
| [HOP-2169](https://issues.apache.org/jira/browse/HOP-2169) | Random Value transform generates data of wrong class |  | 2020-11-12 | 2020-11-16 |
| [HOP-2170](https://issues.apache.org/jira/browse/HOP-2170) | Evaluation Action: parent_workflow unavailable | Actions | 2020-11-13 | 2020-11-23 |
| [HOP-2173](https://issues.apache.org/jira/browse/HOP-2173) | Make it easy for plugins to get lists of names from other plugins | GUI | 2020-11-13 | 2020-11-17 |
| [HOP-2175](https://issues.apache.org/jira/browse/HOP-2175) | Translation issues | GUI | 2020-11-16 | 2020-11-23 |
| [HOP-2180](https://issues.apache.org/jira/browse/HOP-2180) | Failed to show filename, file content & fields | GUI | 2020-11-16 | 2020-11-23 |
| [HOP-2183](https://issues.apache.org/jira/browse/HOP-2183) | Error pasting from clipboard | GUI | 2020-11-16 | 2020-11-24 |
| [HOP-2184](https://issues.apache.org/jira/browse/HOP-2184) | Canvas grid option doesn’t update after saving | GUI | 2020-11-16 | 2020-11-24 |
| [HOP-2185](https://issues.apache.org/jira/browse/HOP-2185) | Font and color options do not update after setting | GUI | 2020-11-16 | 2020-11-24 |
| [HOP-2187](https://issues.apache.org/jira/browse/HOP-2187) | ContextDialog to create an item: set Workflow and pipeline in a Basic category |  | 2020-11-16 | 2020-11-18 |
| [HOP-2188](https://issues.apache.org/jira/browse/HOP-2188) | Add RAT to PR Build and make it pass | Build | 2020-11-17 | 2020-11-17 |
| [HOP-2189](https://issues.apache.org/jira/browse/HOP-2189) | Port the Salesforce transforms | Transforms | 2020-11-17 | 2020-11-17 |
| [HOP-2192](https://issues.apache.org/jira/browse/HOP-2192) | Undoing delete of a note changes font color |  | 2020-11-17 | 2020-11-17 |
| [HOP-2193](https://issues.apache.org/jira/browse/HOP-2193) | NPE in Copy Rows To Result | Transforms | 2020-11-17 | 2020-11-18 |
| [HOP-2194](https://issues.apache.org/jira/browse/HOP-2194) | ITransform declaring meta or data causing NPEs | Transforms | 2020-11-17 | 2020-11-18 |
| [HOP-2195](https://issues.apache.org/jira/browse/HOP-2195) | rename hop-assemblies-client to hop-client | Build | 2020-11-17 | 2020-11-18 |
| [HOP-2196](https://issues.apache.org/jira/browse/HOP-2196) | Split the File/New actions into File and Metadata categories | GUI | 2020-11-17 | 2020-11-18 |
| [HOP-2197](https://issues.apache.org/jira/browse/HOP-2197) | Changing variable in project dialog requires restart | GUI | 2020-11-17 | 2020-11-19 |
| [HOP-2198](https://issues.apache.org/jira/browse/HOP-2198) | Workflow Transform not working |  | 2020-11-17 | 2020-11-18 |
| [HOP-2200](https://issues.apache.org/jira/browse/HOP-2200) | Remove the Hop Lifecycle listener plugin type | API | 2020-11-18 | 2020-11-26 |
| [HOP-2201](https://issues.apache.org/jira/browse/HOP-2201) | Workflow executer Transform does not show logging | Transforms | 2020-11-18 | 2020-11-18 |
| [HOP-2202](https://issues.apache.org/jira/browse/HOP-2202) | Passing parameters using the "Copy results to parametrs" option does not work | Actions, Transforms | 2020-11-18 | 2020-11-19 |
| [HOP-2208](https://issues.apache.org/jira/browse/HOP-2208) | Make ContextDialog more friendly for plugins | GUI | 2020-11-19 | 2020-11-19 |
| [HOP-2209](https://issues.apache.org/jira/browse/HOP-2209) | ContextDialog: remove excess spacing and add "clear search" icon | GUI | 2020-11-19 | 2020-11-19 |
| [HOP-2210](https://issues.apache.org/jira/browse/HOP-2210) | Add m2 caching to PR build | Build, Infrastructure | 2020-11-19 | 2020-11-22 |
| [HOP-2211](https://issues.apache.org/jira/browse/HOP-2211) | Port the MongoDB plugins | Transforms | 2020-11-19 | 2020-11-23 |
| [HOP-2214](https://issues.apache.org/jira/browse/HOP-2214) | Issue with variable resolution of empty values | Transforms | 2020-11-20 | 2020-11-23 |
| [HOP-2215](https://issues.apache.org/jira/browse/HOP-2215) | Creating project with relative path in home folder creates NPE | CLI | 2020-11-20 | 2020-11-24 |
| [HOP-2216](https://issues.apache.org/jira/browse/HOP-2216) | hop-run, return exit code 1 when a workflow aborts with error | CLI | 2020-11-22 | 2020-11-28 |
| [HOP-2219](https://issues.apache.org/jira/browse/HOP-2219) | create mongoDB documentation | Documentation | 2020-11-23 | 2020-11-24 |
| [HOP-2221](https://issues.apache.org/jira/browse/HOP-2221) | Clear custom options in the options dialog doesn’t save to file | GUI | 2020-11-24 | 2020-11-24 |
| [HOP-2222](https://issues.apache.org/jira/browse/HOP-2222) | Creating new project fails | GUI | 2020-11-24 | 2020-11-24 |
| [HOP-2224](https://issues.apache.org/jira/browse/HOP-2224) | Renaming metadata entries creates a copy | Metadata | 2020-11-24 | 2020-11-25 |
| [HOP-2227](https://issues.apache.org/jira/browse/HOP-2227) | The preview rows dialog should not pop up when dragging | GUI | 2020-11-25 | 2020-11-27 |
| [HOP-2230](https://issues.apache.org/jira/browse/HOP-2230) | The Metadata Injection dialog references methods of specification | Transforms | 2020-11-25 | 2020-11-27 |
| [HOP-2232](https://issues.apache.org/jira/browse/HOP-2232) | Port the repeat-until actions |  | 2020-11-26 | 2020-11-27 |
| [HOP-2233](https://issues.apache.org/jira/browse/HOP-2233) | Project variables are not passed to a new workflow | Workflows | 2020-11-26 | 2020-11-27 |
| [HOP-2234](https://issues.apache.org/jira/browse/HOP-2234) | Values are not passed to parameters in the Workflow Executor transform | Transforms, Workflows | 2020-11-26 | 2020-11-27 |
| [HOP-2236](https://issues.apache.org/jira/browse/HOP-2236) | Action dialogs are not searched for in the plugin classpath | API | 2020-11-27 | 2020-11-27 |
| [HOP-2237](https://issues.apache.org/jira/browse/HOP-2237) | Resizing the file dialog collapses columns | GUI | 2020-11-27 | 2020-11-27 |
| [HOP-2238](https://issues.apache.org/jira/browse/HOP-2238) | Add search to metadata injection Transform | Transforms | 2020-11-27 | 2020-11-27 |
| [HOP-2240](https://issues.apache.org/jira/browse/HOP-2240) | The JavaScript action still uses _entry_, doc says action | Actions | 2020-11-27 | 2020-11-27 |
| [HOP-2241](https://issues.apache.org/jira/browse/HOP-2241) | A stopped workflow will think it’s still running | Workflows | 2020-11-27 | 2020-11-27 |

### In Progress (9)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-2132](https://issues.apache.org/jira/browse/HOP-2132) | Action with Connection line not correctly translated | Actions, Translations | 2020-10-25 | 2020-11-30 |
| [HOP-2191](https://issues.apache.org/jira/browse/HOP-2191) | Check and update notice,license,disclaimer,... |  | 2020-11-17 | 2020-11-24 |
| [HOP-2203](https://issues.apache.org/jira/browse/HOP-2203) | Create About page | GUI | 2020-11-18 | 2020-11-18 |
| [HOP-2212](https://issues.apache.org/jira/browse/HOP-2212) | Create first version of Integration Testing | Build, Infrastructure, Integration Testing | 2020-11-20 | 2020-11-20 |
| [HOP-2217](https://issues.apache.org/jira/browse/HOP-2217) | Port the Cassandra plugin | Transforms | 2020-11-22 | 2020-11-29 |
| [HOP-2226](https://issues.apache.org/jira/browse/HOP-2226) | Document how to set up a developer environment | Documentation | 2020-11-25 | 2020-11-25 |
| [HOP-2235](https://issues.apache.org/jira/browse/HOP-2235) | Create a perspective to manage metadata | GUI | 2020-11-26 | 2020-11-29 |
| [HOP-2239](https://issues.apache.org/jira/browse/HOP-2239) | When executing a workflow manually set variables are not applied | GUI | 2020-11-27 | 2020-11-27 |
| [HOP-2244](https://issues.apache.org/jira/browse/HOP-2244) | Reverse sort the projects drop-down list by use date | GUI | 2020-11-30 | 2020-11-30 |

### Open (42)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-1593](https://issues.apache.org/jira/browse/HOP-1593) | Review/Refactor getValueFromSQLType | Database | 2020-10-04 | 2020-11-09 |
| [HOP-1605](https://issues.apache.org/jira/browse/HOP-1605) | API should use boolean "isXXXX()" getter naming convention | Database | 2020-10-04 | 2020-11-09 |
| [HOP-1835](https://issues.apache.org/jira/browse/HOP-1835) | Create Help- About menu entry | GUI | 2020-10-04 | 2020-11-18 |
| [HOP-2054](https://issues.apache.org/jira/browse/HOP-2054) | Fix the beam-demo project | Beam | 2020-10-04 | 2020-11-12 |
| [HOP-2071](https://issues.apache.org/jira/browse/HOP-2071) | Create Fake Data Transform Documentation | Documentation | 2020-10-04 | 2020-11-03 |
| [HOP-2104](https://issues.apache.org/jira/browse/HOP-2104) | Hop needs a default "Project" and "Local Run Configuration" |  | 2020-10-04 | 2020-11-12 |
| [HOP-2141](https://issues.apache.org/jira/browse/HOP-2141) | NullPointerException raised on hop-server workflow start | Hop Server | 2020-11-05 | 2020-11-05 |
| [HOP-2142](https://issues.apache.org/jira/browse/HOP-2142) | Replace javax/mail/Address dependency | Transforms | 2020-11-05 | 2020-11-23 |
| [HOP-2143](https://issues.apache.org/jira/browse/HOP-2143) | Not found from Search option | Documentation | 2020-11-06 | 2020-11-23 |
| [HOP-2144](https://issues.apache.org/jira/browse/HOP-2144) | Git Repository option is missing | Documentation | 2020-11-06 | 2020-11-06 |
| [HOP-2145](https://issues.apache.org/jira/browse/HOP-2145) | "Synchronise name with" option doesn’t work (Workflow properties) | GUI | 2020-11-06 | 2020-11-29 |
| [HOP-2147](https://issues.apache.org/jira/browse/HOP-2147) | hop-server.bat has wrong line ending char | Hop Server | 2020-11-09 | 2020-11-09 |
| [HOP-2148](https://issues.apache.org/jira/browse/HOP-2148) | NullPointerException raised on stopping an inactive workflow | Hop Server | 2020-11-10 | 2020-11-10 |
| [HOP-2149](https://issues.apache.org/jira/browse/HOP-2149) | Standardize option name "Synchronise name with filename" | GUI | 2020-11-10 | 2020-11-17 |
| [HOP-2150](https://issues.apache.org/jira/browse/HOP-2150) | Issue editing pipelines and workflows | GUI | 2020-11-10 | 2020-11-16 |
| [HOP-2151](https://issues.apache.org/jira/browse/HOP-2151) | Hop-server Object ID not returned in the result from /registerWorkflow request | Hop Server | 2020-11-10 | 2020-11-10 |
| [HOP-2154](https://issues.apache.org/jira/browse/HOP-2154) | Error editing Data set with no file name | GUI | 2020-11-11 | 2020-11-26 |
| [HOP-2155](https://issues.apache.org/jira/browse/HOP-2155) | Error selecting Edit Hop metadata object | GUI | 2020-11-11 | 2020-11-26 |
| [HOP-2159](https://issues.apache.org/jira/browse/HOP-2159) | Flink pipeline engine documentation broken table | Website | 2020-11-12 | 2020-11-12 |
| [HOP-2161](https://issues.apache.org/jira/browse/HOP-2161) | MetaStore created with no data | GUI | 2020-11-12 | 2020-11-26 |
| [HOP-2162](https://issues.apache.org/jira/browse/HOP-2162) | Error in Ok, Edit and View options when the Data Set has no name | GUI | 2020-11-12 | 2020-11-12 |
| [HOP-2163](https://issues.apache.org/jira/browse/HOP-2163) | Edit Repository instead of Git Repository | GUI | 2020-11-12 | 2020-11-12 |
| [HOP-2166](https://issues.apache.org/jira/browse/HOP-2166) | Improve first-time usage experience | GUI | 2020-11-12 | 2020-11-12 |
| [HOP-2171](https://issues.apache.org/jira/browse/HOP-2171) | Wrong file name | GUI | 2020-11-13 | 2020-11-17 |
| [HOP-2172](https://issues.apache.org/jira/browse/HOP-2172) | Disable options as appropriate | GUI | 2020-11-13 | 2020-11-17 |
| [HOP-2174](https://issues.apache.org/jira/browse/HOP-2174) | NullPointerException selecting or adding Project or Environment from Search view | GUI | 2020-11-16 | 2020-11-23 |
| [HOP-2176](https://issues.apache.org/jira/browse/HOP-2176) | The system removes selection after canceling the creation of a new configuration | GUI | 2020-11-16 | 2020-11-16 |
| [HOP-2178](https://issues.apache.org/jira/browse/HOP-2178) | Error selecting file (Text file input) | GUI | 2020-11-16 | 2020-11-23 |
| [HOP-2179](https://issues.apache.org/jira/browse/HOP-2179) | Error creating new project | GUI | 2020-11-16 | 2020-11-23 |
| [HOP-2181](https://issues.apache.org/jira/browse/HOP-2181) | Error opening file in CSV file input | GUI | 2020-11-16 | 2020-11-23 |
| [HOP-2182](https://issues.apache.org/jira/browse/HOP-2182) | Remove dependencies on conflicting licenses | Build | 2020-11-16 | 2020-11-17 |
| [HOP-2186](https://issues.apache.org/jira/browse/HOP-2186) | The system doesn’t report existing file name | GUI | 2020-11-16 | 2020-11-26 |
| [HOP-2190](https://issues.apache.org/jira/browse/HOP-2190) | IllegalArgumentException Open option (Serialize to file) | GUI | 2020-11-17 | 2020-11-17 |
| [HOP-2204](https://issues.apache.org/jira/browse/HOP-2204) | create a menu option to export an entire project as a zip file | GUI | 2020-11-18 | 2020-11-18 |
| [HOP-2207](https://issues.apache.org/jira/browse/HOP-2207) | Notify 'Stap Name' is mandatory | GUI | 2020-11-19 | 2020-11-19 |
| [HOP-2213](https://issues.apache.org/jira/browse/HOP-2213) | import Kettle/PDI jobs and transformations into Hop | GUI | 2020-11-20 | 2020-11-20 |
| [HOP-2218](https://issues.apache.org/jira/browse/HOP-2218) | Copy rows to result should be renamed | Transforms | 2020-11-22 | 2020-11-22 |
| [HOP-2223](https://issues.apache.org/jira/browse/HOP-2223) | Doc Build: Images are not copied over from source code | Build, Documentation | 2020-11-24 | 2020-11-24 |
| [HOP-2225](https://issues.apache.org/jira/browse/HOP-2225) | Show validation message in modal when no file is selected | GUI | 2020-11-24 | 2020-11-24 |
| [HOP-2228](https://issues.apache.org/jira/browse/HOP-2228) | Support Hop on Java 11 | API | 2020-11-25 | 2020-11-25 |
| [HOP-2229](https://issues.apache.org/jira/browse/HOP-2229) | Configure Java 11 encapsulation | API | 2020-11-25 | 2020-11-25 |
| [HOP-2231](https://issues.apache.org/jira/browse/HOP-2231) | Update powermock test libraries to 2.x | API | 2020-11-25 | 2020-11-25 |

### Closed (15)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-1740](https://issues.apache.org/jira/browse/HOP-1740) | Zoom dropdown looks missaligned | GUI | 2020-10-04 | 2020-11-07 |
| [HOP-1897](https://issues.apache.org/jira/browse/HOP-1897) | All tickets related with Java 11 development |  | 2020-10-04 | 2020-11-26 |
| [HOP-2033](https://issues.apache.org/jira/browse/HOP-2033) | Add latest tag to release docker builds for dockerhub | Containers | 2020-10-04 | 2020-11-18 |
| [HOP-2114](https://issues.apache.org/jira/browse/HOP-2114) | Cannot delete selected note with menu Edit > Delete  in workflow or pipeline | GUI | 2020-10-12 | 2020-11-17 |
| [HOP-2138](https://issues.apache.org/jira/browse/HOP-2138) | Fix sonar issues org.apache.hop.core.xml |  | 2020-11-02 | 2020-11-07 |
| [HOP-2139](https://issues.apache.org/jira/browse/HOP-2139) | IPerspective should return Control not Composite | GUI | 2020-11-03 | 2020-11-09 |
| [HOP-2153](https://issues.apache.org/jira/browse/HOP-2153) | Change case for keyboard shortcut on Windows | GUI | 2020-11-10 | 2020-11-12 |
| [HOP-2157](https://issues.apache.org/jira/browse/HOP-2157) | MetadataPluginType doesn’t extract image from annotation | GUI | 2020-11-11 | 2020-11-12 |
| [HOP-2158](https://issues.apache.org/jira/browse/HOP-2158) | Fix Workflow Hop File Type ID and name |  | 2020-11-11 | 2020-11-12 |
| [HOP-2177](https://issues.apache.org/jira/browse/HOP-2177) | Wrong icon | GUI | 2020-11-16 | 2020-11-30 |
| [HOP-2199](https://issues.apache.org/jira/browse/HOP-2199) | Pipeline Executor action error when running for the first time | Actions | 2020-11-17 | 2020-11-18 |
| [HOP-2205](https://issues.apache.org/jira/browse/HOP-2205) | TabFolderReorder lost font when TabItem is moved | GUI | 2020-11-18 | 2020-11-19 |
| [HOP-2206](https://issues.apache.org/jira/browse/HOP-2206) | Add IHopFileType.CAPABILITY_SAVE_AS |  | 2020-11-18 | 2020-11-19 |
| [HOP-2242](https://issues.apache.org/jira/browse/HOP-2242) | Extension point to detect the change of project | GUI | 2020-11-27 | 2020-11-30 |
| [HOP-2243](https://issues.apache.org/jira/browse/HOP-2243) | GuiResource is buggy with same image in two different sizes | GUI | 2020-11-29 | 2020-11-30 |

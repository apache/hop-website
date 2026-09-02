---
title: Roundup January 2021
publishDate: "2021-02-02T10:01:56+02:00"
authors: bamaer
categories: "Roundup, Apache Hop"
preview: Roundup January 2021
---
## Roundup January 2021

As always at the start of another new month, let’s have a look at what happened at Hop over the last month. Here’s the recap for January 2021!

## Apache Hop (Incubating) 0.60 Released

Apache Hop (Incubating) 0.60 was [released](/blog/2021/01/release-0.60/) in late January.

With 0.60 being the first Hop release as an Incubating ASF project, we focused on adopting the "Apache Way", and made this a source code only release.

Check all details in the [release announcement](/blog/2021/01/release-0.60/).

Since the release of 0.60, the last license incompatibilities have been resolved: all non-compliant source code has been cleanup up or removed, Hop is now 100% ASF compliant.

## Password Encoding

Metadata password encoding has now been made pluggable and is synced with the rest of the Hop platform with
the [AES, target="blank"](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) (Advanced Encryption Standard) passwords [implementation](http://hop.apache.org/manual/latest/plugins/passwords/aespasswords.html) as a first plugin.

## Translation improvements

Having Hop available in one’s native language significantly improves developer productivity. That is why we introduced the Hop Translator tool very early after Hop’s introduction, and have now simplified the process of adding and translating i18n keys for developers and translators.

Developers can now specify i18n keys as `i18n:package:key`, for example in the annotation below:

```
@GuiMenuElement(
      root = ID_MAIN_MENU,
      id = ID_MAIN_MENU_FILE,
      label = "i18n::HopGui.Menu.File",
      parentId = ID_MAIN_MENU)
```

Check the [internationalisation documentation, target="blank"](http://hop.apache.org/dev-manual/latest/internationalisation.html) for more details.

On that page, you’ll also find information about the Translator’s use. Check the [translation contributor guide](http://hop.apache.org/community/contribution-guides/translation-contribution-guide/) to check how you can start contributing translations in your native language.

## New Plugins

The list of available plugins in Hop keeps growing. Thanks Matt, Nicolas and Sergio for January’s batch of new plugins:

* Action(s):
  * [AS400 command](http://hop.apache.org/manual/latest/plugins/actions/as400command.html)
* Passwords (see up):
  * [AES Two Way Password Encoder](http://hop.apache.org/manual/latest/plugins/passwords/aespasswords.html)
* Transforms:
  * [Enhanced JSON Output](http://hop.apache.org/manual/latest/plugins/transforms/enhancedjsonoutput.html)
  * [Metadata structure of stream](http://hop.apache.org/manual/latest/plugins/transforms/metastructure.html)

## Kettle/PDI Importer

From the start in late 2019, Hop’s goal was to be an independent platform. Hop started from the  Kettle/PDI 8.2.0.7 code base, but both platforms have moved in different directions and are not compatible.

Users and developers who want to migrate their Kettle/PDI projects to Hop are now one `File -> Import from Kettle/PDI` click away from doing so. Specify your Kettle/PDI jobs and transformations folder, a Hop project or folder to import to, and you’re done. Optionally, kettle.properties, shared.xml and simple-jndi’s jdbc.properties can be imported to Hop variables and relational database connections as well.

[![Kettle/PDI Import](http://hop.apache.org/manual/latest/hop-import/import-report.png)](http://hop.apache.org/manual/latest/hop-import/import-report.png)

Check the [documentation](http://hop.apache.org/manual/latest/hop-vs-kettle/import-kettle-projects.html) for more details and don’t forget to create a [JIRA ticket](https://issues.apache.org/jira/browse/HOP) if you find any issues.

## Various

### Continued L&F improvements

We’ve continued to tweak Hop Gui’s look and feel, among other things with improved icons resolution on Mac.

[![Mac OS Icon](/img/Roundup-2021-02/mac-icons.png)](/img/Roundup-2021-02/mac-icons.png)

### Project improvements

We continue to work on project and environment improvements. After lengthy discussions on the chat `~dev` channel and on the mailing list, we made a couple of changes. Projects are now optional, have a default and can inherit from other projects.

[![Project Improvements](/img/Roundup-2021-02/project-improvements.png)](/img/Roundup-2021-02/project-improvements.png)

## Community

The Hop community continues to grow:

* chat: 134 registered members (up from 122) [join](https://chat.project-hop.org)
* LinkedIn: 375 followers (up from 321) [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 291 followers (up from 250) [follow](https://twitter.com/ApacheHop)
* YouTube: 68 subscribers (up from 50) [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) to find out more.

## JIRA Tickets

The full list of issues that had activity over the last month is:

### Resolved (71)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-1788](https://issues.apache.org/jira/browse/HOP-1788) | Renaming database connection creates duplicates | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-1855](https://issues.apache.org/jira/browse/HOP-1855) | "Clicking ""get more rows"" closes preview dialog" | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-1879](https://issues.apache.org/jira/browse/HOP-1879) | find an APL 2.0 alternative for the GPL licensed EDT FTP client in the Put FTP action | Actions | 2020-10-04 | 2021-01-27 |
| [HOP-2054](https://issues.apache.org/jira/browse/HOP-2054) | Fix the beam-demo project | Beam | 2020-10-04 | 2021-01-25 |
| [HOP-2262](https://issues.apache.org/jira/browse/HOP-2262) | Native core plugins a registered twice |  | 2020-12-04 | 2021-01-29 |
| [HOP-2308](https://issues.apache.org/jira/browse/HOP-2308) | Enable pritty print on JSON output | Transforms | 2020-12-16 | 2021-01-20 |
| [HOP-2342](https://issues.apache.org/jira/browse/HOP-2342) | Single click mode: moving a transform or action can cause edit | GUI | 2020-12-21 | 2021-01-04 |
| [HOP-2376](https://issues.apache.org/jira/browse/HOP-2376) | App icon on macOS looks differently | GUI | 2021-01-01 | 2021-01-22 |
| [HOP-2378](https://issues.apache.org/jira/browse/HOP-2378) | Translator: implement multi-line code scanner | Translations | 2021-01-01 | 2021-01-13 |
| [HOP-2381](https://issues.apache.org/jira/browse/HOP-2381) | Add Injection support to JSON Output transform | Transforms | 2021-01-02 | 2021-01-27 |
| [HOP-2383](https://issues.apache.org/jira/browse/HOP-2383) | Deprecate smart-json and migrate to jackson in JSON transforms | Transforms | 2021-01-02 | 2021-01-27 |
| [HOP-2384](https://issues.apache.org/jira/browse/HOP-2384) | Add documentation to Enhanced JSON Output Transform | Documentation | 2021-01-02 | 2021-01-22 |
| [HOP-2385](https://issues.apache.org/jira/browse/HOP-2385) | Replace JFace MessageDialogWithToggle | GUI, Hop Web | 2021-01-02 | 2021-01-04 |
| [HOP-2387](https://issues.apache.org/jira/browse/HOP-2387) | Make deprecated variables (linesRead, linesWritten,linesOutput.. ) private in BaseTransform |  | 2021-01-02 | 2021-01-12 |
| [HOP-2388](https://issues.apache.org/jira/browse/HOP-2388) | Use environment variable HOP_PLUGIN_BASE_FOLDERS to avoid having to pass it as a system property | CLI | 2021-01-02 | 2021-01-09 |
| [HOP-2392](https://issues.apache.org/jira/browse/HOP-2392) | Get Fields button not working on JSON Output Transform | Transforms | 2021-01-03 | 2021-01-20 |
| [HOP-2393](https://issues.apache.org/jira/browse/HOP-2393) | Exporting to SVG should overwrite the file if it exists | GUI | 2021-01-03 | 2021-01-03 |
| [HOP-2397](https://issues.apache.org/jira/browse/HOP-2397) | "change default of abort transform to ""abort with error""" | Transforms | 2021-01-04 | 2021-01-10 |
| [HOP-2398](https://issues.apache.org/jira/browse/HOP-2398) | Remove old Kettle samples, code and welcome pages |  | 2021-01-04 | 2021-01-04 |
| [HOP-2399](https://issues.apache.org/jira/browse/HOP-2399) | add ASF header to adoc/md files | Documentation | 2021-01-04 | 2021-01-04 |
| [HOP-2401](https://issues.apache.org/jira/browse/HOP-2401) | New design for worklow/pipeline graph | GUI | 2021-01-04 | 2021-01-05 |
| [HOP-2402](https://issues.apache.org/jira/browse/HOP-2402) | cleanup RAT excludes | Build | 2021-01-05 | 2021-01-07 |
| [HOP-2403](https://issues.apache.org/jira/browse/HOP-2403) | Context dialog has problems when using the scrollbar |  | 2021-01-05 | 2021-01-27 |
| [HOP-2405](https://issues.apache.org/jira/browse/HOP-2405) | Clean up old transformation and job files |  | 2021-01-06 | 2021-01-16 |
| [HOP-2407](https://issues.apache.org/jira/browse/HOP-2407) | change selected text color | Website | 2021-01-07 | 2021-02-02 |
| [HOP-2408](https://issues.apache.org/jira/browse/HOP-2408) | add Disclaimer-wip to repo |  | 2021-01-08 | 2021-01-10 |
| [HOP-2409](https://issues.apache.org/jira/browse/HOP-2409) | Update headers to be apache conform |  | 2021-01-08 | 2021-01-10 |
| [HOP-2410](https://issues.apache.org/jira/browse/HOP-2410) | remove edtftpj dependency |  | 2021-01-08 | 2021-01-27 |
| [HOP-2411](https://issues.apache.org/jira/browse/HOP-2411) | no object DCH for MIME type multipart/mixed error sending email in pipeline |  | 2021-01-09 | 2021-01-16 |
| [HOP-2412](https://issues.apache.org/jira/browse/HOP-2412) | hop-assemblies-debug no longer works | Build | 2021-01-09 | 2021-01-10 |
| [HOP-2414](https://issues.apache.org/jira/browse/HOP-2414) | Update Apache Beam API to 2.27.0 | Beam | 2021-01-10 | 2021-01-13 |
| [HOP-2418](https://issues.apache.org/jira/browse/HOP-2418) | Split hop does not work | GUI, Hop Web | 2021-01-11 | 2021-01-19 |
| [HOP-2419](https://issues.apache.org/jira/browse/HOP-2419) | Error display tooltip when transformation failed | GUI | 2021-01-12 | 2021-01-12 |
| [HOP-2420](https://issues.apache.org/jira/browse/HOP-2420) | Field splitter: add support for escape string | Transforms | 2021-01-14 | 2021-01-16 |
| [HOP-2421](https://issues.apache.org/jira/browse/HOP-2421) | """Open file"" dialog does not show expected files" | GUI | 2021-01-14 | 2021-01-16 |
| [HOP-2422](https://issues.apache.org/jira/browse/HOP-2422) | Test DB connection does not use variables correctly | GUI | 2021-01-14 | 2021-01-18 |
| [HOP-2423](https://issues.apache.org/jira/browse/HOP-2423) | Concat fields: doesn’t work with lazily converted data | Transforms | 2021-01-15 | 2021-01-16 |
| [HOP-2426](https://issues.apache.org/jira/browse/HOP-2426) | Create an action to run pipeline unit tests | Actions | 2021-01-15 | 2021-01-16 |
| [HOP-2427](https://issues.apache.org/jira/browse/HOP-2427) | Hop icons are not centered when enlarging the icons with 'Icon size in workspace' | GUI | 2021-01-15 | 2021-01-16 |
| [HOP-2429](https://issues.apache.org/jira/browse/HOP-2429) | "When using ""workflow executor"" the metadata is not loaded correctly" | Transforms | 2021-01-15 | 2021-01-16 |
| [HOP-2430](https://issues.apache.org/jira/browse/HOP-2430) | Concat fields transform throws an error when running inside a container | Integration Testing, Transforms | 2021-01-16 | 2021-01-18 |
| [HOP-2431](https://issues.apache.org/jira/browse/HOP-2431) | Pipeline errors downstream with table Input using connection variables |  | 2021-01-16 | 2021-01-18 |
| [HOP-2432](https://issues.apache.org/jira/browse/HOP-2432) | The data icon is not positioned correctly | GUI | 2021-01-16 | 2021-01-17 |
| [HOP-2433](https://issues.apache.org/jira/browse/HOP-2433) | Error creating relational database connection | Metadata | 2021-01-17 | 2021-01-18 |
| [HOP-2437](https://issues.apache.org/jira/browse/HOP-2437) | JSON Input: Select Fields button doesn’t do anything | Transforms | 2021-01-18 | 2021-01-19 |
| [HOP-2438](https://issues.apache.org/jira/browse/HOP-2438) | Create action to execute AS400 command | Actions | 2021-01-18 | 2021-01-19 |
| [HOP-2439](https://issues.apache.org/jira/browse/HOP-2439) | "Rename component ""Web Hop"" to ""Hop Web"" on Jira" | Hop Web | 2021-01-19 | 2021-01-19 |
| [HOP-2440](https://issues.apache.org/jira/browse/HOP-2440) | "Add ""Metadata structure of stream"" plugin" | Transforms | 2021-01-19 | 2021-01-29 |
| [HOP-2441](https://issues.apache.org/jira/browse/HOP-2441) | runtime variable not being picked up |  | 2021-01-19 | 2021-01-19 |
| [HOP-2442](https://issues.apache.org/jira/browse/HOP-2442) | Json input still uses system file browser | Transforms | 2021-01-19 | 2021-01-27 |
| [HOP-2444](https://issues.apache.org/jira/browse/HOP-2444) | Implement global bookmarks for the file dialogs | GUI | 2021-01-20 | 2021-01-27 |
| [HOP-2445](https://issues.apache.org/jira/browse/HOP-2445) | Removed StyledText from the Hop code | GUI | 2021-01-20 | 2021-01-22 |
| [HOP-2446](https://issues.apache.org/jira/browse/HOP-2446) | Workflow and Action code cleanup |  | 2021-01-20 | 2021-01-28 |
| [HOP-2447](https://issues.apache.org/jira/browse/HOP-2447) | Reference to wrong doc file in Enhanced JSON Output |  | 2021-01-21 | 2021-01-27 |
| [HOP-2448](https://issues.apache.org/jira/browse/HOP-2448) | Enhanced JSON Output still uses system file dialog | Transforms | 2021-01-21 | 2021-01-27 |
| [HOP-2449](https://issues.apache.org/jira/browse/HOP-2449) | Add tool to clear database cache | GUI | 2021-01-22 | 2021-01-26 |
| [HOP-2452](https://issues.apache.org/jira/browse/HOP-2452) | PatternSyntaxException when importing kettle jobs and transformations on Windows | Import | 2021-01-24 | 2021-02-02 |
| [HOP-2456](https://issues.apache.org/jira/browse/HOP-2456) | Remove annotation property 'i18nPackage' |  | 2021-01-25 | 2021-02-01 |
| [HOP-2459](https://issues.apache.org/jira/browse/HOP-2459) | JSON Output still uses file system dialog |  | 2021-01-27 | 2021-01-27 |
| [HOP-2460](https://issues.apache.org/jira/browse/HOP-2460) | XML Output still uses file system browser |  | 2021-01-27 | 2021-01-27 |
| [HOP-2461](https://issues.apache.org/jira/browse/HOP-2461) | XML Input stream still uses file system browser |  | 2021-01-27 | 2021-01-27 |
| [HOP-2462](https://issues.apache.org/jira/browse/HOP-2462) | Get Data from XML still uses file system browser |  | 2021-01-27 | 2021-01-27 |
| [HOP-2464](https://issues.apache.org/jira/browse/HOP-2464) | Remove Sleak and ImageUtil from source code | GUI | 2021-01-27 | 2021-01-27 |
| [HOP-2465](https://issues.apache.org/jira/browse/HOP-2465) | Create a plugin to encrypt passwords using AES | API, Metadata | 2021-01-27 | 2021-01-29 |
| [HOP-2470](https://issues.apache.org/jira/browse/HOP-2470) | Remove unused class CertificateGenEncryptUtil | API | 2021-01-28 | 2021-01-29 |
| [HOP-2472](https://issues.apache.org/jira/browse/HOP-2472) | Some plugins/ folders are scanned twice | API | 2021-01-28 | 2021-01-29 |
| [HOP-2473](https://issues.apache.org/jira/browse/HOP-2473) | Hop plugin loading is timed but this is never used | API | 2021-01-28 | 2021-01-29 |
| [HOP-2479](https://issues.apache.org/jira/browse/HOP-2479) | Remove IPluginFolder |  | 2021-01-30 | 2021-02-01 |
| [HOP-2480](https://issues.apache.org/jira/browse/HOP-2480) | fix typos in website | Website | 2021-01-31 | 2021-02-02 |
| [HOP-2483](https://issues.apache.org/jira/browse/HOP-2483) | Translator does not work under Windows |  | 2021-01-31 | 2021-02-01 |

### In Progress (7)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-1655](https://issues.apache.org/jira/browse/HOP-1655) | In Pipeline and Workflow screens the select action dialog box cannot be moved around the screen or resized. | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-2104](https://issues.apache.org/jira/browse/HOP-2104) | "Hop needs a default ""Project"" and ""Local Run Configuration""" |  | 2020-10-04 | 2021-02-02 |
| [HOP-2166](https://issues.apache.org/jira/browse/HOP-2166) | Improve first-time usage experience | GUI | 2020-11-12 | 2021-02-01 |
| [HOP-2458](https://issues.apache.org/jira/browse/HOP-2458) | See what files are still needed in the client zip to be release compliant |  | 2021-01-26 | 2021-01-26 |
| [HOP-2469](https://issues.apache.org/jira/browse/HOP-2469) | Ensure that Hop complies with ASF encryption policy |  | 2021-01-27 | 2021-01-28 |
| [HOP-2474](https://issues.apache.org/jira/browse/HOP-2474) | Add UDJE (User Defined Java Expression) to ETL Metadata Injection step |  | 2021-01-28 | 2021-02-01 |
| [HOP-2478](https://issues.apache.org/jira/browse/HOP-2478) | Options Dialog : ConfigPlugins are no longer showing up | GUI | 2021-01-30 | 2021-02-01 |

### Open (42)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-1491](https://issues.apache.org/jira/browse/HOP-1491) | Integrate WebSpoon code | Hop Web | 2020-10-04 | 2021-01-16 |
| [HOP-1543](https://issues.apache.org/jira/browse/HOP-1543) | Move JDBC properties in BaseDatabaseMeta.class to the database plugins | Database | 2020-10-04 | 2021-01-16 |
| [HOP-1576](https://issues.apache.org/jira/browse/HOP-1576) | Wrong definition of default Locale in HopGui | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-1583](https://issues.apache.org/jira/browse/HOP-1583) | Create audit manager |  | 2020-10-04 | 2021-01-16 |
| [HOP-1673](https://issues.apache.org/jira/browse/HOP-1673) | "Replace ""Select Values"" by 3 new Transforms" | Transforms | 2020-10-04 | 2021-01-16 |
| [HOP-1800](https://issues.apache.org/jira/browse/HOP-1800) | Epic to hold all remaining transforms that have to be ported | Transforms | 2020-10-04 | 2021-01-16 |
| [HOP-1846](https://issues.apache.org/jira/browse/HOP-1846) | In the Pipeline Run Configuration show which fields are mandatory | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-1851](https://issues.apache.org/jira/browse/HOP-1851) | Environments with tilde in filename are created in unexpected place on *nix systems | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-1854](https://issues.apache.org/jira/browse/HOP-1854) | Change of database connection not applied |  | 2020-10-04 | 2021-01-16 |
| [HOP-1857](https://issues.apache.org/jira/browse/HOP-1857) | Data set: Show error if filename or path is wrong |  | 2020-10-04 | 2021-01-16 |
| [HOP-1858](https://issues.apache.org/jira/browse/HOP-1858) | When setting HOP_CONFIG_DIRECTORY, currently no config.json is created |  | 2020-10-04 | 2021-01-16 |
| [HOP-1863](https://issues.apache.org/jira/browse/HOP-1863) | Beam: Error converting Hop data to string lines | Beam | 2020-10-04 | 2021-01-16 |
| [HOP-1870](https://issues.apache.org/jira/browse/HOP-1870) | "Exception in thread ""Thread-52"" java.lang.RuntimeException: Error starting the Beam pipeline" | Beam | 2020-10-04 | 2021-01-16 |
| [HOP-1882](https://issues.apache.org/jira/browse/HOP-1882) | Adding run config without name causes exception | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-1888](https://issues.apache.org/jira/browse/HOP-1888) | Rename package org.apache.hop.pipeline.transform.errorhandling |  | 2020-10-04 | 2021-01-16 |
| [HOP-1903](https://issues.apache.org/jira/browse/HOP-1903) | Keyboard shortcut for Edit Metastore Element | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-1904](https://issues.apache.org/jira/browse/HOP-1904) | Migrate Generic Connection to Plugin | Database | 2020-10-04 | 2021-01-16 |
| [HOP-1933](https://issues.apache.org/jira/browse/HOP-1933) | More consistency to hop-conf.sh options/flags | CLI | 2020-10-04 | 2021-01-16 |
| [HOP-1940](https://issues.apache.org/jira/browse/HOP-1940) | Document the new VFS plugins |  | 2020-10-04 | 2021-01-16 |
| [HOP-1970](https://issues.apache.org/jira/browse/HOP-1970) | Text unreadable in Options dialog | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-2016](https://issues.apache.org/jira/browse/HOP-2016) | Variable from environment config only work after restart | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-2027](https://issues.apache.org/jira/browse/HOP-2027) | Fix button positions in dialogs |  | 2020-10-04 | 2021-01-16 |
| [HOP-2037](https://issues.apache.org/jira/browse/HOP-2037) | Remove options from menu when not available for transform | GUI | 2020-10-04 | 2021-01-16 |
| [HOP-2059](https://issues.apache.org/jira/browse/HOP-2059) | when selecting a folder and not a file an error is thrown |  | 2020-10-04 | 2021-01-16 |
| [HOP-2064](https://issues.apache.org/jira/browse/HOP-2064) | As a data engineer I would like to perform data validation | Transforms | 2020-10-04 | 2021-01-27 |
| [HOP-2065](https://issues.apache.org/jira/browse/HOP-2065) | Postgres bulk loader leaks connections | Transforms | 2020-10-04 | 2021-01-16 |
| [HOP-2068](https://issues.apache.org/jira/browse/HOP-2068) | implement metadata injection for all transforms that used the deprecated step api | Transforms | 2020-10-04 | 2021-01-16 |
| [HOP-2074](https://issues.apache.org/jira/browse/HOP-2074) | Bug seen during find |  | 2020-10-04 | 2021-01-16 |
| [HOP-2076](https://issues.apache.org/jira/browse/HOP-2076) | port sample rows step to transform | Transforms | 2020-10-04 | 2021-01-16 |
| [HOP-2142](https://issues.apache.org/jira/browse/HOP-2142) | Replace javax/mail/Address dependency | Transforms | 2020-11-05 | 2021-01-16 |
| [HOP-2434](https://issues.apache.org/jira/browse/HOP-2434) | When reloading project variables they are not refreshed | Metadata | 2021-01-17 | 2021-01-23 |
| [HOP-2435](https://issues.apache.org/jira/browse/HOP-2435) | Projects: open objects are not remembered in the metadata perspective | Metadata, Projects | 2021-01-17 | 2021-01-20 |
| [HOP-2450](https://issues.apache.org/jira/browse/HOP-2450) | HopWeb: server crash during preview | Hop Web | 2021-01-22 | 2021-01-22 |
| [HOP-2451](https://issues.apache.org/jira/browse/HOP-2451) | Hop Web: not possible to see data of a transform | Hop Web | 2021-01-22 | 2021-01-22 |
| [HOP-2455](https://issues.apache.org/jira/browse/HOP-2455) | attach POM to the correct phase |  | 2021-01-25 | 2021-01-25 |
| [HOP-2463](https://issues.apache.org/jira/browse/HOP-2463) | Provide some samples for Enhanced JSON Output |  | 2021-01-27 | 2021-01-27 |
| [HOP-2468](https://issues.apache.org/jira/browse/HOP-2468) | NPE in file open dialog | GUI | 2021-01-27 | 2021-01-27 |
| [HOP-2475](https://issues.apache.org/jira/browse/HOP-2475) | Option to build minimal Hop package |  | 2021-01-29 | 2021-01-29 |
| [HOP-2476](https://issues.apache.org/jira/browse/HOP-2476) | Support for Objects and Array data types |  | 2021-01-29 | 2021-01-29 |
| [HOP-2486](https://issues.apache.org/jira/browse/HOP-2486) | "Picking ""Create hop"" eventually brings up action picker again" | GUI | 2021-02-02 | 2021-02-02 |
| [HOP-2487](https://issues.apache.org/jira/browse/HOP-2487) | Unit tests UI issues |  | 2021-02-02 | 2021-02-02 |
| [HOP-2488](https://issues.apache.org/jira/browse/HOP-2488) | Port MonetDB Bulk Loader to Hop |  | 2021-02-02 | 2021-02-02 |

### Closed (6)

| Issue | Summary | Components | Created | Updated |
| --- | --- | --- | --- | --- |
| [HOP-1862](https://issues.apache.org/jira/browse/HOP-1862) | JSON Output: ERROR: Output fieldname that will contain value is empty! | Transforms | 2020-10-04 | 2021-01-16 |
| [HOP-2091](https://issues.apache.org/jira/browse/HOP-2091) | port formula step to transform plugin | Transforms | 2020-10-04 | 2021-02-02 |
| [HOP-2386](https://issues.apache.org/jira/browse/HOP-2386) | Add RAP fragment to the master branch |  | 2021-01-02 | 2021-01-03 |
| [HOP-2389](https://issues.apache.org/jira/browse/HOP-2389) | Remove JFace from hop-assemblies-libs and add it to hop-client | GUI, Hop Web | 2021-01-03 | 2021-01-16 |
| [HOP-2396](https://issues.apache.org/jira/browse/HOP-2396) | Remove Servlet API jars | Hop Server | 2021-01-04 | 2021-01-25 |
| [HOP-2466](https://issues.apache.org/jira/browse/HOP-2466) | Detect actions / transforms deprecated by java annotation @Deprecated |  | 2021-01-27 | 2021-01-28 |

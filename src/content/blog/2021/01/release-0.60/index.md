---
title: Apache Hop (Incubating) 0.60 released
publishDate: "2021-01-26T10:01:56+02:00"
authors: bamaer
categories: "Release, Apache Hop"
preview: Apache Hop (Incubating) - 0.60 Released
---
## Apache Hop (Incubating) - 0.60 Release

Less than three months since Project Hop joined the ASF Incubator (late October 2020), we’re happy to announce Apache Hop 0.60, our first release as an incubating project at the Apache Software Foundation.

## Apache Hop (Incubating) 0.60 - Source only

As stated earlier, one of the main goal of the incubator program is to give projects the time to adopt "The Apache Way". As such, it took us a bit of time to get the entire process straightened out. We went through 2 0.50 release candidates (RC1 and RC2) before this 0.60 release got accepted.
Since the main purpose of this release was to work through the legal formalities that come with an ASF release, 0.60 is a code only release. We already started working on 0.70, which will be a complete release, including binaries. Once 0.70 has been released, moving towards a 1.0 release should be smooth sailing.

Check our [downloads page](https://hop.apache.org/download/) for the 0.60 source code ([build instructions](https://github.com/apache/hop/blob/master/README.md)) or a recent nightly build.

## Apache Hop (Incubating) - 0.60 Release Highlight

Our last pre-ASF pre-release was 0.30, back in July 2020. It goes without saying that a lot has happened since then. Check our monthly roundups for [August, target="_blank"](https://hop.apache.org/blog/2020/08/roundup-2020-08/), [September and October](https://hop.apache.org/blog/2020/11/roundup-2020-11/), [November](https://hop.apache.org/blog/2020/12/roundup-2020-12/) and [December](https://hop.apache.org/blog/2021/01/roundup-2021-01/) to catch up on the details.

The following sections cover the highlights of the 0.60 release:

## UI changes

A lot of effort was spent on Hop Gui. Here’s a chronological overview of the most important changes:

### Categories in pop-up dialogs

With the increasing amount of metadata items, plugins etc, we added category support to the various popup dialogs. At the top of the dialog, Hop users can expand or collapse all categories and can enable or disable the categorization of the available items.

[![Hop Gui Categories](/img/Roundup-2020-11/hop-gui-categories.png)](/img/Roundup-2020-11/hop-gui-categories.png)

### Hop Gui Look and Feel

The Hop Gui look and feel received updates, with a variety of new icons, hop colors and more to significantly improve the user experience.

[![Hop Gui Look and Feel](/img/Release-0.60/hop-gui-look-and-feel.png)](/img/Release-0.60/hop-gui-look-and-feel.png)

### Metadata Perspective

A lot of metadata operations (relational, database connections, runtime configurations etc) had their own pop-up configuration dialogs. These various pop-ups were grouped in one central metadata configuration perpective.

[![Metadata Perspective](/img/Roundup-2021-01/hop-2235-metadata-perspective.png)](/img/Roundup-2021-01/hop-2235-metadata-perspective.png)

### Export to SVG

Although not spectacular in itself, this little menu item gives you a full svg (scalable) export of your workflow or pipeline graph. For Hop, this is a first step towards self documenting workflows and pipelines.

[![Export To SVG](/img/Roundup-2021-01/hop-2316-export-to-svg.png)](/img/Roundup-2021-01/hop-2316-export-to-svg.png)

## New plugins

A number of new plugins were added to Hop or were ported from Kettle/PDI:

* Actions:
  * [Repeat](http://hop.apache.org/manual/latest/plugins/actions/repeat.html) and [End Repeat](http://hop.apache.org/manual/latest/plugins/actions/repeat-end.html)
* Transforms:
  * [CPython](https://github.com/m-a-hall/hop-cpython) (external)
  * [Fake Data](https://hop.apache.org/manual/latest/plugins/transforms/fake.html)
  * [MongoDB Input](http://hop.apache.org/manual/latest/plugins/transforms/mongodbinput.html) and [Output](http://hop.apache.org/manual/latest/plugins/transforms/mongodboutput.html)
  * [Stream Schema Merge](https://hop.apache.org/manual/latest/plugins/transforms/streamschemamerge.html)
  * [Token Replacement](https://hop.apache.org/manual/latest/plugins/transforms/tokenreplacement.html)
  * [User Defined Java Class](https://hop.apache.org/manual/latest/plugins/transforms/userdefinedjavaclass.html)
  * Salesforce:
    * Salesforce Delete
    * Salesforce Input
    * Salesforce Insert
    * Salesforce Update
    * Salesforce Upsert

[![Salesforce Transforms](/img/Roundup-2020-12/transforms.png)](/img/Roundup-2020-12/transforms.png)

## Documentation

With the agressive changes and new development that happened over the last year, documentation was not at the top of our priority list in the first half of 2020. We caught up, though. Although the Hop documentation is not complete yet, we’ve come a long way:

### User Documentation

* [Hop Gui](http://hop.apache.org/manual/latest/hop-gui/index.html) is now pretty well documented. All plugins and almost all dialogs have documentation, we’re still working on higher level documentation.
* [Hop vs Kettle/PDI](http://hop.apache.org/manual/latest/hop-vs-kettle/index.html) describes the similarities and core differences between Hop and its predecessor

### Developer Documentation

* [Developer Getting Started](https://hop.apache.org/dev-manual/latest/getting-started.htmlp)
* [Development Environment Setup](https://hop.apache.org/dev-manual/latest/setup-dev-environment.html)
* [Porting Kettle Plugins](https://hop.apache.org/dev-manual/latest/porting-kettle-plugins.html)
* [Metadata Plugins Development](https://hop.apache.org/dev-manual/latest/metadata-plugins.html)
* [Plugin Development](https://hop.apache.org/dev-manual/latest/plugin-development.html)
* [Hop Web Developer](https://hop.apache.org/dev-manual/latest/webhop/developer-guide.html)
* [Integration Tests](https://hop.apache.org/dev-manual/latest/integration-testing.html)
* [Hop SDK](https://hop.apache.org/dev-manual/latest/sdk/hop-sdk.html)
* [Creating and Checking a Release](https://hop.apache.org/dev-manual/latest/apache-release/index.html)

## Integration tests

Hop now has an integration testing framework that is included in our daily [build](https://ci-builds.apache.org/job/Hop/job/Hop-integration-tests/). Since the introduction (mid-December) of this testing framework, the Hop developers have found and fixed a number of bugs that may have been in the code for over a decade!

[![Integration Testing](https://hop.apache.org/dev-manual/latest/integration-tests-002.png)](https://hop.apache.org/dev-manual/latest/integration-tests-002.png)

## Metadata Injection

Hop now supports metadata injection, which allows pipelines to run with metadata that is supplied at runtime.

[![Metadata Injection](/img/Roundup-2020-08/metadata-injection.png)](/img/Roundup-2020-08/metadata-injection.png)

## Docker, Kubernetes

The separate Dockerfile and configuration were moved to the main Hop [repository](https://github.com/apache/hop/tree/master/docker).

A Hop Docker image is now one `docker pull` away through [Docker Hub](https://hub.docker.com/r/apache/hop/).

Work on Kubernetes continues in the separate [repository](https://github.com/project-hop/hop-docker).

## Community

Last but definitely not least: our community has grown significantly over the last months. As stated before, with community, Hop would be nothing but a coding club.
We’re happy to see the Hop community and number of committers and contributors grow steadily.

The number of people actively involved in Apache Hop (Incubating) are:

* 11 PPMC members (PPMC: Podling Project Management Committee)
* 17 committers
* 24 people on the dev mailing list [subscribe](mailto:dev-subscribe@hop.apache.org)

Following and interacting with Apache Hop (Incubating) on chat and social media:

* chat: 131 registered members [join](https://chat.project-hop.org)
* LinkedIn: 347 followers [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 275 followers [follow](https://twitter.com/ApacheHop)
* YouTube: 59 subscribers [subscribe](https://www.youtube.com/channel/UCGlcYslwe03Y2zbZ1W6DAGA)

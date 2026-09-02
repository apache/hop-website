---
title: "Roundup September, October 2020"
publishDate: "2020-11-09T10:01:56+02:00"
authors: bamaer
categories: "Roundup, Project Hop"
preview: "Round September, October 2020"
---
## Roundup September and October 2020

We’ve had another couple of busy months at Apache Hop. A lot of these changes have been happening in the background, but are very exciting nevertheless.
As we’re getting close to finalizing the background work, we’ll soon have more time to work on Hop platform features again.

Here’s what happened over the last two months.

## Hop joins the Apache Software Foundation, becomes Apache Hop (Incubating)

![Apache Software Foundation](/img/asf_logo_wide.png)

Our [proposal](https://cwiki.apache.org/confluence/display/INCUBATOR/HopProposal) to join the Apache Software Foundation was [accepted](https://lists.apache.org/thread.html/r63be0e08fe0408c1253c691888bc11d28813f419607a7696f8850023%40%3Cgeneral.incubator.apache.org%3E) on September, 24th.

Migrating the code, documentation, website, JIRA and builds to Apache Infrastructure kept us busy for a while, but we’re almost there.

We already started working towards our first Apache Hop 0.50 release.

With the start of the incubation process, the project will now be referred to as "Apache Hop (Incubating)". All references to "Project Hop" are obsolete.

Below are a list of useful new project links for reference. Most existing links should forward to the new ones, but please update your bookmarks:

* project url: [hop.apache.org](https://hop.apache.org)
* [chat](https://chat.project-hop.org)
* [JIRA](https://issues.apache.org/jira/projects/HOP/issues)
* [Jenkins](https://ci-builds.apache.org/job/Hop/)

All formal communication will now happen through the ASF mailing lists:

| List Name | Subscribe | Archive | Comment |
| --- | --- | --- | --- |
| Hop User List | [subscribe](mailto:users-subscribe@hop.apache.org) | [archives](http://mail-archives.apache.org/mod_mbox/hop-users/) | Use this list for your Hop questions. |
| Hop Developer List | [subscribe](mailto:dev-subscribe@hop.apache.org) | [archives](http://mail-archives.apache.org/mod_mbox/hop-dev/) | Used by Hop contributors to discuss development of Hop. |
| Hop Commits List | [subscribe](mailto:commits-subscribe@hop.apache.org) | [archives](http://mail-archives.apache.org/mod_mbox/hop-commits/) | Notifications on changes to the Hop code |
| Hop Issues List | [subscribe](mailto:issues-subscribe@hop.apache.org) | [archives](http://mail-archives.apache.org/mod_mbox/hop-issues/) | Notifications of JIRA issues |

Read more about why we’re so excited to join the [ASF Incubation program](https://incubator.apache.org) and what this means for Hop [here](../../10/hop-joins-the-asf/).

## UI Updates

With the increasing amount of metadata items, plugins etc, we added category support to the various popup dialogs.
At the top of the dialog, Hop users can expand or collapse all categories and can enable or disable the categorization of the available items.

![Hop Gui Categories](/img/Roundup-2020-11/hop-gui-categories.png)

Metadata editing for database connections, runtime configurations, the metadata dialog etc became more intuitive with a new UI tweak:

![Hop Gui Metadata Edit](/img/Roundup-2020-11/hop-gui-edit.png)

Many thanks to Nicolas Adment for this contribution!

## Documentation

Hop documentation is a work in progress. We’ve added or updated documentation for [projects and environments](https://hop.apache.org/manual/latest/hop-gui/environments/environments.html), [metadata injection](https://hop.apache.org/manual/latest/plugins/transforms/metainject.html), and lots of other small changes.

As always, ping us on [mattermost](https://chat.project-hop.org) to discuss documentation, and create [tickets](https://issues.apache.org/jira/projects/HOP/issues) if you find any missing or incorrect information in the docs. Documentation is code, we take bugs in the documentation just as serious as bugs in the code.

## Various

Hop now works with Beam 2.24.

Two new transforms have been added:

* [Fake Data](https://hop.apache.org/manual/latest/plugins/transforms/fake.html)
* [Stream Schema Merge](https://hop.apache.org/manual/latest/plugins/transforms/streamschemamerge.html)

## Community

The Hop community continues to grow:

* chat: 104 registered members [join](https://chat.project-hop.org)
* LinkedIn: 263 followers [follow](https://www.linkedin.com/company/hop-project)
* Twitter: 219 followers [follow](https://twitter.com/ApacheHop)
* Facebook: 19 followers [like](https://www.facebook.com/apachehop)

The following people have been added as committers:

* Nicolas Adment (various contributions)
* Hiromu Hota (WebHop)
* Brandon Jackson (various contributions)
* Mahendran Mookkiah (various code fixes and cleanup)

Check out the [complete list](/community/team/) of committers and contributors.

Without community contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) to find out more.

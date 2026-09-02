---
title: Roundup May 2020
publishDate: "2020-06-02T12:01:56+02:00"
authors: bamaer
categories: "Roundup, Project Hop"
preview: Round May 2020
---
## Roundup May 2020

Another month has passed, so here we are with a new roundup!

In early May, we released version 0.21. Check the release announcement [here](http://www.project-hop.org/news/release-preview-0-21/)

We would like to thank everyone who tested 0.21 and created feature requests and bug tickets. Fixing the bugs and implementing the feature requests will keep us busy for another couple of weeks.

Apart from the topics discussed below, we have continued to walk the path of major code cleanup and refactoring. We don’t want to bore you with the technical stuff, those interested in the deep details can join the discussions in our [#dev channel](https://chat.project-hop.org).

Here’s what happened in May!

## Apache Beam Support

We now have integrated support for [Apache Beam](https://beam.apache.org/). Beam is an advanced unified programming model that lets you implement batch and streaming data processing jobs that run on any execution engine.

The Beam integration comes with a number of additional transforms:

* ***BigQuery input and output***: read from and write to Google BigQuery tables
* ***GCP PubSub subscribe and publish***: read from and write to Google Cloud PubSub
* ***Kafka Consume/Produce***: read from and write to Kafka streams
* ***Beam Input/Output***: define where Beam should read files from or write files to
* ***Beam Timestamp***: add timestamps to a bounded data source
* ***Beam Window***: create a Beam window

[![Beam Transforms ](/img/Roundup-2020-05/beam-transforms.png)](/img/Roundup-2020-05/beam-transforms.png)

Beam adds 4 additional pipeline run configurations:

* ***Beam DataFlow pipeline engine***: run pipelines on Google DataFlow
* ***Beam Direct pipeline engine***: a local pipeline engine provided by the Apache Beam community as a way of testing pipelines
* ***Beam Spark pipeline engine***: run pipelines on Apache Spark
* ***Beam Flink pipeline engine***: run pipelines on Apache Flink

The support for these 4 additional engines brings us closer to the "design once, run anywhere" goal we share with Apache Beam. With Hop’s native local and remote pipeline run configurations, we now have 6 supported engines to run your pipelines on.

[![Beam Run Configurations ](/img/Roundup-2020-05/beam-runconfigurations.png)](/img/Roundup-2020-05/beam-runconfigurations.png)

## Hop Config

We mentioned the addition of Hop Environments in the [April roundup](/blog/2020/04/roundup-2020-04/) and the [0.21 release announcement](/blog/2020/05/preview-release-0.21/).

A new addition to the Hop Platform is Hop Config; a plugin driven tool to configure various aspects of your Hop environments and overall installation.

## Plugins

With all of the other work that needed to be done, plugin porting continued but at a slower pace than before.

Current status:

* Database plugins: all done
* Workflow actions: all done
* Transform actions: 100 plugins done (many plugins contain multiple transforms), 37 to go

## Community Input

This is the first time we have a "Community Input" section in these monthly overview.

The projects we discuss below are at different maturity stages, but are a clear indication of growth and activity we’re seeing in the community.
Thanks guys, keep up the good work! We’ll continue to work with the community to move these projects forward and keep you updated on progress.

Although not directly related to a project, we’d like to do a shout-out to [Nicolas Adment](https://github.com/nadment). Nicolas has been all over the place in everything Hop-related since early this year. A big thank you, Nicolas!

### WebHop

We started working to bring a web ui to Hop.
There still is some work to do, but the WebHop container works, starts in a couple of seconds, and the project is getting usable.

A big thank you to [Hiromu Hota](https://twitter.com/HiromuHota) for working with Matt on this!

[![WebHop](/img/Roundup-2020-05/webhop.png)](/img/Roundup-2020-05/webhop.png)

Check this project at [GitHub](https://github.com/HiromuHota/hop/tree/web)

### Containers

[Diethard Steiner](https://twitter.com/diethardsteiner), a long time Kettle and now Hop community member and famous blogger wrotes posts about running Hop on [Docker](https://diethardsteiner.github.io/hop/2020/04/27/Hop-on-Docker.html) and [Kubernetes](https://diethardsteiner.github.io/hop/2020/04/29/Hop-on-Kubernetes.html).

The goal of the hop-docker project is to allow Hop to run in both short and long-lived containers.

Diethard and other community members ([Hans](https://twitter.com/hans_va), [Rogier](https://twitter.com/blijblijblij), [Uwe](https://twitter.com/uweeegeee)) worked together and contributed their efforts to Project Hop.

Check this project out:

* GitHub repository: https://github.com/project-hop/hop-docker
* Docker Hub: https://hub.docker.com/r/diethardsteiner/project-hop

### Hop UIT - Ultimate Migration Tool

[Uwe Geercken](https://twitter.com/uweeegeee) picked up the task to build a migration tool to import Kettle/PDI jobs and transformations to Hop workflows and pipelines.

Uwe wrote a [blog post](https://datamelt.weebly.com/blog/hop-uit-hop-ultimate-import-tool-part-1) about hop-uit.

We’ll work with Uwe to make hop-uit fully functional so you can start migrating your Kettle/PDI projects to Hop soon. In the meantime, don’t hesitate to give hop-uit a try and file and bugs you find or feature requests that you have in [JIRA](https://jira.project-hop.org)

Check the project out on [GitHub](https://github.com/uwegeercken/hop-uit)

## Documentation

All actions and transforms, even the ones that haven’t been ported to Hop yet, are now documented.

Since we’ll start to add a lot of documentation in the next weeks, we integrated a search engine in the Hop website. Although we’ll work on an easy to use navigation and overall documentation structure, sometimes search is just the easiest way of finding what you’re looking for.

If there is anyone willing to help write documentation [contact us](https://chat.project-hop.org/) and we’ll be happy to get you started.

## Future

While we’re preparing for a 0.30 release, we’ll continue our code cleanup, bug hunting and documentation efforts!

Next up is a configuration system to change and manage options, porting those final transforms and integrate VFS in HOP.

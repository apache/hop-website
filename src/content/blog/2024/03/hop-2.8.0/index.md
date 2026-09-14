---
title: "Apache Hop 2.8 is available!!"
description: "The latest Apache Hop release 2.8.0 is now available. Let's walk through the most important new features in this release."
publishDate: "2024-03-13T08:44:56+02:00"
authors: bamaer
categories: "2.8, Release, Apache Hop"
preview: Apache Hop 2.8 Released
---
After more than three months of work on 79 tickets, the Apache Hop community is pleased to announce the general availability of Apache Hop 2.8.0.

A huge thank you to everyone who made this possible.

![ width="45](/img/Release-2.8/hop-28.svg)


or [***download Hop 2.8.0 ***](https://hop.apache.org/download/) right away.

Apache Hop 2.8.0 comes with a lot of bug fixes, code hardening and a couple of new features. 

## Two new AWS transforms 

### AWS SNS Notify

The [AWS SNS Notify](https://hop.apache.org/manual/next/pipeline/transforms/aws-sns-notify.html) transform enables you to send notifications from an Apache Hop pipeline via [Amazon Web Services Simple Notification Service](https://aws.amazon.com/sns/) to subscribed users.

![AWS SNS Notify transform](/img/Release-2.8/aws-sns-notify-transform.png)

### AWS SQS Reader 

The [AWS SQS Reader](https://hop.apache.org/manual/next/pipeline/transforms/aws-sqs-reader.html) transform enables you to receive messages from [Amazon Web Services Simple Queue Service](https://aws.amazon.com/sns/) within an Apache Hop pipeline.

![AWS SQS Reader transform](/img/Release-2.8/aws-sqs-reader-transform.png)

## Various 

* a nasty bug ([#3056](https://github.com/apache/hop/issues/3056)) throwing a NullPointerException in (very exceptional) edge cases when a transform receives more than one input flow was resolved. 
* action duration is now recorded correctly in workflow log ([#3606](https://github.com/apache/hop/issues/3606))
* the Execution Information perspective now loads significantly faster for locations with a large number of executions ([#2845](https://github.com/apache/hop/issues/2845))
* lots of new and updated translations
* lots of new and updated documentation

## Community 

The Hop community continues to grow!

[Dan Vandermolen](https://github.com/Mattang-Dan) was added as a new committer to the Apache Hop project. A warm welcome and thanks for all the new and update documentation, Dan! 

The overview below shows the community growth compared to the 2.7.0 release in December:

* chat: 729 registered members (up from 670) [join](https://chat.project-hop.org)
* LinkedIn: 1.682 followers (up from 1.509) [follow](https://www.linkedin.com/company/hop-project)
* Twitter/X: 915 followers (up from 904) [follow](https://twitter.com/ApacheHop)
* YouTube: 1.020 subscribers (up from 939) [subscribe](https://www.youtube.com/ApacheHop)

![Apache Hop Community Growth](/img/Release-2.8/hop-community-growth.png)

Without community interaction and contribution, Hop is just a coding club! Please feel free to join, participate in the discussion, test, file bug tickets on the software or documentation, ... Contributing is a lot more than writing code.

Check out our [contribution guides](/community/contributing/) and [Code of Conduct](http://hop.apache.org/community/ethos/) to find out more.

## GitHub Issues 

This release contains work on 79 tickets:

Check out the full list of issues in Apache Hop 2.8.0 in our [Github Issues](https://github.com/apache/hop/issues) 
and the [Release notes](https://github.com/apache/hop/releases/tag/2.8.0-rc1).

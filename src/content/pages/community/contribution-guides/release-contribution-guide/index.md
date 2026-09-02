---
title: Release Contribution Guide
---
Apache releases are created through a formal process. The entire process is [documented](https://www.apache.org/legal/release-policy.html).

Other useful information: [ASF Release Management](https://incubator.apache.org/guides/releasemanagement.html).

Check below for the TL;DR version. As always, we’re eager to [hear](https://github.com/apache/hop/discussions) your feedback!

## What is an Apache Release?

Apache Releases are a legal handover of a software project. With each release, a project hands over the ownership of all items in the release to the Apache Software Foundation.

Although releases contain source code, documentation etc, the implemented functionality and fixed bugs are of lesser concern in the release process.

## What is the release process?

The steps to create an Apache release are:

1. the community decides to create a release
2. all code is verified to comply with the software licensing requirements. Checks are performed to make sure there are no license or copyright violations, no incompatible dependencies etc.
3. the release manager prepares and signs the proposed release materials
4. a [PMC](/community/team/) member sends an email to the mailing list to announce the release candidate and requests the voting to start
5. if the vote passes, the release candidate is accepted and becomes a release

## What is the release review process, how can I help?

### What is the release review process

A release, or any deliverables for a release should contain or comply to:

* source package that can be built and tested to validate the release
* release signing: packages must be cryptographically signed. The signature hash should be included in the [VOTE] mail
* a LICENSE file, contains all (APL2.0 compatible licenses) used
* a NOTICE file, contains at least all [copyright notices](https://www.apache.org/legal/src-headers.html#header-existingcopyright), [required third-party notices](http://apache.org/legal/resolved.html#required-third-party-notices), [MOD](https://infra.apache.org/licensing-howto.html#mod-notice) (Modifications to NOTICE)
* all source files submitted to the ASF need to contain the appropriate [ASF Header](http://www.apache.org/legal/src-headers.html#headers).

### How can I help

A lot of the actions listed above will be taken care of by the release manager.

What you can do to review a release:

* verify the deliverables as listed above
* follow the build instructions (e.g. in the README file) and double check all steps to (build and) run the release are accurate
* if you contributed to Hop or any of the plugins for a release, double check the dependency licenses for compatibility, including dependencies of dependencies. We run automated checks through [Apache RAT](https://creadur.apache.org/rat/) as part of the build, but that may not be infallible.

> [!TIP]
> Vote! After you’ve reviewed a release candidate, submit your vote to the mailing list. Specify the review tasks you performed and why you vote to accept or reject a release candidate.
>
> Reviewing and voting for releases (or release candidates) is an important and valuable contribution, every vote matters!

Check the detailed [checking a release](/dev-manual/latest/apache-release/checking-a-release.html) guide.

## What is the voting process?

### Procedure

Releases, like all major decisions at the ASF, are accepted or rejected through a voting process.

When a request to vote for a release is submitted to the dev email list through a [VOTE] mail, the voting process starts.

In the voting process, the entire community is encouraged to download, test and review the release candidate.

The voting window lasts at least 72 hours and is closed with a [VOTE RESULTS] email to the mailing list.

### Votes

Votes can be cast after review. A vote can be positive (+1) or negative (-1). A release needs a total of 3 positive votes to pass.

The total of all votes is counted: a release that receive 7 +1 votes and 2 -1 votes will have a total of 5 positive votes and will pass.

In addition to +1 or -1 votes, the voting process allows +0 or -0 or fractional (e.g. +0.8, -0.2).

### Binding vs non-binding

In short: PMC member votes are binding, community members votes are non-binding.

Community votes shouldn’t be considered _only_ advisory, they are important and encouraged, as they can provide valuable input on the quality of a release.

Check the detailed [voting process](https://www.apache.org/foundation/voting.html).

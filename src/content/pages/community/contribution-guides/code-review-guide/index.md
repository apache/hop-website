---
title: Code Review Guide
---
This guide is for all committers and contributors that want to help with reviewing code contributions. Thank you for your effort - good reviews are one the most important and crucial parts of an open source project. This guide should help the community to make reviews such that:

* Contributors have a good contribution experience.
* Our reviews are structured and check all important aspects of a contribution.
* We make sure to keep a high code quality in Hop.
* We avoid situations where contributors and reviewers spend a lot of time refining a contribution that gets rejected later.

## Review Checklist

Every review needs to check the following six aspects. **We encourage to check these aspects in order, to avoid spending time on detailed code quality reviews when formal requirements are not met or there is no consensus in the community to accept the change.**

:::checklist
1. [Is the Contribution Well-Described](#well-described)
2. [Is There Consensus that the Change or Feature Should Go into Hop?](#consensus)
3. [Does the Contribution Need Attention from some Specific Committers and Is There Time Commitment from These Committers?](#need-attention)
4. [Does the Implementation Follow the Agreed Upon Overall Approach/Architecture?](#follow-approach)
5. [Is the Overall Code Quality Good, Meeting Standard we Want to Maintain in Hop?](#good-quality)
6. [Is the Documentation updated?](#documentation)
:::

<a id="well-described"></a>

## Is the Contribution Well-Described

Check whether the contribution is sufficiently well-described to support a good review. Trivial changes and fixes do not need a long description. If the implementation is exactly according to a prior discussion on GitHub or the development mailing list, only a short reference to that discussion is needed. If the implementation is different from the agreed approach in the consensus discussion, a detailed description of the implementation is required for any further review of the contribution.

Any pull request that changes functionality or behavior needs to describe the big picture of these changes, so that reviews know what to look for (and don’t have to dig through the code to hopefully understand what the change does).

**A contribution is well-described if the following questions 2, 3, and 4 can be answered without looking at the code.**

<a id="consensus"></a>

## Is There Consensus that the Change or Feature Should Go into Hop?

This question can be directly answered from the linked GitHub issue. For pull requests that are created without prior consensus, a discussion in GitHub to seek consensus will be needed.

For [hotfix] pull requests, consensus needs to be checked in the pull request.

<a id="need-attention"></a>

## Does the Contribution Need Attention from some Specific Committers and Is There Time Commitment from These Committers?

Some changes require attention and approval from specific committers. For example, changes in parts that are either very performance sensitive, or have a critical impact on distributed coordination and fault tolerance need input by a committer that is deeply familiar with the component.

As a rule of thumb, special attention is required when the Pull Request description answers one of the questions in the template section “Does this pull request potentially affect one of the following parts” with ‘yes’.

This question can be answered with

* Does not need specific attention
* Needs specific attention for X (X can be for example checkpointing, jobmanager, etc.).
* Has specific attention for X by @commiterA, @contributor B

**If the pull request needs specific attention, one of the tagged committers/contributors should give the final approval.**

<a id="follow-approach"></a>

## Does the Implementation Follow the Agreed Upon Overall Approach/Architecture?

In this step, we check if a contribution follows the agreed upon approach from the previous discussion in GitHub or the mailing lists.

This question should be answerable from the Pull Request description (or the linked GitHub Issue) as much as possible.

We recommend to check this before diving into the details of commenting on individual parts of the change.

<a id="good-quality"></a>

## Is the Overall Code Quality Good, Meeting Standard we Want to Maintain in Hop?

This is the detailed code review of the actual changes, covering:

* Are the changes doing what is described in the ticket or design document?
* Does the code follow the right software engineering practices? Is the code correct, robust, maintainable, testable?
* Are the changes performance aware, when changing a performance sensitive part?
* Are the changes sufficiently covered by tests?
* Are the tests executing fast, i.e., are heavy-weight integration tests only used when necessary?
* Does the code format follow Hop’s checkstyle pattern?
* Does the code avoid to introduce additional compiler warnings?
* If dependencies have been changed, were the NOTICE files updated?
* Code guidelines can be found in the Hop Code Style and Quality Guide.

<a id="documentation"></a>

## Is the Documentation updated?

If the pull request introduces a new feature, the feature should be documented.

See more about how to [contribute documentation](../documentation-contribution-guide/).

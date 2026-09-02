---
title: Code Contribution Guide
---
Apache Hop is maintained, improved, and extended by code contributions of volunteers. We welcome contributions to Hop, but due to the size of the project and to preserve the high quality of the code base, we follow a contribution process that is explained in this document.

> [!IMPORTANT]
> Please read this document carefully before starting to work on a code contribution. Follow the process and guidelines explained below. Contributing to Apache Hop does not start with opening a pull request. We expect contributors to reach out to us first to discuss the overall approach together. Without consensus with the Hop committers, contributions might require substantial rework or will not be reviewed.

**Please feel free to ask questions at any time**. Either send a message to the [dev mailing list](../../mailing-list/), start a [GitHub Discussion](https://github.com/apache/hop/discussions), or comment on the GitHub issue you are working on.

<a id="code-contribution-process"></a>

The contribution process has four steps, and each one gates the next.

:::steps
1. **[Discuss](#create-github-issue)**

   Create a [GitHub Issue](https://github.com/apache/hop/issues) or mailing list discussion and reach consensus

   Agree on importance, relevance, scope of the ticket, discuss the implementation approach and find a committer willing to review and merge the change.

   **Comment `.take-issue` on the issue to assign it to yourself.**

2. **[Implement](#implement-change)**

   Implement the change according to the Code Style and Quality Guide and the approach agreed upon in the ticket.

   **Only start working on the implementation if there is consensus on the approach (e.g. you are assigned to the ticket)**

3. **[Review](#open-pull-request)**

   Open a pull request and work with the reviewer.

   **Pull requests belonging to unassigned GitHub Issues or not authored by assignee will not be reviewed or merged by the community.**

4. **[Merge](#merge-change)**

   A committer of Hop checks if the contribution fulfills the requirements and merges the code to the codebase.
:::

> [!NOTE]
> Trivial hot fixes such as typos or syntax errors can be opened as a \[hotfix] pull request, without a ticket.

<a id="create-github-issue"></a>

## Create GitHub Issue and Reach Consensus

The first step for making a contribution to Apache Hop is to reach consensus with the Hop community. This means agreeing on the scope and implementation approach of a change.

In most cases, the discussion should happen in Hop’s bug tracker: [GitHub](https://github.com/apache/hop/issues).

The following types of changes require a discussion in the dev mailing list or GitHub Discussions:

* big changes (major new feature; big refactorings, involving multiple components)
* potentially controversial changes or issues
* changes with very unclear approaches or multiple equal approaches

Do not open a GitHub Issues for these types of changes before the discussion has come to a conclusion. GitHub Issues based on a dev@ discussion should summarize the outcome of that discussion.

**Requirements for a ticket to get consensus:**

* Formal requirements
  * The _Title_ describes the problem concisely.
  * The _Description_ gives all the details needed to understand the problem or feature request.
  * The _Component_ field is set: Many committers and contributors only focus on certain subsystems of Hop. Setting the appropriate component is important for getting their attention.
* There is **agreement** that the ticket solves a valid problem, and that it is a **good fit** for Hop. The Hop community considers the following aspects:
  * Does the contribution alter the behavior of features or components in a way that it may break previous users’ programs and setups? If yes, there needs to be a discussion and agreement that this change is desirable.
  * Does the contribution conceptually fit well into Hop? Is it too much of a special case such that it makes things more complicated for the common case, or bloats the abstractions / APIs?
  * Does the feature fit well into Hop’s architecture? Will it scale and keep Hop flexible for the future, or will the feature restrict Hop in the future?
  * Is the feature a significant new addition (rather than an improvement to an existing part)? If yes, will the Hop community commit to maintaining this feature?
  * Does this feature align well with Hop’s roadmap and currently ongoing efforts?
  * Does the feature produce added value for Hop users or developers? Or does it introduce the risk of regression without adding relevant user or developer benefit?
  * Could the contribution live in another repository, e.g., Apache Bahir or another external repository?
  * Is this a contribution just for the sake of getting a commit in an open source project (fixing typos, style changes merely for taste reasons)
* There is **consensus** on how to solve the problem. This includes considerations such as
  * API and data backwards compatibility and migration strategies
  * Testing strategies
  * Impact on Hop’s build time
  * Dependencies and their licenses

If a change is identified as a large or controversial change in the discussion on GitHub, it might require a Hop Improvement Proposal (HIP) or a discussion on the dev mailing list to reach agreement and consensus.

Contributors can expect to get a first reaction from a committer within a few days after opening the ticket. If a ticket doesn’t get any attention, we recommend reaching out on the [dev mailing list](../../mailing-list/). Note that the Hop community sometimes does not have the capacity to accept all incoming contributions.

Once all requirements for the ticket are met, comment `.take-issue` on the issue to assign it to yourself. This also takes the issue out of triage and adds it to the next milestone.

**Pull requests belonging to unassigned tickets will not be reviewed or merged by the community.**

<a id="implement-change"></a>

## Implement Your Change

Once you’ve been assigned to an issue, you may start to implement the required changes.

Here are some further points to keep in mind while implementing:

* Set up a Hop development environment
* Follow the Code Style and Quality Guide of Hop
* Take any discussions and requirements from the issue or design document into account.
* Do not mix unrelated issues into one contribution.

<a id="open-pull-request"></a>

## Open a Pull Request

Code changes in Hop are reviewed and accepted through GitHub pull requests.

Considerations before opening a pull request:

* Make sure that **mvn clean verify** is passing on your changes to ensure that all checks pass, the code builds and that all tests pass.
* Execute the End to End tests of Hop.
* Make sure no unrelated or unnecessary reformatting changes are included.
* Make sure your commit history adheres to the requirements.
* Make sure your change has been rebased to the latest commits in your base branch.
* Make sure the pull request refers to the respective GitHub Issue, and that each ticket is assigned to exactly one pull request (in case of multiple pull requests for one ticket; resolve that situation first)

Considerations before or right after opening a pull request:

* Make sure that the branch is building successfully in GitHub Actions.

There is a separate guide on how to review a pull request, including our pull request review process. As a code author, you should prepare your pull request to meet all requirements.

<a id="merge-change"></a>

## Merge Changes

The code will be merged by a committer of Hop once the review is finished. The ticket will be closed afterwards.

---
title: Documentation Contribution Guide
---
Good documentation is crucial for any kind of software. This is especially true for sophisticated software systems such as distributed data processing engines like Apache Hop. The Apache Hop community aims to provide concise, precise, and complete documentation and welcomes any contribution to improve Apache Hop’s documentation.

> [!WARNING]
> Just like code, documentation is never done. We’re eager to find out how you think our docs can be improved, come discuss with us on our [GitHub Discussions](https://github.com/apache/hop/discussions).

<a id="update-or-extend"></a>

## About the Hop documentation

The Hop documentation and website content are written in Asciidoc. Asciidoc is a lightweight markup language which can be translated to HTML.

In order to update or extend the documentation you have to modify the Asciidoc (.adoc) files.
For more information on Asciidoc check out [asciidoc.org](http://asciidoc.org/).

The Hop docs and website content are built using the [Antora](https://antora.org) framework.

Check [this video on YouTube](https://www.youtube.com/watch?v=BAJ8F7yQz64) for more information on the concepts and a quick introduction to asciidoc and Antora.

<a id="doc-types"></a>

## Types of documentation

Apache Hop has multiple types of documentation for different audiences, covering specific topics and use cases. We have a user manual for basic and more advanced instructions on how to install, use and configure Apache Hop.

* **User manual**\
The goal for the user manual is to give a general feeling to how the application works, which transforms and actions are available and a guide on how to use them. A default template is used to explain how transforms and actions work, an Archetype is included in the repository to use as a template.
* **Technical documentation**\
Technical documentation contains best practices and general guidelines on how to use Hop in several environments and use cases.
* **API documentation**\
This is code documentation and only needed when you want to explore the internals of Hop or contribute code.

## Work on the documentation directly from the Hop website

Every documentation page on the Hop website has an 'Edit this page' button like the one below.

To make sure your doc change goes to the latest version of the Apache Hop documentation, select the pre-release version of the docs from the dropdown in the upper right-hand corner of the documentation.

![Select pre-release](/img/doc-contrib-select-pre-release.png)

Then, select the "Edit this page button":

![Edit this page](/img/doc-contrib-edit-this-page.png)

If you click on this page, you’ll be taken directly to the github editor for that page.

After you’ve made the changes you want to make, add a description for your changes and click 'Proposed changes'.

![Propose Changes](/img/doc-contrib-propose-changes.png)

Review the entries in the pull request template and click 'Create pull request'.

![Create Pull Request](/img/doc-contrib-create-pr.png)

Once your pull request has been reviewed, accepted and merged, the Hop build system will run a couple of checks and tests and the website needs to be rebuilt with your changes.

> [!TIP]
> The pull request review and merge is a manual process. Even though it usually only takes a couple of hours at most, this process can not be fully automated, so don’t expect your changes to appear immediately.

<a id="get-docs"></a>

## Work on the documentation asciidoc

All Apache Hop documentation is maintained in the same git repository as the code base.

### User manual

The easiest way to contribute documentation is to fork [Hop’s repository](https://github.com/apache/hop) on GitHub into your own GitHub account by clicking on the fork button at the top right. If you have no GitHub account, you can create one for free.

Next, clone your fork to your local machine.

```
git clone https://github.com/<your-user-name>/hop.git
```

The user manual documentation is located in the docs/hop-user-manual/ subdirectory.

### API documentation
To contribute to the API and code documentation create a fork of Hop’s code repository.

```
git clone https://github.com/<your-user-name>/hop.git
```

The API documentation is located in the docs/hop-dev-manual subdirectory

<a id="before-start"></a>

## Before you start working on the documentation...

Please make sure you have a GitHub issue that corresponds to your contribution. We require all documentation changes to refer to a GitHub issue, except for trivial fixes such as typos.

<a id="multi-lang-doc"></a>

## Documentation translations

We are planning on providing all documentation in multiple languages. We are looking for contributors that want to work with us and make this possible! If you are interested to maintain a translation language feel free to contact us on our [Mailing lists](../../mailing-list/).

<a id="submit-doc"></a>

## Submit your contribution

Apache Hop accepts documentation contributions through GitHub as Pull Requests. Pull requests are a simple way of offering a patch by providing a pointer to a code branch that contains the changes.

To prepare and submit a pull request follow these steps.

1. Commit your changes to your local git repository. Mention the corresponding GitHub issue, for example `addresses #123`, so the two are linked.

2. Push your committed contribution to your fork of the Hop repository at GitHub.

   ```
   git push origin myBranch
   ```

3. Go to the website of your repository fork (`https://github.com/<your-user-name>/hop`) and use the “Create Pull Request” button to start creating a pull request. Make sure that the base fork is hop `main` and the head fork selects the branch with your changes. Give the pull request a meaningful description and submit it.

It is also possible to attach a patch to a GitHub issue.

---
title: Website Contribution Guide
---
The website is the central place and first point of entry for any potentially new user. It needs to contain as much information as possible but not scare away new users with complex structures. This guide explains how to contribute to the website.

<a id="obtain-website"></a>

## Obtain the Website sources

The easiest way to contribute website changes is to fork Hop’s website repository on GitHub into your own GitHub account by clicking on the fork button at the top right. If you have no GitHub account, you can create one for free.

Next, clone your fork to your local machine.

```
git clone https://github.com/<your-user-name>/hop-website.git
```

<a id="before-start"></a>

## Before you start working on the website...

… please make sure there exists a GitHub issue that corresponds to your contribution. We require all website changes to refer to a GitHub issue, except for trivial fixes such as typos.

<a id="update-or-extend"></a>

## Update or extend the website

The Hop website is written in Nodejs and Asciidoc. Asciidoc is a lightweight markup language which can be translated to HTML.

The instructions on how to locally build and preview the website are written on the [hop-website README](https://github.com/apache/hop-website#readme).

In order to update or extend the website content you have to modify the Asciidoc (.adoc) files.
For more information on Asciidoc check out [asciidoc.org](http://asciidoc.org/).

Please feel free to ask any questions you have on the [dev mailing list](../../mailing-list/) or in [GitHub Discussions](https://github.com/apache/hop/discussions).

<a id="multi-lang-website"></a>

## Website translations

We are planning on providing the website in multiple languages. We are looking for contributors that want to work with us and make this possible! If you are interested to maintain a translation language feel free to contact us on our [Mailing lists](../../mailing-list/).

<a id="submit-website"></a>

## Submit your contribution

Apache Hop accepts website contributions through GitHub as Pull Requests. Pull requests are a simple way of offering a patch by providing a pointer to a code branch that contains the changes.

To prepare and submit a pull request follow these steps.

1. Commit your changes to your local git repository. Mention the corresponding GitHub issue, for example `addresses #123`, so the two are linked.

2. Push your committed contribution to your fork of the Hop website repository at GitHub.

   ```
   git push origin myBranch
   ```

3. Go to the website of your repository fork (`https://github.com/<your-user-name>/hop-website`) and use the “Create Pull Request” button to start creating a pull request. Make sure that the base fork is hop-website `main` and the head fork selects the branch with your changes. Give the pull request a meaningful description and submit it.

It is also possible to attach a patch to a GitHub issue.

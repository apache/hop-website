# Hop Website

This repository is used to generate the Hop website

Tools used to generate the website:

 - [Git](https://git-scm.com/) a source code management tool used to fetch document sources from different
   github repositories.
 - [Node.js](https://nodejs.org/) a JavaScript runtime used to build the website. You will need to use Node.js version 16.
 - [yarn](https://yarnpkg.com/) a blazing fast dependency and package manager tool used to download
   and manage required libraries.
 - (installed via yarn) [Gulp](http://gulpjs.com/) a task automation tool. Used to build the Hop
   Antora UI theme.
 - (installed via yarn) [Hugo](https://gohugo.io) a static site generator. Simplified, it takes the
   documentation from the `content` directory and applies templates from `layouts`
   directory and together with any resources in `static` directory generates output in
   the `public` directory.
 - (installed via yarn) [Antora](https://antora.org/) a documentation site generator. It uses
   Asciidoc documents from different sources.

## Build with Node and yarn

You can build the website locally using the tools `Node.js` and `yarn`.


### Preparing the tools

#### Node.js

Make sure that you have Node.js (herein "`Node`") installed.

    $ node --version

If this command fails with an error, you do not have Node.js installed.

This project requires the Node LTS version 16 (e.g., V16.13.2).

Please make sure to have a suitable version of Node.js installed. You have several options to install
Node.js on your machine:

- Install using the Node Version Manager [nvm](https://github.com/creationix/nvm)
- Install using [Homebrew](https://brew.sh/) and [Node formulae](https://formulae.brew.sh/formula/node)
- Install from official [Node packages](https://nodejs.org/en/download/)

Note - If you have different Node version other than Node.js LTS version 16 you can use following command to make
Node.js LTS version 16 as your default Node.js version.

    $ nvm alias default 16

Now that you have Node 16 installed, you can proceed with checking the Yarn installation.

#### Yarn

Follow [the documentation on installing](https://yarnpkg.com/en/docs/install) Yarn for your operating system.

#### Clone and Initialize the project

Clone the hop-webiste Git repository:

    $ git clone https://github.com/apache/hop-website.git


## Build the Antora Hop UI theme

The first step is to build the Antora UI theme used for the Hop website. The theme sources are located
inside [Project root directory/antora-ui-hop](antora-ui-hop). Start by switching to that directory:

    $ cd antora-ui-hop

In that directory execute:

    $ yarn install # needed only once, or if dependencies change
    $ yarn build   # to perform the ui theme build

You should see the Antora theme bundle generated in [antora-ui-hop/build/ui-bundle.zip](antora-ui-hop).

## Build the website content

Before you are able to build the website content the UI bundle must be present.

To build the website go to the project root directory and run:

    $ yarn install # needed only once, or if dependencies change
    $ yarn build   # to perform the build

You should see the generated website in the `public` directory.

## Preview website locally

You can preview the the website on your local machine once you have the generated website available in
the `public` directory.

Hugo can start a simple web server serving the generated site content so you can view it in your favorite browser.

Simply call

    $ yarn preview

or     

    $ yarn preview-local 

`preview` will pull the latest docs version from [GitHub](https://github.com/apache/hop),  `preview-local` will use the (committed) documentation files from your local Hop clone. 

NOTE: `preview-local` assumes your docs repository is cloned to a folder `hop` next to `hop-website` (both repositories in the same parent folder). 

You will be provided with a web server running the site on [http://localhost:1313/](http://localhost:1313/)

Point your favorite browser to `http://localhost:1313/` and you will see the Hop website.

## Contributing

The website content is added under the `content` directory, logical groups have been created to group website content. This repository will only be used for the more "static" types of information (blog/news/announcements). Software documentation will reside in a separate repository or in the same repository as the code.

Asciidoc is used to write content for the website, more information about asciidoc syntax can be found [here](https://asciidoctor.org/docs/asciidoc-syntax-quick-reference/)

Images and other resources should be added in the `static` folder.

## Jenkins
This repository also contains a Jenkins hook, when you add a new branch or pull request with changed content the website is automatically build and a preview is available. When merged with master the site is redeployed

You can check your pull request and see if the site is correctly rendered by going to the [Apache Builds website](https://ci-builds.apache.org/job/Hop/)

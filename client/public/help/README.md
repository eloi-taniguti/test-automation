# VMT User Guide

This VMT User Guide web site runs using Jekyll, a simple framework that converts Markdown files into pages using a template engine.

The template is based on Graphene Bootstrap Theme.

## Requirements

* Command line knowledge

Make sure that the following are installed:

* [Ruby](https://www.ruby-lang.org)
* [RubyGems](https://rubygems.org)
* [Jekyll](http://jekyllrb.com)
* [Node.js](https://nodejs.org)

You can use [Homebrew](http://brew.sh) to manage all the packages listed above.

Once all is installed, proceed with the next steps.

### Ruby

Install Ruby and its dependencies:

##### 1. Install RVM (Ruby Version Manager)

~~~sh
$ curl -L https://get.rvm.io | bash -s stable`
~~~

> if you get a error message about `GPG signature verification failed`, use the command below to add the proper key to validate the package that will be installed and after try to install RVM again.

~~~sh
command curl -sSL https://rvm.io/mpapis.asc | gpg --import -
~~~

After installing RVM, you must close and reopen the terminal window or, alternatively, you can enter this command to refresh the terminal environment:

~~~sh
source /Users/<username>/.rvm/scripts/rvm
~~~

##### 2. Install Ruby

~~~sh
rvm install ruby-2.5.0
~~~

##### 3. Installing `jekyll`

Install it with RubyGems.

~~~sh
$ gem install jekyll
~~~

## Installing dependencies and devDependecies

~~~sh
$ npm install
~~~

## Building user guide

Just execute and copy content of _site folder to the server

~~~sh
$ node create-json.js
$ npm run build
~~~


## Editting user guide

You can use `jekyll` web server to edit and see changes online.

~~~sh
$ jekyll serve
~~~

If there is a conflict with the port, just use:

~~~sh
$ jekyll server --port PORT
~~~

Replace `PORT` by any number (e.g. `4002`).


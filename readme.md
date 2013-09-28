# CouchApp generator [![Build Status](https://secure.travis-ci.org/garbados/generator-couchapp.png?branch=master)](http://travis-ci.org/garbados/generator-couchapp)

Yeoman generator that scaffolds out a front-end web app, and deploys them as CouchApps.

Stolen almost entirely from [generator-webapp](https://github.com/yeoman/generator-webapp).

## Features

* CSS Autoprefixing (new)
* Built-in preview server with LiveReload
* Automagically compile CoffeeScript & Compass
* Automagically lint your scripts
* Automagically wire up your Bower components. Supported both [with](https://github.com/yeoman/grunt-bower-requirejs) and [without](https://github.com/stephenplusplus/grunt-bower-install) (new) RequireJS.
* Awesome Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)
* Mocha Unit Testing with PhantomJS
* Optional - RequireJS
* Optional - Twitter Bootstrap for SASS
* Optional - Leaner Modernizr builds (new)

For more information on what `generator-couchapp` can do for you, take a look at the [Grunt tasks](https://github.com/garbados/generator-couchapp/blob/master/app/templates/_package.json) used in our `package.json`.

## Getting Started

- Install: `npm install -g generator-couchapp`
- Run: `yo couchapp`
- Run `grunt` for building, `grunt server` for preview, and `grunt deploy` to push to CouchDB.


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--test-framework <framework>`

  Defaults to `mocha`. Can be switched for another supported testing framework like `jasmine`.

* `--coffee`

  Add support for [CoffeeScript](http://coffeescript.org/).

## Contribute

Want something? Either:

1. Raise an [issue](https://github.com/garbados/generator-couchapp/issues).
2. Fork me, and make a pull request.

Happy to consider any changes :D

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)

# Generator-couchapp
[![Build Status](https://secure.travis-ci.org/garbados/generator-couchapp.png?branch=master)](https://travis-ci.org/garbados/generator-couchapp)

A generator for Yeoman that scaffolds Couchapps. Comes with a Gruntfile to further ease your life :D

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-couchapp`
- Run: `yo couchapp`
- Minify assets and push live with `grunt`

If `grunt` reports `ECONNREFUSED`, make sure your `config.json`'s `db` value points to a running 
CouchDB / Cloudant instance. For example, if your `db` is "http://localhost:5984/couchapp", make sure a CouchDB 
instance is running locally and accepting requests on port 5984. 

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

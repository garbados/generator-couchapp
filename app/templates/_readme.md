# <%= pkg_name %>

<%= description %>

## Install

Before we begin, you'll need to install these:

* [node.js](http://nodejs.org/): download and install manually.
* [yeoman](https://github.com/yeoman/yeoman): `npm install -g yo`
* [grunt](http://gruntjs.com/): `npm install -g grunt-cli`

Then run this:

	npm install git://github.com/<%= username %>/<%= _.slugify(pkg_name) %>.git
	npm install
	grunt

Now your app is live!

## Configuration

Check `config.json` for where your Couchapp will be pushed when you run `grunt`.
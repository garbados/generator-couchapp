/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('couchapp generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('couchapp:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // templated file found automatically
      'config.json',
      // special file templated manually
      'attachments/index.html'
    ];

    helpers.mockPrompt(this.app, {
      'pkg_name': 'test',
      'description': 'testface',
      'username': 'testfacebutt',
      'is_on_cloudant': false,
      'remote_uri': 'http://localhost:5984',
      'remote_db': 'testfacebuttblog'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});

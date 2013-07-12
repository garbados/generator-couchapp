'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var fs = require('fs');


var CouchappGenerator = module.exports = function CouchappGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CouchappGenerator, yeoman.generators.Base);

CouchappGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'pkg_name',
    message: 'What is the Couchapp\'s name?',
    default: 'Couchapp'
  },{
    name: 'description',
    message: "How would you describe it?",
    default: 'A Couchapp made of fury and excellence.'
  },{
    name: 'username',
    message: "What is your GitHub username?"
  },{
    name: 'remote_uri',
    message: "What's the URL for your CouchDB instance?",
    default: "http://localhost:5984"
  },{
    name: 'remote_db',
    message: "What database will the Couchapp use?",
    default: 'couchapp'
  }
  ];

  this.prompt(prompts, function (props) {
    for(var key in props){
      this[key] = props[key];
    }

    cb();
  }.bind(this));
};

CouchappGenerator.prototype.app = function app() {// copy everything in `templates` based on rules:
  // - if dir, this.directory
  // - if filename starts with '__', ignore
  // - if filename starts with '_', this.template
  // - else, this.copy
  var files = fs.readdirSync(__dirname + "/templates");
  for(var i in files){
    var stat = fs.statSync(__dirname + "/templates/" + files[i]);
    if(stat.isDirectory()){
      this.directory(files[i]);
    }else{
      if(files[i][0] === '_'){
        if(files[i][1] === '_'){
          // ignore the file; allow later directives to handle it
        }else{
          this.template(files[i], files[i].slice(1));
        }
      }else{
        this.copy(files[i], files[i]);
      }
    }
  }
};

CouchappGenerator.prototype.html = function html() {
  this.template('__index.html', 'attachments/index.html');
}
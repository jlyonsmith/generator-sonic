'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ComponentServiceGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Generating a service component called ' + this.name + '.');
  },

  files: function () {
  	var dir = 'app/components/' + this.name + '/';
  	this.mkdir(dir)
    this.template('_service.js', dir + this.name + '.js');
    this.template('_service-test.js', dir + this.name + '-test.js');
  }
});

module.exports = ComponentServiceGenerator;
'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ComponentDirectiveGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Generating a directive component called ' + this.name + '.');
  },

  files: function () {
  	var dir = 'app/components/' + this.name + '/';
  	this.mkdir(dir)
    this.template('_component.js', dir + this.name + '.js');
    this.template('_component-test.js', dir + this.name + '-test.js');
    this.template('_component.tpl.html', dir + this.name + '.tpl.html');
    this.template('_component.js', dir + this.name + '.js');
  }
});

module.exports = ComponentDirectiveGenerator;
'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var SonicGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Sonic generator.'));

    var prompts = [
        { name: 'gitHubUserName', message: 'What GitHub user account are you using?' },
        { name: 'appName', message: 'What is the name of your app?' }
    ];

    this.prompt(prompts, function (props) {
        this.appName = props.appName;
        this.gitHubUserName = props.gitHubUserName;
        done();
      }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.template('_index.html', 'app/index.html');
    this.template('_main.scss', 'app/main.scss');
    this.template('_app.js', 'app/app.js');
    this.template('_app-controller.js', 'app/app-controller.js');
    this.template('_app-controller-test.js', 'app/app-controller-test.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('_bower.json', 'bower.json');
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');

    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');
    this.template('_gulpfile.js', 'gulpfile.js');
  }
});

module.exports = SonicGenerator;
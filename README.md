# Sonic Angular.js Generator!

---------------

This project is a Yeoman Generator, using which we can speed up our WebApp development. The command name is **$ yo sonic**. 

You can also check the [NPM Repository](https://npmjs.org/package/generator-sonic) 

----------

What makes it cool
----------

 1. **Ultra Fast** - Uses Gulp instead of Grunt
 2. **Live Reload** pre-configured
 3. **BrowserSync** pre-configured
 4. **Development** and **Production** code are separated
 5. **AngularUI** included (optional)
 6. **JSHint** pre-configured
 7. **Protractor** (E2E tests) pre-configured
 8. **FontFace** - Add [@fontface](https://github.com/jlyonsmith/generator-sonic/blob/master/font/USAGE.md) on fly
 9. [Constants](https://github.com/jlyonsmith/generator-sonic/blob/master/constant/USAGE.md) and [Values](https://github.com/jlyonsmith/generator-sonic/blob/master/value/USAGE.md) will be added in main.js (No new file will be created)
 10. [Adding Routes](https://github.com/jlyonsmith/generator-sonic/blob/master/route/USAGE.md) will also create and link the css and controller in their respective folders.
 11. [Adding Views](https://github.com/jlyonsmith/generator-sonic/blob/master/view/USAGE.md) is also allowed
 12. [Adding Styles](https://github.com/jlyonsmith/generator-sonic/blob/master/style/USAGE.md) is also allowed
 13. Use `gulp build`for dev mode and `gulp build:prod` for production.
 14. Share code with client using command `gulp zip` (Will create the .zip file of build folder)

<i class="icon-download"></i> Installation
---------

First of all you need to have [node.js](http://nodejs.org/) and Yeoman `npm install -g yo` installed.

Install the Sonic Generator

```sh
    npm install -g generator-sonic
```

Make a new Directory for the project and cd into it

```sh
    mkdir my-new-project && cd $_
```

Then execute the Sonic command

```sh
    yo sonic [app-name]
```

Answer few question on the command prompt and **Thats it!**

---

To install the dependency packages (Required **only if** you need to run the `npm install` as a **super user**)

1. You first need to install all the node modules required by Sonic.
```
    npm run-script preinstall
```
Or else you can directly run `npm install`

2. After that you need to download all the libraries using bower.
```
    npm run-script postinstall
```
Or else you can directly run `bower install`

---
Finally to start the server

```sh
    gulp
```
Or else you can run `npm start`

-----------


<i class="icon-file"></i> App Structure
---------------
```
 - app/
    |- index.html
    |- app.js
    |- main.scss
    |- gulpfile.js
    |- app-controller.js
    |- app-controller-test.js
```

----------

<i class="icon-refresh"></i> Sonic Commands
---------------

The available **Sonic** sub-generators are:

* [Sonic:directive](https://github.com/jlyonsmith/generator-sonic/blob/master/directive/USAGE.md)
* [Sonic:service](https://github.com/jlyonsmith/generator-sonic/blob/master/service/USAGE.md)


<i class="icon-pencil"></i> Special Thanks
---------------

We would like to thank following for creating awesome stuff

* [AngularJS](http://angularjs.org) - MV* Framework for WebApps
* [Grunt](http://gruntjs.com) - A JavaScript task runner
* [Gulp](http://gulpjs.com/) - The streaming build system
* [Bower](http://bower.io) - Front End Package Manager
* [jQuery](http://jquery.com/) - DOM Manipulation Library
* [Yeoman](http://yeoman.io/) - Worlflow for modern WebApps
* [Generator](https://github.com/yeoman/generator-angular) - Yeoman Angular Generator

-------------------


License
---------------

See [Sonic License](https://github.com/jlyonsmith/generator-sonic/blob/master/LICENSE.md)
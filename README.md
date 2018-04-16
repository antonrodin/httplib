# httpdLib
==========

HTTPLib JS Lib... Why use the fucking jquery then vanilla ES6 javascript offer things like fetch()? Dont use it for the fuck's sake! Also dont use this one... build your own or use AXIOS!

ES6 Lib done... (Master Branch)
===============================

I guess is the recomended way of doing thing "Today (2018)".... the fetch() function and Promise object to resolve or catch.

* app.js - some kind of rudimentary api test, and examples of GET, POST, PUT, PATCH and DELETE.
* httplib.js - the library itself

ES5 Implementation (ES5 Branch)
===============================

Old way of doing things, compatible with old browsers. Creating classes and functions with "prototype" and using XMLHttpRequest objects... A FUCKING MESS of old and shitty Javascript, but still works and widely used. Wanna builds apps for iExplorer 6, its your code... Go f**k yourself (sorry).

* app.js - rudimentary tests
* httplib.js - the library itself

ES7 Implementation ECMAScript 2017 (ES7 Branch)
===============================================

The same library as ES6, but using the new features of ES7 Javascript. Check the ES7 branch.

Async and Await. async function returns Promise object, and await is used inside "async function" for "wait" until get "response"... Today (2018) it soported by all new browsers. Dont use that in legacy code.

browserify-nodent
=================

browserify-nodent is a transform for browserify that compiles the ES7 keywords `async` and `await` for your ES5 browser. It doesn't need Promises or Generators, or anything else - it just generates working JavaScript.

The compiler itself is [nodent](https://www.npmjs.com/package/nodent), where you can more infromation and examples of `async` and `await` in action.

Installation
------------
	npm install browserify-nodent

Example
-------
	npm test
	
Compiles using the command line:

	cd example
	browserify -t browserify-nodent --debug main.js >out.js
	open ./index.html
	cd ..
	
Opening the resulting example/index.html will demonstrate the use of `async` and `await` in your HTML/JS pages in the browser.
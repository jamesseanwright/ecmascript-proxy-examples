# ECMAScript Proxy Examples

Examples for my [JS Roundabout](https://www.meetup.com/The-JS-Roundabout/) talk about the Proxy API.

## Examples

The `intro` directory contains examples of these traps:

* `get`
* `set`
* `deleteProperty`
* `construct`
* `apply`

You can run any of the below with `node <directory name>`:

* `debugSetInterval` - logging `setInterval` registration and clearing
* `fancyConsole` - a Console API-compliant proxy that augments the global `console` object with dates and coloured output
* `lazyRequire` - lazy loading of CommonJS dependencies
* `memoisation` - caching the output of a function based upon its input
* `preventXss` - preventing malicious JavaScript from being stored in a database and subsequently evaluated a HTML page
* `schemaValidation` - validate object properties based upon a simple schema

There is a single dependency for the `preventXss` example, so be sure to run `npm i` first.

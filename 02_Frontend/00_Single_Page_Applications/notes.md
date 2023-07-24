# Single Page Applications

## CommonJS vs EcmaScript Modules

_At this point in time there are two central strategies for loading javascript modules from one file in another_

### CommonJS

_CommonJS modules were part of Node.js when it was written in 2009. They run synchronously. Imports and exports are resolved and scripts are executed dynamically at runtime. CommonJS uses `__filename`, `__dirname`, and `NODE_PATH` variables. ESM does not._

Loading from an npm package

```js
const express = require("express");
```

Loading from my codebase

```js
const aModule = require("./aModule.js");
```

### ESM

_ECMAScript modules (ESM) or ES Modules were introduced in 2015 with JavaScriptES6 (also known as ECMAScript 2015 or ECMAScript 6). They are asynchronous. Imports and exports are resolved statically at parse time. The ESM module loader then downloads and parses scripts. Finally, the script executes. ESM uses top-level `await` (`await` in a file outside an `async` function). CommonJS does not._

Loading from an npm package

```js
import axios from "axios";
```

Loading from my codebase

```js
import aModule from "./aModule.js";
```

## Export types

When bundling applications using webpack we can choose which files to load by using the `export` and `import` keywords in our client side javascript code.

### Default exports

First we define our code in a file

```js
// fileA.js
export default () => {
  console.log("Hello class!");
};
```

Then we import the exported code from the original file
into another file (we also give this export a name)

```js
// fileB.js
import funcA from "./fileA.js";

funcA(); // Hello class!
```

👉🏽 **IMPORTANT: You can only have 1 default export per file** 👈🏽

### Named exports

We can also name our exports

```js
// fileA.js
export const sayHello = () => {
  console.log("Hello from sayHello()!");
};
```

Then we import our code from fileA.js but using its name

```js
// fileB.js
import { sayHello } from "./fileA.js";

sayHello(); // Hello from sayHello()!
```

Or we can define multiple named exports

```js
// fileA.js
export const PI = 3.1415926535; // etc...

export const sayHello = () => {
  console.log("Hello from sayHello()!");
};

export const sayGoodbye = () => {
  console.log("Goodbye from sayGoodbye()!");
};
```

Then we import our code from fileA.js but using its name

```js
// fileB.js
import { sayHello, sayGoodbye, PI } from "./fileA.js";

sayHello(); // Hello from sayHello()!
sayGoodbye(); // Hello from sayGoodbye()!

console.log(PI); // 3.1415926535
```

👉🏽 **IMPORTANT: Unlike default exports can have as many named exports per file as needed** 👈🏽

### Mixing and matching

We can also define default and named exports in tandem

```js
// fileA.js
export const sayHello = () => {
  console.log("Hello class!");
};

export const sayGoodbye = () => {
  console.log("Hello class!");
};

export default { key1: 1, key2: 2, key3: 3 };
```

Then we import our code from fileA.js but using its name

```js
// fileB.js
import obj, { sayHello, sayGoodbye } from "./fileA.js";

sayHello(); // Hello from sayHello()!
sayGoodbye(); // Hello from sayGoodbye()!

console.log(obj); // { key1: 1, key2: 2, key3: 3 }
```

## Javascript Modules

Spreading your code amongst several javascript files is a bit tricky on the client side. We oftentimes use tools to streamline and automate this process for us.

## Webpack

_Webpack is a tool used to compile JavaScript modules into one javascript oftentimes called a bundle._

### Configuration

Out of the box, webpack won't require you to use a configuration file. However, it will assume the entry point of your project is src/index.js and will output the result in dist/main.js minified and optimized for production. We can modify this behavior by creating a `webpack.config.js` file in the root of our application.

```js
// sample webpage.config.js file
const path = require("path");

module.exports = {
  mode: "development", // sets mode to enable certain env variables and bundle behavior
  entry: "./src/index.js", // entry point of the client side app
  output: {
    path: path.join(__dirname, "/public"), // the output directory for the bundle
    filename: "bundle.js", // the name of the compiled src code
  },
};
```

[Webpack Documentation](https://webpack.js.org/)

## Major Categories of Applications

### Multi-Page Applications (MPA)

_Multiple-page applications work in a “traditional” way. Every change eg. display the data or submit data back to server requests rendering a new page from the server in the browser. Oftentimes generates its HTML on the server side and transmits this data to the client side_

Pros:

- It’s the perfect approach for users who need a visual map of where to go in the application. Solid, few level menu navigation is an essential part of traditional Multi-Page Application.
- Very good and easy for proper SEO management. It gives better chances to rank for different keywords since an application can be optimized for one keyword per page.

Cons:

- Frontend and backend development are tightly coupled.
- The development becomes quite complex. The developer needs to use frameworks for either client and server side. This results in the longer time of application development.

[Sample Multi Page Application](./demo/mpa/)

### Single-Page Applications (SPA)

_A single-page application is an app that works inside a browser and does not require page reloading during use. You use these type of applications every day. These are, for instance: Gmail, Google Maps, Facebook or GitHub. Oftentimes transmits its data over the network as JSON and lets the client generate the corresponding HTML_

```json
// a collection of dog objects as JSON
[
  { "id": 1, "name": "pickles", "age": 4 },
  { "id": 2, "name": "optimus prime", "age": 7 },
  { "id": 3, "name": "cat", "age": 2 }
]
```

```js
// a collection of dog objects as a JS array
[
  { id: 1, name: "pickles", age: 4 },
  { id: 2, name: "optimus prime", age: 7 },
  { id: 3, name: "cat", age: 2 },
];
```

Pros:

- SPA is fast, as most resources (HTML+CSS+Scripts) are only loaded once throughout the lifespan of application. Only data is transmitted back and forth.
- It’s easier to make a mobile application because the developer can reuse the same backend code for web application and native mobile application.
- SPA can cache any local storage effectively. An application sends only one request, store all data, then it can use this data and works even offline

Cons:

- SEO optimization is more tricky than a MPA
- It is slow to download because heavy client frameworks are required to be loaded to the client.
- It requires JavaScript to be present and enabled. If any user disables JavaScript in his or her browser, it won’t be possible to present application and its actions in a correct way.

[Sample Single Page Application](./demo/spa/)

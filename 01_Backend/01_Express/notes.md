# Servers / Express

## Node

- Open source, cross platform runtime environment that allows developers to create all kinds of server-side tools and applications in JS
- The runtime is intended for use outside of a browser context
- you can use `node.js` to create a simple web server using the Node HTTP package

## Servers

### API

- Application programming interface
- What one application exposes to another
- A single API can be used to provide data for a variety of front-ends
  - e.g. web, iOS, Android

### HTTP

![HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages/httpmsgstructure2.png)

- Hypertext Transfer Protocol (HTTP) is the foundation of any data exchange on the web
- A protocol for trasnmitting resources (e.g. HTML, plain text, images, JSON)
  - Specifically, a client-server protocol, which means requests are initiated by the recipient, usually the Web browser
    - the messages sent by the client are called requests
    - the messages sent by the server as an answer is called responses
- [MDN Example](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)

### Example Servers using Plain NodeJS

Simple

```js
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200);
  res.write("<h1>Welcome to my website<h1>");
  res.end();
});

server.listen(3000, "localhost");
```

More complex

```js
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "GET") {
    res.writeHead(200);
    res.write("<h1>Welcome to my main page<h1>");
    res.end();
  } else if (req.url === "/dogs") {
    res.writeHead(200);
    res.write("<h1>Welcome to my dogs page<h1>");
    res.end();
  }
});

server.listen(3000, "localhost");
```

## Express

- The most popular Node web application framework
- Provides mechanisms to:
  - Write handlers for requests with different HTTP verbs at different URl paths (routes)
- Set common web application settings like the port to use for connecting
- Add additional request processing "middleware" at any point within the request handling pipeline
- Allows you to expose an API that clients can use to tell the server to do some work

Resource: [Express Docs](https://expressjs.com/)

Simple

```js
const express = require("express");
const app = express();
app.listen(3000);
```

More complex

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the main page</h1>");
});

app.get("/dogs", (req, res) => {
  res.send("<h1>Welcome to the dogs page</h1>");
});

app.listen(3000);
```

### Route parameters

_Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys._

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // parameters can be accessed via its key name within the params object
  console.log("User id: ", req.params.userId);
  console.log("Book id: ", req.params.bookId);

  // this just sends a status code with no data in the http body
  res.sendStatus(200);
});
```

Resource: [Express Route Parameters](https://expressjs.com/en/guide/routing.html#route-parameters)

### Method / Verb types

_HTTP defines a set of request methods to indicate the desired action to be performed for a given resource._

| HTTP Method | Intention  |
| ----------- | ---------- |
| POST        | **C**reate |
| GET         | **R**ead   |
| PUT         | **U**pdate |
| DELETE      | **D**elete |

```js
// in express we can define our http routes to respond to a particular method
//  by utilizing its corresponding method name (in lowercase)
app.get("/", (req, res) => {
  // ...
});

app.post("/", (req, res) => {
  // ...
});

app.put("/", (req, res) => {
  // ...
});

app.delete("/", (req, res) => {
  // ...
});
```

Resource: [MDN HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### Middleware

_Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next._

Common middleware include:

- [Express router](https://expressjs.com/en/guide/routing.html#express-router)
- [Express body parser](https://expressjs.com/en/api.html#express.urlencoded)
- [Express static](https://expressjs.com/en/api.html#express.static)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Error Middleware](https://expressjs.com/en/guide/using-middleware.html#using-middleware)

Resource: [Express Middleware](https://expressjs.com/en/guide/using-middleware.html#using-middleware)

### Boilerplate

_Boilerplate code is code that is necessary to have your application run that defines the structure of your application but does not encompass the business logic._

Example: [Express Generator](https://expressjs.com/en/starter/generator.html#express-application-generator)

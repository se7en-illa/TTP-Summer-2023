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

- Hypertext Transfer Protocol (HTTP) is the foundation of any data exchange on the web
- A protocol for trasnmitting resources (e.g. HTML, plain text, images, JSON)
  - Specifically, a client-server protocol, which means requests are initiated by the recipient, usually the Web browser
    - the messages sent by the client are called requests
    - the messages sent by the server as an answer is called responses

### Example Servers using Plain NodeJS

Simple

```js
const http = require("http")
const server = http.createServer()

server.on("request", (req, res) => {
  res.writeHead(200)
  res.write("<h1>Welcome to my website<h1>")
  res.end()
})

server.listen(3000, "localhost") 
```

More complex

```js
const http = require("http")
const server = http.createServer()

server.on("request", (req, res) => {
  if(req.method === "GET") {
    res.writeHead(200)
    res.write("<h1>Welcome to my main page<h1>")
    res.end()
  } else if(req.url === "/dogs") {
    res.writeHead(200)
    res.write("<h1>Welcome to my dogs page<h1>")
    res.end()
  }
})

server.listen(3000, "localhost") 
```



## Express

- The most popular Node web application framework
- Provides mechanisms to:
  - Write handlers for requests with different HTTP verbs at different URl paths (routes)
- Set common web application settings like the port to use for connecting
- Add additional request processing "middleware" at any point within the request handling pipeline

Simple

```js
const express = require("express")
const app = express()
app.listen(3000)
```

More complex

```js
const express = require("express")
const app = express()

app.get("/", req, res, next => {
  res.send("<h1>Welcome to the main page</h1>")
})

app.get("/dogs", req, res, next => {
  res.send("<h1>Welcome to the dogs page</h1>")
})

app.listen(3000)
```
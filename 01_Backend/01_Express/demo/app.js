// using HTTP module

// const http = require("http");
// const server = http.createServer();

// simple example
// server.on("request", (req, res) => {
//   res.writeHead(200);
//   res.write("<h1>Welcome to my website<h1>");
//   res.end();
// });

// more complex example
// server.on("request", (req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200);
//     res.write("<h1>Welcome to my main page<h1>");
//     res.end();
//   } else if (req.url === "/dogs") {
//     res.writeHead(200);
//     res.write("<h1>Welcome to my dogs page<h1>");
//     res.end();
//   }
// });

// server.listen(3000, "localhost");

// using Express
const express = require("express");
const app = express();

// good practice to store your port number in a const
const PORT = 3000;

app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to the main page</h1>");
});

app.get("/dogs", (req, res, next) => {
  res.send("<h1>Welcome to the dogs page</h1>");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

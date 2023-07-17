const http = require("http");
const server = http.createServer();

const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  // res.send(`
  //   <html>
  //     <head>
  //       <title>Cars and Trucks</title>
  //     </head>
  //     <body>
  //       <h1>The latest cars and trucks!</h1>
  //     </body>
  //   </html>
  // `);
  res.send(`
  <h1>Hello</h1>
  `)
});

app.get("/cars", (req, res) => {
  res.send("cars");
});

app.get("/trucks", (req, res) => {
  res.send("trucks");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

server.listen(PORT, "localhost");
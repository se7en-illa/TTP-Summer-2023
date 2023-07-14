const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Cars and Trucks</title>
      </head>
      <body>
        <h1>The latest cars and trucks!</h1>
      </body>
    </html>
  `);
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

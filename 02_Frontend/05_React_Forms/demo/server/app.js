const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
module.exports = app;

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use("/api", require("./api"));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "public", "index.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

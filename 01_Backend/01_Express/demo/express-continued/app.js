const express = require("express");
const app = express();
const morgan = require("morgan");
const catsRouter = require("./cats");

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  // you should call the next() function in
  //  your middleware
  next();
});

app.use(morgan("tiny"));

app.use("/cats", catsRouter);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("This is a get");
});

// request parameters example
app.get("/books/:bookId/users/:userId/:name", (req, res) => {
  res.send(req.params);
});

app.post("/", (req, res, next) => {
  console.log(req.body);

  if (req.body.name !== "Alex") {
    return next(new Error("Some error"));
  }

  // you should be creating something here
  res.send("This is a post");
});

app.put("/", (req, res) => {
  // you should be updating something here
  res.send("This is a put");
});

app.delete("/", (req, res) => {
  // you should be deleting something here
  res.send("This is a delete");
});

app.use((err, req, res, next) => {
  // console.error(err.stack)
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("The server has started");
});

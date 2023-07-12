const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Middleware to log date and time, method and URL
const logger = (req, res, next) => {
  console.log(`${new Date()}: ${req.method} ${req.originalUrl}`);
  next();
};

app.use(logger);

// Use morgan for HTTP logging
app.use(morgan("dev"));

// Use bodyParser to parse JSON bodies
app.use(bodyParser.json());

// Using book routes
app.use("/books", bookRoutes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send("Sorry, we cannot find that!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

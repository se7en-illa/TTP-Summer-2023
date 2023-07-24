const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
};

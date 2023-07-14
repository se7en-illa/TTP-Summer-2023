const fs = require("fs");

const ls = (done) => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done("Something went wrong!");
    } else {
      done(files.join("\n"));
    }
  });
};

module.exports = ls;

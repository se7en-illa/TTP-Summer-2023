const fs = require("fs");

const cat = (fileName, done) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      done("File not found!");
    } else {
      done(data);
    }
  });
};

module.exports = cat;

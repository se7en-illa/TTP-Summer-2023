const request = require("request");

const curl = (url, done) => {
  request(url, (error, response, body) => {
    if (error) {
      done("Something went wrong!");
    } else {
      done(body);
    }
  });
};

module.exports = curl;

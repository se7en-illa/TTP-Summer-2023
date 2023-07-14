module.exports.foo = "hello world";
module.exports.bar = "goodbye world";

let number = 5;

module.exports = () => {
  console.log(number);
};

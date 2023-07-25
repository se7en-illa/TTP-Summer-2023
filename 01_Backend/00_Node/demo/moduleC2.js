const moduleB2 = require("./moduleB2.js");
console.log("module C");

let number = 5;

module.exports = () => {
    console.log();
    console.log(number);
    console.log("student: " + moduleB2.student);
};
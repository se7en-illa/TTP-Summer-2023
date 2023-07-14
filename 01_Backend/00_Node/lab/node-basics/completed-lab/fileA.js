const exportsFromFileB = require("./fileB"); // note the relative file path

require("./fileB");

console.log(exportsFromFileB);
exportsFromFileB();

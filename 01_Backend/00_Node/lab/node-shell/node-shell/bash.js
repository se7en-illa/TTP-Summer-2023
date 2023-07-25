const pwd = require("./pwd.js");

pwd();

// fs is not global, only a module, which means I'll need to require it:
// const fs = require('fs');
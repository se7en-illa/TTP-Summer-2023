const fs = require("fs");
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); // remove the newLine

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (cmd.startsWith("cat")) {
    const args = cmd.split(" ");
    const fileName = args[1];
    cat(fileName, done);
  } else if (cmd.startsWith("curl")) {
    const args = cmd.split(" ");
    const url = args[1];
    curl(url, done);
  } else {
    done("Invalid command");
  }
});

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

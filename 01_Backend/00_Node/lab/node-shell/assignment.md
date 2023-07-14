# Intro to Node

- Node.js is a tool that allows us to execute machine processes in Javascript.

- Before Node's release, Javascript had been confined mostly to the browser, only able to execute programs and logic in a browser environment that has many restrictions and limited capabilities for interacting with a client machine.

- With Node, we are able to run programs written in Javascript that interact with a machine. Node has access to low-level components, such as file systems, operating system properties, and the network.

# Workshop Goals

- This workshop will have you implement common bash (a.k.a. terminal) commands using Node.js. Due to Node's ability to access low-level system information and utility, we can mimic many terminal operations — totally impossible to do in the browser!

- You will learn basic Node concepts like the built-in globals, Node.js module system, how to use built-in modules, creating your own modules and using npm for third-party modules.

- Also, in the process of writing your own shell, you'll discover two things, that your terminal Bash shell is a programming environment and it's powered by The Unix Philosophy, the idea that you should create small programs that can interoperate with each other.

- You will also learn the blessings and tribulations of an asynchronous platform and how to compose and manage parallel operations that could complete at any time!

### Helpful Tools

- Two helpful tools you'll need during this are:

1. `man` - bash's manual pages. In your terminal, if you're ever confused by what a command cmd means, type man cmd.
2. explainshell.com - a very nice wrapper around man pages, just type in a command and it'll explain to you all the steps in that command.

<details>
<summary><h1>1. Setup</h1></summary>

- This workshop will be built completely from an empty directory! This means that our Git workflow will be slightly different.

- Create the initial project on your local machine by executing the following commands:

```bash
$ mkdir node-shell # create a new directory named `node-shell`
$ cd node-shell # switch into this directory
$ touch bash.js # create a new file
$ git init # creates a .git file in the current directory
$ git add bash.js
$ git commit -m "added bash.js file"
$ git log # shows the commit you just made (optional - it's nice to see though!)
```

- Go to Github and create a new Github repository for your project. Follow the usual instructions to push your local project up to your remote.

</details>

<details>
<summary><h1>2. The Process Global</h1></summary>
<details>
<summary><h3>Read: Simulating the Bash Shell</h3></summary>

We'd like to build a system that works like this:

```bash
[user@localhost]$ node bash.js
prompt> ls
.git
bash.js
```

- When we type `$ node bash.js` we enter a program that outputs `prompt>`.
- Then our program will be able to listen for various commands and respond!
- How are we outputting the prompt and getting information back? Let's explore the **_process_** global that exists in all **_node_** programs.

# Read: The `process` global variable

- When we run `node [filename]` in the terminal, we are instantiating a process on a computer.
- This is a process just like the one running your Chrome window and the list of processes you can see in **Activity Monitor** tool on OSX or **Task Manager** on Windows.
- Meta-information about this process accessible to you by using the process global in a Node program.

</details>

<details>
<summary><h3>Code: Stream Communication</h3></summary>

- In Unix environments, programs can communicate with streams called _STDIN_, _STDOUT_, and _STDERR_ (Standard Input, Output, and Error).
- As the names imply, Standard Input is data flowing into the program and Standard Output is a channel for data coming out from the program.
- For a process started in the terminal, STDIN might be keyboard input, and _STDOUT_ is displayed in the terminal as text.

- Node.js gives us access to these streams in the form of **process.stdin** and **process.stdout** objects.
- In fact, Node's console.log is actually just a thin wrapper around stdout.
- You may not know much about streams, but for this workshop we only need to know how to read and write as shown below.

```javascript
// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); // remove the newLine

  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
```

- Type this out into your _bash.js_ file and run _node bash.js_ from the command line. You should see something like this:

```bash
[user@localhost]$ node bash.js
prompt > hello world
You typed: hello world
prompt >
```

Note that our process doesn't immediately end this time. That's because we've registered a _listener_ to **_stdin_**, so Node won't kill the process automatically, as it assumes you may want to keep waiting for more user input. If you want to quit your Node prompt, use ^C (CTRL+C is the Unix polite interrupt signal).

</details>

<details>
<summary><h3>Code: `pwd`</h3></summary>

- The first bash command we'll implement in our node-shell program is `pwd`, which simply prints out the full path to the current working directory. **Try running the real pwd command in your terminal for yourself**

**The result should behave something like this:**

```bash
[user@localhost]$ node bash.js
prompt > pwd
/users/you/dev/node-shell
prompt >
```

<details>
<summary>Hint: Getting the working directory</summary>
The process's *current working directory* (cwd) is available as a method on the process global. See if you can find it in the <a href="https://nodejs.org/api/process.html">Node Docs</a>!
</details>

</details>

<details>
<summary><h3>Code: Streamline with Nodemon</h3></summary>

- As you are developing your **bash.js**, you may find it annoying to keep doing:

1. node bash.js
2. test a command
3. write some code in bash.js
4. CTRL+C to gracefully quit the running process
5. node bash.js
6. re-test the command

- Luckily, the **_nodemon npm module_** is here to help. Simply install it globally:

```bash
$ npm install -g nodemon
```

And now run `nodemon bash.js`. Nodemon watches files in a directory, recursively, and if they change it stops the process and re-runs your original command. Voilà, instant refreshing prompt during development!

</details>
</details>

<details>
<summary><h1>3. Modules</h1></summary>
<details>
<summary><h3>Read: Separating commands into separate files</h3></summary>

- The **pwd** command is a good start, but we have many more to come!
- It may get a bit unruly if we put all the logic for all of our commands squashed into our _bash.js_ file alongside logic for parsing the original command string, so let's plan for the future and put each of our command functions in a separate file.
- Those files will then export the functions that represent each of our commands!

```

+--------------+       +------------+
|              |       |            |
|    pwd.js    +---+--->  bash.js   |
|              |   ^   |            |
+--------------+   |   +------------+
                   +
                The module pwd.js can export
                information to the bash.js file

```

</details>

<details>
<summary><h3>Code: Creating a module</h3></summary>

- Create a new file called **_pwd.js_** and move the logic for the pwd command into this file. For the time being, include printing the next `prompt >` in that logic.

- This **_pwd.js_** file should **module.exports** the function containing the logic for our pwd command.

- Wire up **bash.js** so if the user types in a command pwd, it accesses that command function in the exports coming from **pwd.js** and calls it.

<details>
<summary>Hint: Exporting functions</summary>
In pwd.js your code should look something like this:

```javascript
module.exports = function () {
  // pwd code
};
```

Keep going!

</details>

<details>
<summary>Hint: Running commands from bash.js</summary>
In bash.js, you can access pwd.js like so:

```javascript
// we can access the pwd function and store it in a variable like so
const pwd = require("./pwd");

// if a user enters 'pwd' as an argument, we can then call it
pwd();
```

You got this!

</details>

</details>

<details>
<summary><h3>Code: Built-in modules and `ls`</h3></summary>

- Every programming language will come with a standard library of modules that make your work as a developer much easier (and of course, Node's standard library is considered very powerful for web development).

- One of the most powerful modules available in Node is the [fs module](https://nodejs.org/api/fs.html).
- This built-in Node module allows us to access the machine's file system in varied and powerful ways. This is definitely not something you can do in the browser!

- Let's use the **fs** module to implement a very familiar command: ls. Take the same steps as our pwd command to scaffold. That means:

  - Create a new file called **_ls.js_**, which exports a function containing our ls functionality
  - When the user types in ls, execute the ls function

- Don't forget, fs is not a global (like process) but a module — that means you'll need to require it: const fs = require('fs');

##### Implementing `ls`

- You can use `fs.readdir` to get the files in a directory.

```javascript
// files will be an array of filenames, like ['bash.js', 'pwd.js']
fs.readdir("./", "utf8", (err, files) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(files.join("\n"));
    process.stdout.write("prompt > ");
  }
});
```

**NOTE:** do not omit the error-handling aspect of Node-style callback functions ("errbacks")! The reason they make you write err first is to never forget to handle that potential err somehow — even if you simply throw it to the execution stack. Otherwise, you can have silent errors, which are as difficult to debug as they sound.

**ALSO NOTE:** There exists a simpler, synchronous version of the fs.readdir method, fs.readdirSync. Throughout this workshop, however, you will be required to use async methods. This is an artificial imposition since our node shell UI does not significantly benefit from asynchronicity; however, we want you to practice using Node.js-style callbacks for control flow. Such practice will pay off very soon when we learn Express.js.

</details>
</details>

<details>
<summary><h1>4. Bonus: Command Arguments</h1></summary>

<details>
<summary><h3>Code: Implementing `cat`</h3></summary>

- For our next command, we'll implement [cat](http://www.linfo.org/cat.html). It has nothing to do with felines! Try out the real cat from your command line by typing `cat <fileName> (ex. cat bash.js)`. You should see the contents of that file printed to the console.

- To implement this command, we'll need to accept not only the name of the command, but also the name of the file that the command will act upon.

- Figure out, using fs, how to implement this command for one file argument. The hints below will help, but try to figure it out on your own first.

<details>
<summary>Hint: Approach</summary>

First, modify your **bash.js** so that it captures not only the name of the command, but also the argument to that command. Then, implement **cat.js** as a module that exports a function that accepts the argument to the `cat` command, and prints out the contents of that file Finally, pull your cat function into bash.js and hook up the logic!

</details>

<details>
<summary>Hint: Handling more than one argument</summary>

Your input should be a string containing the name of the command and the filename, separated by a space. You can **split** the string at the space to separate them.

</details>

<details>
<summary>Hint: Implementing cat</summary>

The `cat` function should expect to receive a "fileName" as an argument. It will be passed this argument from **bash.js**

</details>

<details>
<summary>Hint: Getting file data</summary>

Take a look at the [readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) method on fs. Do NOT use readFileSync.

</details>

</details>
</details>

<details>
<summary><h1>5. Bonus: NPM Modules</h1></summary>

<details>
<summary><h3>Read: Implementing `curl`</h3></summary>

- **curl** is a useful command line tool to download websites.
- **Try out the real curl by executing curl http://www.google.com on your command line.**
- It will look a little messy, but what you're seeing is the same HTML document you get when you type http://www.google.com into your browser url bar!
- Your command line doesn't know how to parse and render HTML/CSS like your browser, so we just see the output as a long string instead of a nice webpage.

- Our next exercise is to implement curl using the request module: http://github.com/mikeal/request

- Note: There is a built-in http module in Node that we could use to accomplish this, but it's a bit harder to use. Instead, we'll use a nice module like request that abstracts away some of the complexity of using the built-in http.

- However, before we can use the request module we have to dive a bit into how node handles external modules using a tool called npm (node package manager).
</details>

<details>
<summary><h3>Read: Third Party Modules</h3></summary>

When refer to "modules" in node, there are three kinds of modules we could be talking about:

- There are the modules that are built into node (like fs)
- There are the modules we create (like all of our implemented commands)
- Then there are the modules we find on [npm](https://www.npmjs.com/).

**npm** is a package repository that gives access to interesting, creative and powerful programs built in node, made by people all over the world. It is now officially the largest repository of programming modules ever; the Node open source community is amazing!

</details>

<details>
<summary><h3>Code: `npm install request`</h3></summary>

[request](https://www.npmjs.com/package/request) is a cool, simple package that allows us to easily make requests to other sites. Read the [Github README](https://github.com/request/request) to get a flavor of how it's used.

To install request into your project, you'll have to do a few things in your terminal:

    - run `npm init`. This will take you through a quick step-by-step that will create a package.json file. Read a bit about what this file is here.
    - run `npm install request`. This will contact npm and download the **request** library. A new directory in your project will be created called **node_modules**. This is where npm places all third-party modules to be used in your program. Npm will also save **request** at a specific version as a dependency to your project. Check out your **package.json** after your install has completed - you'll see **request** listed there under **"dependencies"**. This makes it easy for someone else (or your future self) to install your project in the future - **instead of having to install each dependency one-by-one, you can just type `npm install`, and any packages listed in **"dependencies"** will be downloaded. How convenient!
    - Create a new **curl.js** module. In **curl.js,** you can now use the statement `require('request')` to gain access to the request library.

</details>

<details>
<summary><h3>Code: Implement `curl`</h3></summary>

Now that you have **request** available to **require**, implement the **curl** command. It should make an HTTP GET request to a given URL, and print out the HTTP response body.

</details>
</details>

<details>
<summary><h1>6. Extra Credit: Handling Asynchronicity</h1></summary>

<details>
<summary><h3>Code: Remove repeated work</h3></summary>

Right now, if you've implemented the commands, you'll notice a few repeated patterns:

1. Execute the command's work
2. Output the result of the command
3. Show the prompt and wait for the next command

The only thing that's unique is step 1. Steps 2 and 3 are repeated for each command.

Let's use the power of **_callback functions_** to remove steps 2 and 3.

- Create a function called _done_ in **bash.js** that takes in one argument: output.

```javascript
function done(output) {
  // ahow the output
  // show the prompt
}
```

- Now pass this function into each of your command functions. Rewrite your command functions so that they merely create the output string (instead of printing it directly to the **process.stdout**) and then call **done** after they've completed.

Here's an example with ls:

```javascript
module.exports = (done) => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done("Something went wrong!");
    } else {
      done(files.join("\n"));
    }
  });
};
```

Key takeaways:

- The ls function expects to receive the done function as a parameter, and then calls it. done is referred to as a callback function because it lets us call back someplace else (usually it lets us continue execution in a previous context, in this case back in our bash.js runner code`).

- Even though we're doing a fs.readdir here which is asynchronous, because we're using the done callback function inside the fs.readdir callback function, our bash.js file can specify what to do with the eventual results from our command.js operation. Nifty!
</details>

<details>
<summary><h3>If You Finish Early: Extra Credit</h3></summary>

Well done! The nice thing about this exercise is that you may continue work on it to build even more commands into your oeuvre. If you still have time, try implementing some of these other commands/features (listed from easier to harder). Use the **man** pages or explainshell.com to look up what the commands do, and then take a shot at implementing them!

- **_date_**
- **_echo_**
- **_head_**
- **_tail_**
- **_sort_**
- **_wc_**
- **_uniq_**
- **_find_**
</details>
</details>

<details>
<summary><h1>7. Review</h1></summary>

#### Main Takeaways

- Concepts of program execution
  - A program is data / text in storage
  - A process is a program loaded into memory and executed by the CPU
    - A thread is a sequence of steps executed by the CPU
    - A process consists of one or more threads which share memory (variables)
    - Multiple processes can be spawned from the same program
    - Processes do not share memory
    - The Operating System (OS) schedules jumps between all active threads
    - Every process has a PID (Process ID)
- UNIX basics
  - Every UNIX command is really a small, single-purpose program
  - **man **\_\*\*\*\* is a UNIX command for reading the manual pages for a given command
  - UNIX programs accept data from STDIN and output data to STDOUT (normally) or STDERR (if something went wrong)
  - Many UNIX programs accept an argument (e.g. a filename to run on)
- Node.js
  - A process for executing JavaScript on a machine, in a non-web-browser context
  - Consists of the V8 JS runtime (a single-threaded compiler), event loop, thread pool, and other C/C++ components
  - Has APIs and variables for interacting with the machine, such as the filesystem and network
    - Asynchronous, synchronous, blocking, and non-blocking
    - Node-style error-first callbacks ("errbacks") for asynchronous functions
    - Specific examples including fs.readdir, fs.readFile
    - Has global and module variables for specific information
      - **\_\_dirname:** directory the module is located in
      - **process.pwd():** directory the user initiated the node process from
      - **process.argv:** arguments user wrote to initiate the node process
      - **process.env:** object containing environment variables as properties
  - Uses the CommonJS module system
    - Definition of a module: JS or JSON file
    - Requiring modules
      - Runs the file the first time, and caches the result (if required again, simply uses the old value): "singleton"
      - The result is the **module.exports** value (JS) or JSON object (JSON) of that module
      - The **require** statement
        - Used with built-in modules: fetches by module name, e.g. `const fs = require('fs')`
        - Used with installed npm packages: fetches by module name, e.g. `const chalk = require('chalk')`
        - Used with custom-written modules (JS files): fetches by relative path, e.g. `const myCommands = require('./commands/index.js')`
          - Assumes the **js** extension, e.g. `const myCommands = require('./commands/index')`
          - Assumes an **index.js** file, e.g. `const myCommands = require('./commands/')` or `require('./commands')`

</details>

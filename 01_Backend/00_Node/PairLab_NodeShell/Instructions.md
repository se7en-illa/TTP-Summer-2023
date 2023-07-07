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

# Setup

- This workshop will be built completely from an empty directory! This means that our Git workflow will be slightly different. Instead of both partners forking from a shared starting point, one partner ("PartnerA") will create the initial project, and the other partner ("PartnerB") will fork that project.

- **PartnerA**: Create the initial project on your local machine by executing the following commands:

```bash
$ mkdir node-shell # create a new directory named `node-shell`
$ cd node-shell # switch into this directory
$ touch bash.js # create a new file
$ git init # creates a .git file in the current directory
$ git add bash.js
$ git commit -m "added bash.js file"
$ git log # shows the commit you just made (optional - it's nice to see though!)
```

- **PartnerA**: Go to Github and create a new Github repository for your project. Follow the usual instructions to push your local project up to your remote. When done, share the Github url with your partner.

- **PartnerB**: Fork your partner's Github repo. Clone your fork to your machine.

**Both partners**: add each other's Github repos as remotes for your local repos as usual!

# Read: Simulating the Bash Shell

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

# Code: Stream communication

- In Unix environments, programs can communicate with streams called _STDIN_, _STDOUT_, and _STDERR_ (Standard Input, Output, and Error).
- As the names imply, Standard Input is data flowing into the program and Standard Output is a channel for data coming out from the program.
- For a process started in the terminal, STDIN might be keyboard input, and _STDOUT_ is displayed in the terminal as text.

- Node.js gives us access to these streams in the form of **process.stdin** and **process.stdout** objects.
- In fact, Node's console.log is actually just a thin wrapper around stdout.
- You may not know much about streams, but for this workshop we only need to know how to read and write as shown below.

```javascript
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newLine

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
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

# Code: `pwd`

- The first bash command we'll implement in our node-shell program is `pwd`, which simply prints out the full path to the current working directory. **Try running the real pwd command in your terminal for yourself**

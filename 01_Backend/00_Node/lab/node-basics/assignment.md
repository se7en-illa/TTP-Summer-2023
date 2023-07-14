# Solo Lab: Node Basics

### Part 1: Setup

The goal for this lab is to explore and understand modules in Node programs.

At this point, you should have _node_ installed on your machine, which means you will also have the _node_ package manager (_npm_).

- **Node:** software that allows you to execute JavaScript programs directly on your operating system. JavaScript programs that you execute using node can perform tasks that are specific to your OS, like read/write from files or establish connections to your network.

- **npm:** Node's "package manager" (similar to OSX's brew, Ruby's gem, Python's pip, or Linux's apt). You can use npm to easily install and manage other JavaScript software packages so that you can use them in your own programs.

When you execute a JavaScript file (or files) using Node, your JavaScript will execute within Node's "runtime environment". The same way that JavaScript that executes in your browser has access to certain features related to the DOM (like document, and window), JavaScript that you execute with Node has access to a different set of features related to your filesystem and the network (such as \_\_dirname).

### Part 2: Background

In the browser, when we execute a JavaScript file, any variables or functions that aren't declared within the scope of another function are added to the global context (that is, they become key-value pairs on the window object). This means that if a file ("fileB") wants to use a function that was declared in another file ("fileA"), then "fileA" must be loaded first, and then "fileB" will find that function on the global context.

This is fortunately **not** the case in Node!

- In Node, each file represents a module.
- Each module has its own "global" object called "module" (similar to _window_ in the browser, except each module has its own unique _module_).
- The "module" object has a property called "exports" (_module.exports_). By default, _module.exports_ is an empty object.
- Other modules can then "import" that module's _module.exports_ using a special function called _require_

Both _require_ and _module.exports_ are built into the Node runtime environment - as long as you execute that JavaScript file using Node (i.e. by executing _node theFile.js_), they will be available.

In the following exercise, we will learn how to use them.

### Part 3: Using 'require' and 'module.exports'

###### Step 1

- In your terminal, navigate to the directory you house your bootcamp repositories, and then create one for this lab: `mkdir Lab.NodeBasics && cd "$_"`
  - Note: $_ is a special parameter that holds the last argument of the previous command. The quote around $_ make sure it works even if the folder name contains spaces. Neat, huh?
- Execute the following command from your command line to create two files in your project directory: `touch fileA.js fileB.js`

- Copy the following into fileA.js:

```javascript
const exportsFromFileB = require("./fileB"); // note the relative file path
console.log(exportsFromFileB);
```

- Execute _fileA.js_ from your command line by executing `node fileA.js`. What do you see?

<details>
<summary>Hint: Explanation</summary>
<br>
 <ul>
    <li> You should just see an empty object. _By default, all modules export an empty object. 
    </li>
    <li> Also note that in order to get to _fileB_, we needed to include the relative path to _fileB_ from _fileA_. For files that we write, we must include the path to the file so that Node knows where to find it. This is not the case when we're dealing with built-in node modules (like _fs_ and _http_ Node recognizes them as its own), nor with modules that we install like chalk (Node will automatically search inside our _node_modules_ folder for them).  
    </li>
</details>

###### Step 2

- Copy the following into _fileB.js_

```javascript
module.exports.foo = "hello world";
module.exports.bar = "goodbye world";
```

- Execute _fileA.js_ again. What do you see? Try changing it so that you log _exportsFromFileB.foo_ or _exportsFromFileB.bar_

<details>
<summary>Hint: Explanation</summary>
<br>
 <ul>
    <li>
    The *exportsFromFileB* should be an object with a key-value pair for foo and bar. *module.exports* is just an object - you can attach key-value pairs to it, and they will become available on the object that's returned by *require* 
    </li>
</details>

###### Step 3

- You can also reassign _module.exports_ to be anything you want. The value of _module.exports_ will be the thing that gets returned when you _require_ that module.
- To demonstrate this, change _fileB.js_ to export a function like so:

##### fileB.js

```javascript
let number = 5;

module.exports = () => {
  console.log(number);
};
```

##### fileA.js

```javascript
const exportsFromFileB = require("./fileB");
exportsFromFileB();
```

- What do you see?

<details>
<summary>Hint: Explanation</summary>
<br>
 <ul>
    <li>
    You should see the number 5. *Functions that you export from a module have closure over any variables they use*
    </li>
</ul>
</details>

###### Step 4

- This next part will be tricky! Change the contents of fileB.js and fileA.js to be the following:

##### fileB.js

```javascript
console.log("fileB is being run!");
```

##### fileA.js

```javascript
require("./fileB");
require("./fileB"); // not a typo - actually require it twice!
```

- How many times do you think "fileB is being run!" will log to the console?

<details>
<summary>Hint: Explanation</summary>
<br>
 <ul>
    <li>
You might be surprised - it's just the one time, even though we require the file twice!
This is because Node only ever executes a file that's being required once. The first time a module is required, the file will be executed as normal and the value of module.exports will be calculated. That value is cached (that is, stored and put aside) by Node. That value is then returned from the call to require. Any subsequent time the same module is required, the file will not be executed again - instead, the cached value will be returned right away!
    </li>
</ul>
</details>

### Part 4: Bonus

- For each of the following code snippets, create a new _.js_ file, copy the contents of the snippet into that file, _require_ that file into your _fileA.js_, and _console.log_ the result. What will you get each time? Make a guess, then execute your code to test it out. Check the hint at the end for an explanation.

#### Snippet 1

```javascript
const dogs = "I love dogs!";
const cats = "I love cats!";

module.exports.dogs = dogs;
module.exports.cats = cats;
```

<details>
<summary>Hint: Explanation</summary>
<br>
 <ul>
    <li>
You should see an object with a dogs key-value pair and cats key-value pair. Remember that module.exports is an object by default.
    </li>
</ul>
</details>

#### Snippet 2

```javascript
const dogs = "I love dogs!";
const cats = "I love cats!";

module.exports = {
  dogs: dogs,
  cats: cats,
};
```

<details>
<summary>Hint: Explanation</summary>
<br>
 <ul>
    <li>
You should once again see an object with a dogs key-value pair and cats key-value pair. While module.exports is an object by default, a common pattern is to reassign module.exports to be the object that we want to export, rather than simply stick key-value pairs on it directly.
    </li>
</ul>
</details>

#### Snippet 3

```javascript
const dogs = "I love dogs!";
const cats = "I love cats!";

module.exports = dogs;
module.exports = cats;
```

<details>
<summary>Hint: Explanation</summary>
<br>
 <ul>
    <li>
This time you should just see the string 'I love cats!'. Note that exports is just a key-value pair on the module object, and whatever it is assigned to after the module is executed will be the thing that gets exported. Because the cats variable is the last thing that module.exports is assigned to when we execute this module, that means the string it evaluates to will be the value we receive when we require it.
    </li>
</ul>
</details>

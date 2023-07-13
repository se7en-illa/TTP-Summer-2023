# Exploring Async/Await

### Goals

Async/await is a way to write asynchronous code in JavaScript, built on top of promises. The power of async/await lies in the fact that it makes asynchronous code look and behave a little more like synchronous code.

In this lab you will learn:

1. About Node's asyncronous functions such as readFile.
2. How to use Async/Await to make asyncronous operations (such as reading external files)

### Setup

##### Creating the repo:

- Clone [this repo]() to your local computer
- Navigate into the project and open it in VScode

##### Installing the dependencies

- Use the command `npm install` in your terminal to install all of the node modules.
- Use the command `npm start` in your terminal to run the code.

Take a minute to analyze the given index.js file - you can see it here (with mostFrequentWord left out):

```javascript
const { readFile } = require("fs").promises;

const mostFrequentWord = (text) => {
  // ...other pre-existing code here
};

const findPassword = async () => {
  // Your code goes here
};

findPassword();
```

There are a few important things to notice here:

1. We require in the readFile function from the promises portion of Node's fs library. This function returns a promise. You'll use it in the workshop to... you guessed it! Read files!

2. Also, notice that there are two given functions: `mostFrequentWord` and `findPassword`.
   - You don't need to do anything on `mostFrequentWord` - it's given to you. Just call it with some text and it will return you the most common word in the given text.
   - `findPassword` is where you will write your code. Observe that this function already contains the `async` keyword - which means you can use `await` inside it.

Finally, this project also comes with a /poems folder full of .txt files. Your job is to read those poems files using readFile until you find the secret password. - "Secret Password, you said??" Well, read on...

### Async File Read

##### Find the Password

Inside one of those poems there is a secret password! Your job is to find the password before the evil villain destroys the planet (oh, didn't I mention the evil villain before? Oh, well...). Here's how to do it:

1. Start reading the first poem (`poems/starting-poem.txt`) and find the most common word in the poem text.

<details>
<summary>Hint: How to read a text file with 'await'</summary>

```javascript
const poem1 = await readFile("poems/starting-poem.txt", "utf-8");
```

</details>

2. The most common word in the first poem is the name of the next poem you need to read. (in e.g., if the most common word was "the", then you need to read `poems/the.txt`) next.

<details>
<summary>Hint: Counting words</summary>

```javascript
const poem2FileName = `poems/${mostFrequentWord(poem1)}.txt`;
```

</details>

3. Repeat the process one more time: Find the most common word in the second poem to figure out which file you should read next.

4. Read the third poem, and finally, the most common word in the **third poem** IS the password. You should console.log it.

### Bonus: Error Handling

Remember that any operation that deals with the outside world (external files, servers, APIs etc) is prone to error: The file may not exist, the server might be offline etc. Your code needs to be prepared to deal with those scenarios, finding a way around to keep the program execution going or at least showing a friendly error message to the user.

Make sure to wrap your async calls in a `try...catch` block, logging a friendly error message in case something goes wrong.

<details>
<summary>Hint: Using a try/catch block</summary>

```javascript
try {
  const poem1 = await readFile("poems/starting-poem.txt", "utf-8");
} catch (error) {
  console.log("Something went wrong when loading poem1:", error.stack);
  return; // so we don't try to read the other files and cause more errors
}
```

</details>

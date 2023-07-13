# Asynchronicity / Promises

## Asynchronicity

### Asynchronous Code

Asynchronous (aka async) literally means "happening at disconnected times."

Async code in JS will run at an arbitrary (unknown) future time, and other JS code can run in the meantime.

Common examples:

- Opening, reading and writing to files
- Making API calls such as HTTP request from our frontend
- Accessing a database (e.g. create, read, update, delete)

Code example

```js
// what will the output of the following code be
console.log("One");

setTimeout(function () {
  console.log("Two");
}, 1000);

console.log("Three");
```

### Event Loop

_Node.js is a single-threaded event-driven platform that is capable of running non-blocking, asynchronous programming. These functionalities of Node.js make it memory efficient. The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It is done by assigning operations to the operating system whenever and wherever possible._

Resource: [Event Loop](https://www.geeksforgeeks.org/node-js-event-loop/)

[Event Loop Interactive Tool](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

### Async w/ Callbacks

```js
console.log("Getting configuration");

fs.readFile("/config.json", "utf8", (err, data) => {
  console.log("Got configuration:", data);
});

console.log("Moving on");
```

### Callback issues

```js
const tryGetRich = () => {
  readFile("/luckyNumbers.txt", (err, fileContent) => {
    nums = fileContent.split(",");

    nums.forEach((num) => {
      bookmaker.getHorse(num, (err, horse) => {
        bookmaker.bet(horse, (err, success) => {
          // we are officially in callback hell 😈🔥
          if (success) {
            console.log("😥");
          }
        });
      });
    });
  });
};
```

## Promises

_A Promise is a Javascript object that represents the eventual result of an asynchronous operation._

A promise object has two important properties:

- state - "pending" | "fulfilled" | "rejected"
- result - undefined | resulting value | error object

### Using Callbacks

```js
const tryGetRich = () => {
  nums.forEach((num) => {
    bookmaker.bet(horse, (err, success) => {
      if (success) {
        console.log("I'm rich!");
      }
    });
  });
};
```

### Using Promises

```js
const tryGetRich = async () => {
  try {
    const num = await readFileAsync("/luckyNumber.txt");
    const success = await bookmaker.bet(num);

    if (success) {
      console.log("I'm rich!");
    }
  } catch (error) {
    console.err(error);
  }
};
```

[Examples](https://github.com/orlandocaraballo/class-examples/tree/master/promises)

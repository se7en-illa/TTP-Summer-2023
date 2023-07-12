# Solo Lab: Express.js Deep Dive

### Introduction:

In this lab, we're going to build on our basic understanding of Express.js. By now, you should be familiar with creating a basic Express server, defining routes, and sending responses. Now, let's delve into some advanced topics like middleware, routing, error handling, parameters, and more.

## Part 1: Setting Up The Project

- Step 1: Create a new folder named `ExpressDeepDive` using the `mkdir` command.
- Step 2: CD into your `ExpressDeepDive` directory. Normally, at this point, we would use `npm init` to create a `package.json` file, but this time we'll do something different.
- Step 3: Install express-generator globally and run it to initialize your express application. Express generator will create a barebones Express.js application in the current directory. The created app will already have a basic routing setup and use the built-in middleware for parsing JSON and urlencoded data.

```zsh
% npm install -g express-generator
% npx express-generator
```

- Step 4: Install dependencies

```zsh
% npm install
```

- Step 5: Run your application

```zsh
% DEBUG=expresstest:* npm start
```

## Part 2: Using Middleware

Middleware are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions can perform tasks like logging, parsing the request body, and handling errors.

##### express.urlencoded

This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser. It's already included in the boilerplate provided by express-generator.

##### morgan

Morgan is a HTTP request logger middleware for node.js. Let's use it in our app:

- 1. Install Morgan:

```zsh
% npm install morgan
```

- 2. Navigate to your app.js file. Below the `app.use(express.static(path.join(__dirname, 'public')));` add the following:

```javascript
app.use(morgan("dev"));
```

##### Writing your own middleware

- Create a simple middleware that logs the current date and time for each request.

<details>
<summary>Hint: Completed middleware</summary>

```javascript
app.use((req, res, next) => {
  console.log("Request Time:", Date.now());
  next();
});
```

</details>

## Part 3: Routing with Express Router

Express provides a Router to manage different endpoints in a cleaner and isolated way. Let's create a router for an entity, say 'Books', with endpoints for `GET`, `POST`, `PUT` and `DELETE`.

- Create a new file called `books.js` in the `*routes*` folder.
- In `books.js`, import express, initialize a new Router, and define the routes for `GET`, `POST`, `PUT`, and `DELETE`.

<details>
<summary>Hint: Example of Routing in Express</summary>

```javascript
const express = require("express");
const router = express.Router();

// Implement the routes

// GET /books
router.get("/", function (req, res, next) {
  res.send("GET request to /books");
});

// POST /books
router.post("/", function (req, res, next) {
  res.send("POST request to /books");
});

// GET /books/:bookId
router.get("/:bookId", function (req, res, next) {
  res.send(`GET request to /books/${req.params.bookId}`);
});

// PUT /books/:bookId
router.put("/:bookId", function (req, res, next) {
  res.send(`PUT request to /books/${req.params.bookId}`);
});

// DELETE /books/:bookId
router.delete("/:bookId", function (req, res, next) {
  res.send(`DELETE request to /books/${req.params.bookId}`);
});

module.exports = router;
```

</details>

- In your main `app.js` file, require and use your router.

<details>
<summary>Hint: Including and Using Routes</summary>

```javascript
const bookRoutes = require("./routes/bookRoutes");

app.use("/books", bookRoutes);
```

</details>

## Part 5: Express Params and Error Handling

Params in Express refer to URL parameters which are named segments of the URL, delimited by slashes (/). They capture the values specified at their position in the URL.

- In your `bookRoutes.js`, modify the `GET` method to fetch a book based on its `id` from params.

<details>
<summary>Hint: Example of Using Params</summary>

```javascript
router.get("/:id", (req, res) => {
  res.send(`GET Book with id ${req.params.id}`);
});
```

</details>

Express comes with a built-in error handler, which takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack. This is already included in your app.js file from the express-generator.

### Part 6: Testing the Routes

Testing is a crucial part of developing any web application. It ensures that your app is working correctly and that it can handle expected and unexpected user interactions. In this section, you will learn how to manually test your routes.

There are various ways to send HTTP requests to your application and test the routes, but we will use two common methods: the web browser and the command-line tool `curl`.

#### Method 1: Web Browser

For GET requests, you can easily use a web browser. You just need to navigate to the URL of your application (for example, `http://localhost:3000/books`). The browser will automatically send a GET request to that route.

#### Method 2: Curl

Curl is a powerful command-line tool used to transfer data using various network protocols. It can send HTTP requests to a server, which makes it a great tool for testing routes.

Here are some example curl commands for each of the HTTP methods:

##### GET

```zsh
curl http://localhost:3000/books
```

##### POST

```zsh
curl -X POST -H "Content-Type: application/json" -d '{"title":"Example Book", "author":"John Doe"}' http://localhost:3000/books
```

##### PUT

```zsh
curl -X PUT -H "Content-Type: application/json" -d '{"title":"New Book Title", "author":"Jane Doe"}' http://localhost:3000/books/1
```

##### DELETE

```zsh
curl -X DELETE http://localhost:3000/books/1
```

To run these commands, open a new terminal window (do not stop your running Express app), paste the command, and hit ENTER.

Remember to replace `"Example Book"`, `"John Doe"`, `"New Book Title"`, and `"Jane Doe"` with the actual data you want to send. Also, replace `1` with the actual ID of the book you want to update or delete.

Take the time to test all your routes to ensure they work as expected. If a route doesn't return what you expect, review your route handling code, restart your server, and try again.

### Part 6: Wrapping Up

Well done! You've now deepened your understanding of Express.js by using middleware, defining complex routes, handling errors, and using parameters. Keep practicing to reinforce these skills.

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

- Create a new file called `bookRoutes.js` in the `*routes*` folder.
- In `bookRoutes.js`, import express, initialize a new Router, and define the routes for `GET`, `POST`, `PUT`, and `DELETE`.

<details>
<summary>Hint: Example of Routing in Express</summary>

```javascript
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET Books");
});

router.post("/", (req, res) => {
  res.send("POST Books");
});

router.put("/", (req, res) => {
  res.send("PUT Books");
});

router.delete("/", (req, res) => {
  res.send("DELETE Books");
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

## Part 6: Testing

Test your application by running `node app.js` and sending requests using curl or a tool like Postman or Insomnia to ensure that everything is working as expected.

You should be able to:

- See the log from your custom logger middleware and morgan in the console.
- Send a JSON POST request to your `/books` endpoint and get the JSON echoed back.
- Fetch a book with a particular `id` using the `/books/:id` GET endpoint.
- Hit an invalid endpoint and receive a 404 response.

<details>
<summary>Hint: Testing with curl </summary>
To test the POST endpoint, you can send a JSON object using Postman, Insomnia, or curl:

```zsh
curl -X POST -H "Content-Type: application/json" -d '{"name":"Test Book", "author":"Test Author"}' http://localhost:3000/books
```

And for testing the GET, PUT, and DELETE methods for individual books by id, you can replace :id with an actual id. For example:

```zsh
curl http://localhost:3000/books/123
```

</details>

Well done! You've now deepened your understanding of Express.js by using middleware, defining complex routes, handling errors, and using parameters. Keep practicing to reinforce these skills.

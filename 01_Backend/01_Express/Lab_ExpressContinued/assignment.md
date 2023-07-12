# Solo Lab: Express.js Deep Dive

In this lab, we will continue our exploration of Express.js, delving into middleware, routing, error handling, parameters, and more.

## Part 1: Setting Up The Project

- Step 1: Create a new folder named `ExpressDeepDive` using the `mkdir` command.
- Step 2: Navigate to the new directory and initiate a new Node.js project with a `package.json` file using `npm init -y`.
- Step 3: Install Express, morgan (for logging), and body-parser (for parsing JSON request bodies) via npm:

```zsh
% npm install express morgan body-parser
```

## Part 2: Create Your Express App with create-express-app

Create an express application by running the following command:

```zsh
% npx create-express-app
```

Follow the on-screen instructions to create the application.

## Part 3: Routing with Express

Express provides a Router to manage different endpoints in a cleaner and isolated way. Let's create a router for an entity, say 'Books', with endpoints for `GET`, `POST`, `PUT` and `DELETE`.

- Create a new folder called `routes` and within it, a new file called `bookRoutes.js`.
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

- In your main `app.js` file, require `bookRoutes.js` and use it as middleware.

<details>
<summary>Hint: Including and Using Routes</summary>

```javascript
const bookRoutes = require("./routes/bookRoutes");

app.use("/books", bookRoutes);
```

</details>

## Part 4: Using Middleware

In this section, we will create and use some middleware in our application. Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

- Create a middleware function that logs the current date and time, and the requested method and URL, before moving to the next middleware.

<details>
<summary>Hint: Example of Middleware Function</summary>

```javascript
const logger = (req, res, next) => {
  console.log(`${Date.now()}: ${req.method} ${req.originalUrl}`);
  next();
};

app.use(logger);
```

</details>

- Use `morgan` as middleware for logging HTTP requests.

```javascript
const morgan = require("morgan");

app.use(morgan("dev"));
```

- Use `body-parser` as middleware to parse incoming request bodies in a middleware before your handlers.

```javascript
const bodyParser = require("body-parser");

app.use(bodyParser.json());
```

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

- Error handling in Express is done through middleware functions. Let's create a 404 error middleware function that sends an error message whenever an invalid endpoint is hit.

<details>
<summary>Hint: Example of Error Handling</summary>

```javascript
app.use((req, res, next) => {
  res.status(404).send("404 - Not Found");
});
```

</details>

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

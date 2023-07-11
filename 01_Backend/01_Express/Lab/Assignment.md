# Solo Lab: Express Basics

### Part 1: Setup

_Express_ is a Node.js framework for creating web and network applications. It's built on top of node's http module, providing some more usable and better functionalities like easy ways to handle routes etc.

Let's start a new node project from scratch and create an express app.

- Step 1: Create a new folder using `mkdir` in your terminal. Name it `ExpressBasics`.
- Step 2: Add a `package.json` file. The `package.json` file contains data about your application (such as a name), but most importantly, it includes the list of dependencies to install when running **_npm install_**.
- Step 3: Install express by running in your terminal:

```zsh
% npm install express
```

<details>
<summary>Hint: Creating a package.json file</summary>
In a new folder, open your terminal and run

```zsh
% npm init
```

</details>

### Part 2: First Steps

- 1. In your `ExpressBasics` directory, create a file called `app.js`.
- 2. Next, we want to _require_ express. Remember when you _require_ a module that is built-in or installed, you don't have to specify a path, just the module name.

Now that express is available, what can we do with it? THe biggest use of express is to create an application instantce. We can do this by storing that instance in a constant called _app_.

<details>
<summary>Hint: Requiring express and creating an app</summary>

```javascript
const express = require('express');
const app = express();
```

</details>

This app constant is how we use express. app has many methods available to configure your application and its behavior-- how it responds to requests.

Check out this [documentation](https://expressjs.com/en/4x/api.html) on the methods we can use with our express application.

- 3. Our last step in this section is to **tell your app to listen for requests**. We'll want it to listen for requests on port 1337 and log the message "server listening" upon connection.

<details>
<summary>Hint: Listening to a port</summary>

```javascript
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
```

Try running your app.js file with the node terminal command. If all is working, that means you've got an app instance that can listen on a port for incoming HTTP requests (like GET/). However, it doesn't know what to respons to those requests. We'll fix this in the next section.

</details>

### Part 3: Routes

"Routes" refers to how your app responds to a client request on a particular endpoint (the combination of a path and a request method - GET, POST, and so on).

Examples of endpoints:

- `GET /`
- `GET /puppies`
- `POST /data`

##### Setting up a route in express

express provides route definition methods with the following structure:

`app.METHOD(PATH, HANDLER)`

Where:

- `METHOD` is an HTTP request method (`get`, `post`, `put`, `delete`...)
- `PATH` is a URI the user requested
- `HANDLER` is the function executed when the route is matched.

Check out the docs for app.METHOD [here](https://expressjs.com/en/4x/api.html#app.METHOD)

Example:

```javascript
app.get('/', (req, res) => {
  res.send(
    (
      <html>
        <head>
          <title>My site</title>
        </head>
        <body>
          <h1>Hello World</h1>
        </body>
      </html>
    )``
  );
});
```

In general, handler functions receive three objects: - `req`: and object representing the **request** - `res`: an objecting enabling Express to build and send a **response** for that specific request - `next`(optional): a function that sends the request to the next handler in a chain (needed for middleware and multi-step routing)

### Part 4: Practice

- Set up 3 routes in your express app. They will respond to `GET` on the paths: `/`, `/puppies`, and `/kittens`.
- When finished, you should be able to run your application (`node app.js`) and open it in the browser:

<details>
<summary>Hint: Here's the complete source code</summary>

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
        <head>
            <Title>Cars and Trucks</Title>
        </head>
        <body>
            <h1>The latest cars and trucks!</h1>
        </body>
    </html>`);
});

app.get('/cars', (req, res) => {
  res.send(`cars`);
});

app.get('/trucks', (req, res) => {
  res.send(`trucks`);
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
```

</details>

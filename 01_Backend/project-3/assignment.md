# Pokedex Project: Part 1

<details open>
<summary><h3>Part 1: Introduction</h3></summary>

### Context and Goals

We've seen how Node.js enables JavaScript to interact with the computer. Express helps our Node application respond to HTTP requests. Let's apply these tools to create something consumer-focused: a simple Pokedex app. This project will dive deep into Express features.

We will build:

- A homepage similar to a Pokedex, that lists all Pokemon caught.
- A Details page, that shows the complete Pokemon details.
- A form to post a new Pokemon catch. (not right now, but in the next workshop)

    <img src="https://github.com/se7en-illa/TTP-Summer-2023/assets/71786791/ec13e64a-eb82-4b62-9083-63bd6a66b711" >
    <img src="https://github.com/se7en-illa/TTP-Summer-2023/assets/71786791/cebcf4d1-e89e-40a8-96fe-31200ee5b34b" >

Important note: Right now, there will be no persistent database in our application; we will simply be using a JavaScript array to hold objects in the server's RAM.

### Setup

Start off by forking and cloning [this repository](https://github.com/se7en-illa/pokedex-boilerplate).

### Project Structure

The initial project contains an app.js file and a /public folder with some assets. You can ignore the public folder for now - it's not currently being used in the app and you will work on it in a future step.

For now, let's investigate app.js - it contains a bare-bones express application:

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
```

Notice that we currently have a single defined route.

### NPM

##### npm install

When cloning a node project, your first step is usually running `npm install` before testing. By invoking `npm install` without specifying any package, npm will look into the projects listed dependencies (inside `package.json`) and install all of them.

##### npm scripts

Remember that one of `package.json`'s roles was to define scripts. We already provided a `start` script that handles the launch of the application.

SIDE NOTE: You can imagine that having different scripts could be useful. For example, on our production server we might prefer node to nodemon. We could use separate scripts for serve vs. develop. A test script would run our specs, and so on.

</details>

<details>
<summary><h3>Part 2: Logging Middleware</h3></summary>

### Logging Middleware

Your first task is to add some logging middleware that will fire _for every incoming request_. In the long run, this kind of utility will help us debug our application.

##### What is a Middleware again?

Middleware is any function that is invoked by the Express.js before your final request handler is, and thus sits in the **middle** between a raw request and the final intended route.

Here's the general form:
`app.use([[function here]])` registers some function to run for **each incoming request.**

##### morgan

One of the most popular logging middlewares is morgan, created by the express team. Passing it to app.use() makes it intercept all request and responses - every time you send a response, Morgan logs the request and response information. Morgan is also very configurable, with lot's of "modes" (we recommend using the "dev" mode during development). For example, after installing morgan (`npm install morgan`):

```javascript
const morgan = require("morgan");

app.use(morgan("dev"));
```

</details>

<details>
<summary><h3>Part 3: Non-Persistent Server-Side Data Storage</h3></summary>

### Setting up a pokeBank.js module

Great - The application is all set up and you have a sample route. We need data for our real routes, though. In the future we will integrate our Pokedex with a proper database management system, but for now we will create a provisory way to store the information:

Make a pokeBank.js file in your project directory. This module will be responsible for holding all of the Pokemon and giving us functions for interacting with them.

##### Sample Data

<details>
<summary>Copy the following code to your pokeBank.js file:</summary>

```javascript
const data = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    trainer: "Ash",
    date: new Date(Date.now() - 15000000),
    image:
      "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
  },
  {
    id: 2,
    name: "Charizard",
    type: "Fire/Flying",
    trainer: "Ash",
    date: new Date(Date.now() - 90000000),
    image:
      "https://www.giantbomb.com/a/uploads/square_medium/13/135472/1891763-006charizard.png",
  },
  {
    id: 3,
    name: "Bulbasaur",
    type: "Grass/Poison",
    trainer: "Ash",
    date: new Date(Date.now() - 80000000),
    image:
      "https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png",
  },
  {
    id: 4,
    name: "Squirtle",
    type: "Water",
    trainer: "Ash",
    date: new Date(Date.now() - 70000000),
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
  {
    id: 5,
    name: "Jigglypuff",
    type: "Normal/Fairy",
    trainer: "Misty",
    date: new Date(Date.now() - 60000000),
    image:
      "https://archives.bulbagarden.net/media/upload/3/3a/0039Jigglypuff.png",
  },
  {
    id: 6,
    name: "Gengar",
    type: "Ghost/Poison",
    trainer: "Brock",
    date: new Date(Date.now() - 50000000),
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
  },
  {
    id: 7,
    name: "Eevee",
    type: "Normal",
    trainer: "Gary",
    date: new Date(Date.now() - 40000000),
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
  },
  {
    id: 8,
    name: "Snorlax",
    type: "Normal",
    trainer: "Ash",
    date: new Date(Date.now() - 30000000),
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
  },
  {
    id: 9,
    name: "Mewtwo",
    type: "Psychic",
    trainer: "Red",
    date: new Date(Date.now() - 20000000),
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
  },
  {
    id: 10,
    name: "Lugia",
    type: "Psychic/Flying",
    trainer: "Silver",
    date: new Date(Date.now() - 10000000),
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
  },
];
```

</details>

### Defining the pokeBank.js functions

You now have a data array with all the Pokemon, but we do not want to make this array directly accessible to the rest of our app; it will safely remain as a private variable inside the pokeBank module.

What we will make available, using module.exports, are functions for listing and finding Pokemon. Add the code below to the bottom of your pokeBank module.

```javascript
const list = () => {
  return [...data]; // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
};

const find = (id) => {
  const pokemon = data.find((pokemon) => pokemon.id === +id);
  return { ...pokemon }; // Again, we copy the post data before returning so the original information is safe.
};

module.exports = { list: list, find: find };
```

<details>
<summary>Hint: This is what your pokeBank.js file should look like so far.</summary>

```javascript
const data = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    trainer: "Ash",
    date: new Date(Date.now() - 15000000),
  },
  {
    id: 2,
    name: "Charizard",
    type: "Fire/Flying",
    trainer: "Ash",
    date: new Date(Date.now() - 90000000),
  },
  {
    id: 3,
    name: "Bulbasaur",
    type: "Grass/Poison",
    trainer: "Ash",
    date: new Date(Date.now() - 80000000),
  },
  {
    id: 4,
    name: "Squirtle",
    type: "Water",
    trainer: "Ash",
    date: new Date(Date.now() - 70000000),
  },
  {
    id: 5,
    name: "Jigglypuff",
    type: "Normal/Fairy",
    trainer: "Misty",
    date: new Date(Date.now() - 60000000),
  },
  {
    id: 6,
    name: "Gengar",
    type: "Ghost/Poison",
    trainer: "Brock",
    date: new Date(Date.now() - 50000000),
  },
  {
    id: 7,
    name: "Eevee",
    type: "Normal",
    trainer: "Gary",
    date: new Date(Date.now() - 40000000),
  },
  {
    id: 8,
    name: "Snorlax",
    type: "Normal",
    trainer: "Ash",
    date: new Date(Date.now() - 30000000),
  },
  {
    id: 9,
    name: "Mewtwo",
    type: "Psychic",
    trainer: "Red",
    date: new Date(Date.now() - 20000000),
  },
  {
    id: 10,
    name: "Lugia",
    type: "Psychic/Flying",
    trainer: "Silver",
    date: new Date(Date.now() - 10000000),
  },
];

const list = () => {
  return [...data];
};

const find = (id) => {
  const pokemon = data.find((pokemon) => pokemon.id === +id);
  return { ...pokemon };
};

module.exports = { list: list, find: find };
```

</details>
</details>

<details>
<summary><h3>Part 4: Route Handlers</h3></summary>

### Route Handlers

Now that we have a way to access our Pokemon data, we need to build out our routes.

- **Step 1: Create a route for the homepage, which will display a list of all Pokemon.**

The homepage route should respond to GET requests at /. It should respond with a string of HTML that lists all Pokemon.

<details>
<summary>Hint: Creating Routes</summary>
To create a route, you'll need to use the app.get() or app.post() methods provided by Express. The first argument is the path for the route, and the second argument is a callback function that takes two parameters: req (the request object) and res (the response object).
</details>

<details>
<summary>Hint: Mapping over the array sounds like a good plan...</summary>
For the homepage route, you'll need to create a GET route for the path '/'. In the callback function, use the res.send() method to send a string of HTML. You can use the pokeBank.list() function to get an array of all Pokemon, then use map or loop to create an HTML string that includes all the Pokemon.
</details>

You might notice a stray comma between posts. arr.map() returns an array of elements, but we're injecting that array into a string. This means that the array elements have to be JOINED together. By default, JavaScript joins elements with a comma separater between elements. If you'd like to get rid of those pesky commas, consider running join manually. Here are the MDN docs if you'd like a nudge in the right direction.

In a bonus step at the end of this workshop, we'll use a fancy HTML template tag, and we will not need to manually join arrays.

### Static Routing

Next, we need to make sure that the express application serves up the contents of the files it finds in the `/public` folder. Notice that by default this folder is being completely ignored by your application - if you want express to look for files in this folder and serve them, you have to configure it to do so.

[Read the documentation for express.static](https://expressjs.com/en/starter/static-files.html) and incorporate static routing into your application for the `public` directory.

Now, everything we put in `public` will be automatically accessible via URI path, as if it was actually a filepath (remember, normally it is not!). That includes `public/style.css`, which the browser can request with `GET /style.css`.

What other reasons might we prefer this kind of static routing? Here are two frequent use cases:

- A folder of dozens of images that form part of our website's presentation
- A folder of javascript files, so that code can be downloaded & run on the client side

Imagine having to write individual routes to serve up every one of those potential files. Static routing takes care of that for us, automatically; now all we need to do is drop a file into `public` somewhere, and Express will automatically route requests for it.

###### Is it working?

When its time to see if everything went as planned, visit http://localhost:3000/logo.png and you should see the Pokemon logo.

### Styling the initial route

Great job - you have a main route that lists all of the posts and static route is serving everything in the public folder.

Let's combine those two to make a nice-looking display of Pokemon, shall we? Edit your main route so that it returns some HTML like this:

```javascript
`<!DOCTYPE html>
<html>
  <head>
    <title>My Pokedex</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="pokemon-list">
      <header><img src="/logo.png" />Pokedex</header>
      ${pokemon
        .map(
          (pokemon) => `
      <div class="pokemon-item">
        <img class="pokemon-img" src={pokemon.image} />
        <p>
          <span class="pokemon-position">${pokemon.id}. ▲</span>${pokemon.name}
          <small>(Trained by ${pokemon.trainer})</small>
        </p>
        <small class="pokemon-info">
          Type: ${pokemon.type} | Date Caught: ${pokemon.date}
        </small>
      </div>
      `
        )
        .join("")}
    </div>
  </body>
</html>
`;
```

The main differences between this and what you had before are:

- Added `<style>` tag to load the style.css file.
- Added `<header>` tag to display the “Pokemon” logo.
- More detailed markup to display each post, including more information.

### Dynamic Routing with Parameters

- **Create a route for individual Pokemon, which will display detailed information about a single Pokemon.**

Right now, our server has one route. This means users can do just one thing: see a feed of all pokemon. We want more routes, starting with a route that allows the user to see the complete details of one pokemon.

##### Request Parameters

Another way of thinking of routes is that they "catch" requests.

```javascript
app.get("/pokemon/:id", someFunction);
// would catch the request GET /pokemon/7 (and then call someFunction, passing in req and res).
```

**What's this new :id part of the URI?** The colon : is a trick that Express provides to define particular portions of the URI string as variables. In other words, in posts/:id, the :id portion can be anything. The variable and its value are stored on the req.params object.

```javascript
// say that a client GET requests the path /pokemon/7
app.get("/pokemon/:id", (req, res) => {
  console.log(req.params.id); // --> '7'
});
```

Here is another example to make this clear:

```javascript
// say that a client GET requests the path /trainers/ash
app.get("/trainers/:name", (req, res) => {
  console.log(req.params.name); // --> 'ash'
});
```

### Add a single-pokemon route

The Pokemon details route should respond to GET requests at /pokemon/:id, where :id is the id of the Pokemon we want to display. It should respond with a string of HTML that displays detailed information about the Pokemon.

Your route should look (almost) like this:

```javascript
app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const post = pokeBank.find(id);
  res.send(/* The HTML document string here */);
});
```

For the HTML document string, you can reuse most of the string used in the original route and add the post details (title, author name, date and content).

<details>
<summary>Hint: Writing Details Route</summary>
For the Pokemon details route, you'll need to create a GET route for the path '/pokemon/:id'. The ':id' in the path is a route parameter, which you can access in your callback function with req.params.id. Use the pokeBank.find() function to get the Pokemon with the given id, then use res.send() to send a string of HTML that includes the Pokemon's details. Remember to handle the case where a Pokemon with the given id doesn't exist.
</details>

##### Adding links to post details in the main route

We can link to this new page in the main route. Add links to the loop in the html document string so that each post title links to the correct post details view.

An example of how you could do so is below:

```javascript
<a href="/pokemon/${pokemon.id}">${post.title}</a>
```

Now we can click on Pokemon names and view their details.

<details>
<summary>Hint: Completed Routes</summary>

```javascript
// Import the necessary modules
const express = require("express");
const morgan = require("morgan");
const pokeBank = require("./pokeBank");

// Initialize the Express application
const app = express();

// Use the Morgan middleware for logging
app.use(morgan("dev"));

// Define the homepage route
app.get("/", (req, res) => {
  const pokemonList = pokeBank.list();
  let html = "<h1>Pokedex</h1>";
  pokemonList.forEach((pokemon) => {
    html += `<p><a href="/pokemon/${pokemon.id}">${pokemon.name}</a></p>`;
  });
  res.send(html);
});

// Define the Pokemon details route
app.get("/pokemon/:id", (req, res) => {
  const pokemon = pokeBank.find(req.params.id);
  if (!pokemon) {
    res.status(404).send("Pokemon not found");
  } else {
    let html = `<h1>${pokemon.name}</h1>`;
    html += `<p>Type: ${pokemon.type}</p>`;
    html += `<p>Trainer: ${pokemon.trainer}</p>`;
    html += `<p>Date: ${pokemon.date}</p>`;
    res.send(html);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
```

</details>

</details>

<details>
<summary><h3>Part 5: Custom Error Handling</h3></summary>

If a user tries to visit a page that doesn't exist (like http://localhost:1337/pokemon/9999), they should see a nice 404 error page instead of the default Express 404 page. You can accomplish this by adding a middleware function at the end of your middleware stack that catches any requests that haven't been handled by previous routes or middleware functions.

We've got a couple different ways to accomplish this.

- Option 1: Check to see if pokeBank.find() returned an actual post and if not, send them a Not Found page instead of the post detail HTML.
- Option 2: Check to see if pokeBank.find() returned an actual post and if not, throw an error, to be caught by an Express error handler.
- Option 3: Check to see if pokeBank.find() returned an actual post and if not, create an error, and pass that error to the next callback to be handled by an Express error handler.

Option 1 would look something like this:

```javascript
app.get("/pokemon/:id", (req, res, next) => {
  const id = req.params.id;
  const post = pokeeBank.find(id);
  if (!pokemon.id) {
    // If the post wasn't found, set the HTTP status to 404 and send Not Found HTML
    res.status(404);
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Pokedex</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header><img src="/logo.png"/>Pokedex</header>
      <div class="not-found">
        <p>Pika pika... Page Not Found</p>
        <img src="/pikachu-404.gif" />
      </div>
    </body>
    </html>`;
    res.send(html);
  } else {
    // ... Otherwise, send the regular post detail HTML
  }
});
```

This approach works just fine. But it might get repetitive to have to handle errors separately for each individual route.

Option 2 would look something like this:

```javascript
app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = find(id);
  if (!pokemon.id) {
    // If the post wasn't found, just throw an error
    throw new Error("Not Found");
  }
  // ... Otherwise, send the regular post detail HTML
});
```

Try this out yourself. You'll notice a few things:

- The server didn't shut down. It's still listening for requests.
- The error was logged in the terminal, including a stack trace. That's useful.
- The error is displayed in the browser, including a stack trace. That's... not so great.

We certainly don't want to send the server's stack traces to the browser. Not only does it make for a bad user experience, it may also pose a security vulnerabilitity.

This is the built-in Express error handler at work. It's good to have some default error handling middleware built in to Express. Otherwise a single bad request could shut down the server. But we may want to provide our own error handler.

- Create an error handler, placed somewhere after all the other routes (e.g. just above app.listen()). It should respond with a 404 status code and some kind of friendly "Not Found" page.

Remember that error handlers are Express middleware, much like morgan or express.static. But they're special in that they take four parameters: (err, req, res, next).

Option 3 is particularly useful for catching asynchronous errors. We don't have any asynchronous code yet, since all of our data is stored in memory. We'll get a chance to use that next callback in a future workshop.

</details>

<details>
<summary><h3>Part 6: Extras</h3></summary>

Congratulations! You've built a simple Pokedex app using Express. In the process, you've learned about Express routing, middleware, error handling, and serving static assets. In the next workshop, we'll expand on this foundation by adding a form for posting new Pokemon and implementing persistent data storage.

Until then, we'll further refine our Pokedex application and refactor the codebase (so it's going be be easier to maintain and expand this project with more features in the future).

<details>
<summary><h5>Bonus 1: Date Formatting</h5></summary>

Right now, the Pokemon caught dates are being displayed like this:

Wed Jan 03 2018 09:25:11 GMT-0500 (EST)

That's the default formatting applied to a date object in JavaScript when you convert it to a string, but instead we want to display some nice, human readable string with relative time - something like:

Just Now
A Few minutes ago
An hour ago
Yesterday
And so on...
There are a few possible approaches to tackle this:

- The `getTime()` method on the Date prototype returns a numerical vaue corresponding to the date. The nice thing about having a plain numerical value is that you can make calculations with it

- Knowing how to convert dates into a numerical representation, you could create a new date with the current time get the difference (subtract) between right now and the each post's times.

- Knowing that the difference is in milliseconds, you can then use a few conditionals to stablish the magnitude of difference and return the appropriate, human-readable wording.

...OR...

- Knowing that working with dates is a very common task that developers do over and over again, instead of reinventing the wheel - what about checking npm for some existing module that does just that? We'll cut you some slack: Check [Node time-ago](https://www.npmjs.com/package/node-time-ago)

Note: Malicious packages can exist in any package distribution system manager for any language. The npm registry does a decent job of spotting and removing malicious code, but ultimately YOU are responsible for what you install. Make sure that any packages that you are installing are well known in the community and, when in doubt, inspect the source before you npm install it.

</details>

<details>
<summary><h5>Bonus 2: HTML Document String Refactor</h5></summary>

You just finished all functionality in the first part of our Pokedex application - we will keep working on this project in the future and add more routes and functionality. But before wrapping up, it's time for some housekeeping:

So far, you have two routes, but because we're producing entire html document string for each route, we already have around 80 lines of code in app.js - can you imagine how quickly this can get out of hand when we add a few additional routes and functionality?

As you know, Node provides a module system. Among other things, a module system can help developers organize code by splitting it into multiple files - and that's exactly what you are going to do next: you're going to move the html document string generation to individual functions in their own modules.

#### Tagged Template Literals

We've been using ES6 template literals a lot throughout the whole curriculum and specially now in our HTML document templates. They're very useful because they allow us to write multi-line strings and do value interpolation (${expression}).

One feature that comes along with template literals and that we didn't use so far, is the ability to tag them.

Tagging a template literal gives additional control on how to interpret & process the template using any additional logic - it looks like this:

```javascript
// regular template literal
`hello ${name}!`;

// tagged template literals
tag`hello ${name}!`;
```

By default, the JavaScript language doesn't provide any tags, but it gives developers the ability to create their own - consequently there are tons of tag functions available on NPM.

We're not going to dive into creating your own tagged template literals right now, instead we're going to install an HTML tagged template literal to help working with HTML templates.

First, install "html-template-tag":

```zsh
% npm install html-template-tag
```

The html-template-tag package adds the following functionality to the default template literals:

1. Autoescaping - Escaping is the process of converting values that will be interpolated to be properly displayed as plain text (turning angle brackets into < and >, for example) so they are not interpreted as tags. Interpolating values without escaping can lead to cross-site scripting (XSS) vulnerabilities.

2. Array joining - The html tagged template literal automatically detects when you're trying to interpolate an array, and will automatically join it without commas or spaces.

Finally, as a side-effect (that has nothing to do with the html-template-tag package in particular), some code editors will recognize when the tag in a template literal has the name of a recognizable syntax (like "html", "css", "sql" etc) and correctly apply syntax highlight and autocomplete.

- Install, require and use the html-template-tag in your HTML document templates.

...

NOTE: EDITOR SUPPORT FOR SYNTAX HIGHLIGHT INSIDE TAGGED TEMPLATE LITERALS:

<table>
    <tr>
        <th>Editor</th>
        <th>Supported</th>
    </tr>
    <tr>
        <td>Atom</td>
        <td>Yes (natively)</td>
    </tr>
    <tr>
        <td>VSCode</td>
        <td>No, but there are extensions available</td>
    </tr>
    <tr>
        <td>Sublime Text</td>
        <td>No, but there are some alternatives</td>
    </tr>
</table>

</details>
</details>

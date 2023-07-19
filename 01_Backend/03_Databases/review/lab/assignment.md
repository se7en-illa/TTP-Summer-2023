# Solo Lab: Sequelize and Express Integration

## Part 1: Setup

Express is a Node.js framework for creating web and network applications, and Sequelize is a promise-based Node.js ORM for Postgres. In this lab, we're going to integrate Sequelize into our Express app and create some models and associations.

Let's start a new node project from scratch and create an express app.

- Step 1: Create a new folder using `mkdir` in your terminal. Name it `ExpressSequelizeIntegration`.
- Step 2: Add a `package.json` file. You can create this by running `npm init -y` in your terminal.
- Step 3: Install express, sequelize, pg and pg-hstore by running in your terminal:

```zsh
% npm install express sequelize pg pg-hstore
```

## Part 2: Initializing Express and Sequelize

1. In your `ExpressSequelizeIntegration` directory, create a file called `app.js`.
2. Now, we want to require express and sequelize. Instantiate express and sequelize with your postgres configuration.

<details>
<summary>Hint: Requiring express and sequelize, initializing sequelize</summary>

```javascript
const express = require("express");
const Sequelize = require("sequelize");

const app = express();
const sequelize = new Sequelize(
  "postgres://username:password@localhost:5432/dbname"
);
```

Note: Replace `username`, `password`, `localhost`, `5432` and `dbname` with your own Postgres configuration.

</details>

## Part 3: Models and Associations

In this part, let's create two models: User and BlogPost. The relationship between these models is "one-to-many", meaning a User can have multiple BlogPosts, but a BlogPost can only belong to one User.

- Step 1: Create `User` and `BlogPost` models using Sequelize's `define` method.
- Step 2: Define the association between the two models.

<details>
<summary>Hint: Creating models and defining associations</summary>

```javascript
const User = sequelize.define("user", {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
});

const BlogPost = sequelize.define("blogpost", {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
});

User.hasMany(BlogPost); // Set one-to-many relationship
BlogPost.belongsTo(User); // Set one-to-one relationship with User
```

</details>

## Part 4: Sync Models with Database

- Step 1: Sync models with the database using Sequelize's `sync` method. This will create tables in the database according to your models.

<details>
<summary>Hint: Syncing models with the database</summary>

```javascript
sequelize
  .sync()
  .then(() => {
    console.log("Models synced with database");
  })
  .catch((err) => console.error(err));
```

</details>

## Part 5: Express Routes and Sequelize Queries

We will create two routes:

- `GET /users`: This route should respond with all users.
- `POST /users`: This route should create a new user.

In these routes, use Sequelize to query the database.

<details>
<summary>Hint: Creating routes and using Sequelize queries</summary>

```javascript
// bodyParser middleware is required to parse the body of POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/users", (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((err) => console.error(err));
});

app.post("/users", (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
});
```

</details>

## Part 6: Running the App

Our last step in this section is to tell your app to listen for requests. We'll want it to listen for requests on port 1337 and log the message "Server listening" upon connection.

<details>
<summary>Hint: Listening to a port</summary>

```javascript
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
```

</details>

## Part 7: Testing the App

You can test your application using Postman or a similar tool. Send a GET request to `http://localhost:1337/users` to retrieve all users and a POST request to `http://localhost:1337/users` to create a new user. Make sure to include `username` and `email` in the body of your POST request.

Congratulations, you have successfully integrated Sequelize into an Express app and created routes to retrieve and create users.

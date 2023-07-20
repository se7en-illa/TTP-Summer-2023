# Pokedex Project: Part 2

<details open>
<summary><h3>Part 1: Introduction</h3></summary>

### Context and Goals

In the previous part of the Pokedex project, we created a simple Express application that served a list of Pokemon and their details. However, the data was not persistent and was stored in the server's RAM. In this part, we will take a step further and integrate our application with a PostgreSQL database using Sequelize. This will allow us to store and retrieve data in a persistent manner.

We will build:

- A PostgreSQL database with multiple tables to store Pokemon data.
- Sequelize models and associations to interact with the database.
- Express routes to create, read, update, and delete Pokemon data.

### Setup

Start off by forking and cloning [this repository](https://github.com/se7en-illa/pokedex-boilerplate-v2). You can also continue from your Pokedex Part 1 repository if you prefer.

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
<summary><h3>Part 2: Creating the Database</h3></summary>

### Creating the Database

The first step in integrating our application with a PostgreSQL database is to create the database itself. We will use the `psql` command-line interface for PostgreSQL to do this.

Open a terminal and type the following command to start `psql`:

```bash
psql
```

Once you're in the `psql` interface, you can create a new database with the following command:

```sql
CREATE DATABASE pokedex;
```

This will create a new PostgreSQL database named `pokedex`. You can exit `psql` by typing `\q` and pressing Enter.

</details>

<details>
<summary><h3>Part 3: Sequelize Setup</h3></summary>

### Sequelize Setup

Now that we have a database, we can start setting up Sequelize. Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication, and more.

First, we need to install Sequelize and the PostgreSQL driver for Node.js. Run the following command in your terminal:

```bash
npm install sequelize pg
```

Next, we need to initialize Sequelize. Create a new file in your project directory named `db.js` and add the following code:

```javascript
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pokedex", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
```

This code creates a new Sequelize instance and connects to our `pokedex` database. Replace `"postgres"` and `""` with your PostgreSQL username and password, respectively. If you're running PostgreSQL locally and didn't set a password, you can leave these as they are.

</details>

<details>
<summary><h3>Part 4: Creating Models</h3></summary>

### Creating Models

With Sequelize set up, we can now create models for our data. Models in Sequelize are the essence of Sequelize. A Sequelize Model represents a table in the DB, and every instance of the model represents a row in the table.

Let's start by creating a model for Pokemon. Create a new file in your project directory named `models/Pokemon.js` and add the following code:

```javascript
const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Pokemon = db.define("Pokemon", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trainer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Pokemon;
```

This code defines a new Sequelize model named `Pokemon` with the fields `name`, `type`, `trainer`, `date`, and `image`. All fields are of type `STRING` except for `date`, which is of type `DATE`.

</details>

<details>
<summary><h3>Part 5: Creating Associations</h3></summary>

### Creating Associations

Sequelize supports the standard associations between models: One-To-One, One-To-Many, and Many-To-Many. For this project, we will create a One-To-Many association between Trainers and Pokemon: a Trainer can have many Pokemon, but each Pokemon belongs to one Trainer.

First, we need to create a model for Trainers. Create a new file in your project directory named `models/Trainer.js` and add the following code:

```javascript
const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Trainer = db.define("Trainer", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Trainer;
```

Next, we need to define the association in our models. Add the following code to the bottom of `models/Pokemon.js`:

```javascript
const Trainer = require("./Trainer");

Pokemon.belongsTo(Trainer);
```

And add the following code to the bottom of `models/Trainer.js`:

```javascript
const Pokemon = require("./Pokemon");

Trainer.hasMany(Pokemon);
```

This code sets up a One-To-Many association between Trainers and Pokemon. The `belongsTo` method in the `Pokemon` model creates a foreign key `trainerId` in the `Pokemon` table, and the `hasMany` method in the `Trainer` model lets Sequelize know that a Trainer can be associated with many Pokemon.

</details>

<details>
<summary><h3>Part 6: Creating Routes</h3></summary>

### Creating Routes

With our models and associations set up, we can now create routes to interact with our data. We will create routes to create, read, update, and delete Pokemon.

- **Create a route to get all Pokemon.**

```javascript
const Pokemon = require("./models/Pokemon");

app.get("/pokemon", async (req, res) => {
  const pokemon = await Pokemon.findAll();
  res.json(pokemon);
});
```

- **Create a route to get a single Pokemon by ID.**

```javascript
app.get("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});
```

- **Create a route to create a new Pokemon.**

```javascript
app.post("/pokemon", async (req, res) => {
  const newPokemon = await Pokemon.create(req.body);
  res.json(newPokemon);
});
```

- **Create a route to update a Pokemon by ID.**

```javascript
app.put("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.update(req.body);
    res.json(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});
```

- **Create a route to delete a Pokemon by ID.**

```javascript
app.delete("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Pokemon not found");
  }
});
```

These routes use the Sequelize methods `findAll`, `findByPk`, `create`, `update`, and `destroy` to interact with the database. Note that these methods are asynchronous and return Promises, so we use the `async/await` syntax to handle them.

</details>

<details>
<summary><h3>Part 7: Testing</h3></summary>

### Testing

Now that we have our routes set up, we can test them using a tool like Insomnia. Start your server by running `npm start` in your terminal, then use Insomnia to send requests to your routes.

- **GET /pokemon** should return a list of all Pokemon.
- **GET /pokemon/:id** should return a single Pokemon with the given ID, or a 404 error if the Pokemon does not exist.
- **POST /pokemon** should create a new Pokemon and return it.
- **PUT /pokemon/:id** should update the Pokemon with the given ID and return it, or a 404 error if the Pokemon does not exist.
- **DELETE /pokemon/:id** should delete the Pokemon with the given ID and return a 204 status code, or a 404 error if the Pokemon does not exist.

</details>

<details>
<summary><h3>Part 8: Conclusion</h3></summary>

### Conclusion

Congratulations! You've successfully integrated your Express application with a PostgreSQL database using Sequelize. You've created models, defined associations, and set up routes to interact with your data. You've also learned how to use the `async/await` syntax to handle asynchronous operations in JavaScript.

In the next part of the Pokedex project, we will add a front-end to our application and learn how to serve static files with Express.

</details>

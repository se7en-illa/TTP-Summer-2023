# Lab: Sequelize Basics

### Introduction

Sequelize is an Object-Relational Mapper (ORM), which streamlines working with relational databases.

In this lab, we'll cover:

- Connecting to a database
- Defining a Sequelize model
- Creating a Sequelize instance
- Class methods vs instance methods

### Setup

[Fork]() and clone this repo to your local machine -- cd into it and `npm install`.

Take a look around the starting point:

- There's no Express in this application, we'll just be using Sequelize all on its own
- We have a `database/` directory, including three files:

  - `db.js` is where we define our database connection (db)
  - `plant.js` is where we'll define a Plant model

  - `index.js` is a good place to export our models and define any associations

- There's a file called `seed.js`, which we can run to seed our database with dummy data
- Our `package.json` includes a "seed" script, which we will run in a following step with `npm run seed` from the terminal.

### Connecting to PostgreSQL

##### new Sequelize()

Connecting to Sequelize is a two step process:

1. Define a connection object, `db`. We'll initialize the database connection object with the URL for the database to connect to, as well as any other connection details.

2. Sync to the database, `db.sync`.

Think of the first step as "writing a mailing address on an envelope" and the second step as "dropping the letter in the mailbox". To illustrate this, suppose we write an invalid address on the envelope. Step one wouldn't throw an error, but step two certainly would. We may get the letter back with an error message from the post office, such as "Could not deliver package: address does not exist".

Let's do **step one** now. Open up `database/db.js` and add the following code:

```javascript
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/garden");

module.exports = db;
```

What's going on with that URL? Here are some noteworthy observations:

- It uses the `postgres` protocol, rather than `http`.
- The host is `localhost`. Note, in a production application, the database will most likely be hosted on a completely different server.
- We've specified a port of 5432. This is conventionally the port that Postgres runs on.
- The database name is "garden". If you haven't created that database just yet, that's fine. We'll do that in the next step.

##### db.sync()

Now that we've created a database connection object, it's time to sync to the database. This is the step wherein Sequelize actually sends a connection request to the database. We'll do this in the seed file.

Open up `seed.js` and add the following code to the seed function:

```javascript
// ^^^ Code above omitted for brevity
console.log(cyan("📡 Connecting to the database..."));
// Connect to the database
await db.sync(); // 👈 Add this line

// vvv Code below omitted for brevity
```

Notice that `db` is already imported for you at the top of the file. In fact, it looks like it's imported from `./database`, which actually resolves to `./database/index.js`. If you ask to require a directory, instead of a file, Node will look for a special file called `index.js` inside of that directory. Check out the `./database/index.js` file and make sure you understand where it imports and then exports the `db` connection object.

Now, let's **run the seed file**! In the terminal, you can run it with `node seed` or you can use the provided npm script: `npm run seed`.

Did you see a big error message? If so, try to figure out the source of the error. Check out the Hint below if you'd like.

<details>
<summary>Hint: Big error message</summary>

You're probably seeing an error like `error: database "garden" does not exist`

That makes sense. We haven't created a database yet! It's as if we've asked for our letter to be delivered to a non-existent address.

Sequelize helpfully informs us that we could not connect. All we need to do now is **create that database**. You can probably do so with `createdb garden` from the terminal, or you can open up a psql shell and run `CREATE DATABASE garden`;

</details>

You should now see something like `SELECT 1+1 AS` result in your terminal and no error messages. Now, it's time to add our first table to this new garden database.

### Creating a Model

##### db.define()

Our database has no tables in it. Let's fix that! With Sequelize, we create Models, where each model corresponds to a table in Postgres.

Open up `database/plant.js` and add the following code:

```javascript
const Sequelize = require("sequelize");
const db = require("./db");

const Plant = db.define("plant", {
  // we will add fields to Plant here
});

module.exports = Plant;
```

Here are some observations about this code:

- We are importing the `db` connection object from `./db`. There is no need re-create the connection in every file.
- We call the `db.define` method to create a new model. The **_first argument_** is a **string**, which determines the **name of the Postgres table**. The **_second argument_** is an **object**, which we will use to **add fields (columns) to the model (table)**.
- We are importing the Sequelize library, but we're not using it just yet

Let's re-run the seed file: `npm run seed` and open up the database in our GUI (e.g. Postico, Postbird, Beekeeper Studio, etc). You should now see a table in our gardens database! Open it up and you should see three columns: **id**, **createdAt**, and **updatedAt**.

If you do not have a GUI installed, you should install one now. If you are using a Mac, install Postico. If you are not using a Mac, you can use a similar application, such as postbird, Beekeeper Studio or pgAdmin, or you can examine your database with psql.

Observe that we passed 'plant' (singular) to `db.define`, and the table we see is called 'plants' (plural). By convention, `db.define` expects a **singular noun**, and Sequelize will pluralize that noun to name the table in our database.

If we run `db.define('car')`, it would name the table 'cars'.

If we run `db.define('goose')`, it would name the table 'geese'. Wow Sequelize, you're so smart!

If we run `db.define('moose')`, it... would name the table 'mooses'. Don't worry Sequelize, pobody's nerfect.

##### Add a Field

We've created the garden database and the Plant model. Now let's add some fields to the model. These fields will also appear in the plants table as columns.

Open up `database/plant.js` and add a "name" field, like this:

```javascript
const Plant = db.define("plant", {
  name: {
    type: Sequelize.STRING,
  },
});
```

Note that the name field has a type of `Sequelize.STRING`. Every field must have a type. Sometimes, you'll see a field defined with only the type, like this: `name: Sequelize.STRING`, instead of the longer `name: { type: Sequelize.STRING } `as above.

A few other common Sequelize types include:

- Sequelize.INTEGER // 0,1,2,3
- Sequelize.BOOLEAN // true,false
- Sequelize.TEXT // "some very very large text...."
- Sequelize.ENUM('red', 'blue', 'green') // can only be one of the given values

Now that we've modified our model, let's **_re-run the seed file_** and see how the changes have been applied to the table.

Let me guess, you don't see any changes in the table? No new name column, huh? Let's fix that in the next step.

##### db.sync({force: true})

By default, Sequelize is very cautious when it syncs to the database. **Sequelize generates SQL statements to send to the database**, and you can view them in the terminal. You'll probably see one of them like this:

`CREATE TABLE IF NOT EXISTS "plants" ...`

If Sequelize sees that a "plants" table already exists, it won't try to create it again. This means our new `name` column won't be added. Sequelize is cautious for good reason: modifying the database schema by accident is an easy mistake to make. But in this case, we really do want to modify the schema.

Open up `seed.js` and edit the code to look like this:

```javascript
console.log(cyan("📡 Connecting to the database..."));
// Connect to the database
await db.sync({ force: true }); // 👈 Change this line
```

By passing `{force: true}` to `db.sync`, we are giving Sequelize permission to drop and re-create every table for every model. **_Run the seed file again_**, and find the generated SQL statement that looks like this:

`DROP TABLE IF EXISTS "plants" CASCADE;`

Now you should be able to see the "name" column added to the "plants" table.

`db.sync({force: true})` is not to be used trivially, but for demonstrations and learning exercises, it is very useful. In a production setting, where actual user data is at stake, `db.sync({force: true})` can be quite dangerous. **Every time a table is dropped, all of its data is deleted**. If we need to update the schema (e.g. by adding or removing a column), we'd perform a schema migration, but that's well beyond the scope of this lesson.

### Creating an Instance

##### Plant.create()

Let's add some rows of data to the "plants" table. If we were writing our own SQL statements, we would write something like this:

`INSERT INTO "plants" ("name") VALUES ('Cauliflower');`

Sequelize models have a method called `create` that accomplishes much the same thing. Open up `seed.js` and edit the code to look like this:

```javascript
// Seed the database
await Plant.create({ name: "Cauliflower" }); // 👈 Add this line. You can add a different vegetable if you don't like cauliflower.
```

**Re-run the seed file** and take a look at the table. You should see a new row in the "plants" table!

Here are a few observations about that line of code:

- Since `create` returns a Promise, we need that `await` on the left.
- We pass `create` an object, and the "name" key on the object corresponds to the "name" column in the table.
- We did not need to pass the other columns: id, createdAt, or updatedAt. Those are **auto-generated** by Sequelize -- it'll handle them.

Take a look at the SQL queries in the terminal, and find the one that inserted the new row. It should look something like this:

```sql

INSERT INTO "plants" ("id","name","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3) RETURNING *;
```

One more observation about `Plant.create()` is that it returns the newly-created instance. This will prove very useful momentarily.

##### cauliflower.update()

When we use `Plant.create` to create a new row in the table, Sequelize helpfully **returns the newly created instance** (i.e. that new row).

Open up `seed.js` and edit the code to look like this:

```javascript
// Seed the database
const cauliflower = await Plant.create({ name: "Cauliflower" }); // 👈 Edit this line
console.log("cauliflower instance >>>>", cauliflower); // 👈 Add this line
console.log("cauliflower name >>>>", cauliflower.name); // 👈 Add this line
```

Re-run the seed file and take a look at the output.

Here are some observations:

- `cauliflower` refers to a Sequelize instance, and there are a ton of properties on that instance.
- `cauliflower` has a "dataValues" object, which appears to contain the column data. On the following line, we can access `cauliflower.name` directly, rather than having to type `cauliflower.dataValues.name`. (Sequelize instances define custom getters that make this possible.)

Let's see what this Sequelize instance is capable of! Open up seed.js and edit the code to look like this:

```javascript
// Seed the database
const cauliflower = await Plant.create({ name: "Cauliflower" });
console.log("cauliflower instance >>>>", cauliflower);
console.log("cauliflower name >>>>", cauliflower.name);

await cauliflower.update({ name: "Pale Broccoli" }); // 👈 Add this line
console.log("updated cauliflower name >>>>", cauliflower.name); // 👈 Add this line
```

**Re-run the seed file**. Take a look at the output and also the "plants" table.

`update` is an instance method. Take a minute to compare `Plant.create()` and `cauliflower.update()`:

- `create` is a class method, whereas
- `update` is an instance method. (There's also a class method called `update`, but it's for updating many rows, not just one.)

The generated SQL looks something like this:

```sql

UPDATE "plants" SET "name"=$1,"updatedAt"=$2 WHERE "id" = $3

```

Sequelize generates a SQL statement that only updates the row corresponding to our Sequelize instance. It identifies that row by its id. The id is a primary key, which Sequelize made for us **_by default_**. You can assign your own primary key if you want, but the default is just fine for most cases.

Notice that we had to put an `await` in front of `cauliflower.update()`. Anytime we want to communicate with the database by retrieving rows, creating new rows, updating existing rows, deleting rows, that's an `asynchronous` task. If we want to wait for it finish before moving on to something else, we'll need an `await`.

After waiting for the update to complete, we can see that the `cauliflower` instance has been updated to reflect the change. The goal of an ORM like Sequelize is to provide objects like these that map to tables in a relational database. Hence the name "Object-Relational Mapper" (ORM).

##### cauliflower.save()

We've seen `Plant.create` (a class method) and `cauliflower.update` (an instance method). They both have something in common: they send a SQL query to the database. That's an **asynchronous** task! We **_cannot_** know ahead of time how long it will take, or if it will succeed at all.

It may be useful to delay sending the SQL query until we really need to, and avoid sending unnecessary SQL queries over the wire.

Consider the following code. It does exactly the same thing as what we wrote in the previous step. You don't need to copy it into `seed.js` at this time (but if you're so inclined, be my guest):

```javascript
// Seed the database
const cauliflower = new Plant({ name: "Cauliflower" }); // Synchronous
await cauliflower.save(); // Asynchronous

cauliflower.name = "Pale Broccoli"; // Synchronous
await cauliflower.save(); // Asynchronous
```

Whether we are creating a new row or updating an existing row, we always have to save to the database at some point. `create` and `update` do this for us behind the scenes.

### Summary

We covered a lot in this lab! Here are a few important takeaways:

###### CONNECTING

- We first need to create a connection object and point it to a database. We do this by passing a URL to `new Sequelize`
- Then, we need to sync to the database with `db.sync()`
- If we want Sequelize to override the tables already in the database, we can use `db.sync({force: true})`

###### CREATING MODELS

- We can create a new model with `db.define('table_name', { /*fields go here*/ })`
- Each field must have a type. You can define a field's type like this: `age: { type: Sequelize.INTEGER }`
- `db.define` returns a reference to the model. Sequelize models have class methods, such as `create`.

###### CREATING INSTANCES

- We can create a new instance with `Model.creat`e. It's asynchronous, so we may need to use `await` in front of it.
- Instances have instance methods, such as `update`

###### OTHER USEFUL CLASS METHODS

- `Model.bulkCreate` -- Creates many rows (pass it an array of objects)
- `Model.findAll` -- Retrieves all rows in a table. You can filter the results by passing a where clause
- `Model.findByPk` -- Retrieves a single row with the given primary key.
- `Model.findById` -- Older versions of Sequelize use findById instead of findByPk. It accomplishes the same thing.
- `Model.update` -- Updates all rows matching a given where clause
- `Model.destroy` -- Deletes all rows matching a given where clause

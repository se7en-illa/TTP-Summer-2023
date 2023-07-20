# Solo Lab: Sequelize and Express Integration

## Part 1: Setup

Express is a Node.js framework for creating web and network applications, and Sequelize is a promise-based Node.js ORM for Postgres. In this lab, we're going to integrate Sequelize into our Express app and create some models and associations.

Let's start a new node project from scratch and create an express app.

- Step 1: Create a new folder using `mkdir` in your terminal. Name it `ExpressSequelizeIntegration`.
- Step 2: Add a `package.json` file. You can create this by running `npm init -y` in your terminal.
- Step 3: Install express, sequelize, pg, pg-hstore, and dotenv by running in your terminal:

```zsh
% npm install express sequelize pg dotenv
```

## Part 2: Creating a PostgreSQL Database

1. Create a new PostgreSQL database named `student_db`.

```zsh
% createdb student_db
```

2. Connect to your new database and create two tables: `students` and `courses`. `students` should have columns `id`, `name`, and `email`, and `courses` should have columns `id`, `course_name`, and `course_code`. `id` should be the primary key in both tables.

## Part 3: Configuring Environment Variables

- Create a `.env` file in your project root.
- Inside the `.env` file, add a DATABASE_URL variable and set its value to your postgres connection string.

```
DATABASE_URL=postgres://username:password@localhost:5432/student_db
```

Make sure to replace `username`, `password`, `localhost`, `5432`, and `student_db` with your own Postgres configuration.

## Part 4: Initializing Express and Sequelize

1. In your `ExpressSequelizeIntegration` directory, create a file called `app.js`.
2. Now, we want to require express and sequelize. Instantiate express and sequelize with your postgres configuration.

<details>
<summary>Hint: Requiring express and sequelize, initializing sequelize</summary>

```javascript
require("dotenv").config();
const express = require("express");
const Sequelize = require("sequelize");

const app = express();
const sequelize = new Sequelize(process.env.DATABASE_URL);
```

</details>

## Part 5: Models and Associations

In this part, let's create two models: Student and Course. The relationship between these models is "many-to-many", meaning a Student can be enrolled in multiple Courses, and a Course can have multiple Students.

- Step 1: Create `Student` and `Course` models using Sequelize's `define` method.
- Step 2: Define the association between the two models.

<details>
<summary>Hint: Creating models and defining associations</summary>

```javascript
const Student = sequelize.define("student", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

const Course = sequelize.define("course", {
  course_name: Sequelize.STRING,
  course_code: Sequelize.STRING,
});

Student.belongsToMany(Course, { through: "StudentCourses" });
Course.belongsToMany(Student, { through: "StudentCourses" });
```

</details>
Certainly, here's your revised lab utilizing async/await syntax:

## Part 6: Sync Models with Database

- Step 1: Sync models with the database using Sequelize's `sync` method. This will create tables in the database according to your models.

<details>
<summary>Hint: Syncing models with the database</summary>

```javascript
(async () => {
  try {
    await sequelize.sync();
    console.log("Models synced with database");
  } catch (err) {
    console.error(err);
  }
})();
```

</details>

## Part 7: Express Routes and Sequelize Queries

We will create two routes:

- `GET /students`: This route should respond with all students.
- `POST /students`: This route should create a new student.

In these routes, use Sequelize to query the database.

<details>
<summary>Hint: Creating routes and using Sequelize queries</summary>

```javascript
// bodyParser middleware is required to parse the body of POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/students", async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    console.error(err);
  }
});

app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    console.error(err);
  }
});
```

</details>

Note: The try/catch blocks in the routes have been used to handle any possible errors that might occur during the execution of the async tasks. If any of these tasks were to throw an error (like a failed database operation), the catch block would handle it by logging the error and preventing it from crashing the app.

## Part 8: Running the App

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

## Part 9: Testing the App

You can test your application using Postman or a similar tool. Send a GET request to `http://localhost:1337/students` to retrieve all students and a POST request to `http://localhost:1337/students` to create a new student. Make sure to include `name` and `email` in the body of your POST request.

Congratulations, you have successfully integrated Sequelize into an Express app and created routes to retrieve and create students.

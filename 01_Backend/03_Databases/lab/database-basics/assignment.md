# Solo Lab: Introduction to Databases

### Part 1: Setup

Databases are a key part of almost all applications, and understanding how they work and how to interact with them is a crucial skill for any developer. In this lab, we will dive into the basics of databases, covering a variety of topics like the differences between RDBMS and NoSQL, common types of each, and the fundamental concepts underlying their operation.

You don't need to install any databases for this lab. Instead, we will use SQLFiddle, a tool that allows us to experiment with SQL without having to install a database system.

Visit [SQLFiddle](http://sqlfiddle.com/) and familiarize yourself with its interface.

### Part 2: Introduction to Databases

Let's start by understanding what a database is. A database is an organized collection of data. Databases handle the storage, retrieval, and manipulation of data. They are used in various applications like websites, banking systems, etc.

There are two broad categories of databases - Relational Database Management Systems (RDBMS) and NoSQL (Not Only SQL) databases.

RDBMS databases are based on the relational model, introduced by E. F. Codd. They use SQL (Structured Query Language) for defining and manipulating the data. Examples of RDBMS include MySQL, PostgreSQL, Oracle, etc.

On the other hand, NoSQL databases, as the name implies, do not exclusively use SQL for data manipulation. These types of databases are more flexible and can handle structured, semi-structured, and unstructured data. Examples of NoSQL databases include MongoDB, Firebase, Apache Cassandra, etc.

### Part 3: Tables, Rows, and Columns

In an RDBMS database, data is stored in tables. A table is made up of rows and columns. Each column in a table represents a category of data (like name, age, etc.), and each row represents a single item within that category.

For example, let's create a `Users` table:

```sql
CREATE TABLE Users (
    id INT,
    name VARCHAR(20),
    age INT
);
```

This table has three columns: `id`, `name`, and `age`. To insert a row into the table:

```sql
INSERT INTO Users (id, name, age) VALUES (1, 'John Doe', 30);
```

Now the `Users` table has one row of data.

### Part 4: Basic SQL Operations

SQL is used to interact with RDBMS databases. There are several types of operations you can perform using SQL. Here are some of the most common ones:

- `SELECT`: Extracts data from a database.
- `INSERT INTO`: Inserts new data into a database.
- `UPDATE`: Updates data in a database.
- `DELETE`: Deletes data from a database.

#### SELECT, FROM, WHERE

The `SELECT` statement is used to select data from a database. The data returned is stored in a result table, called the result-set.

```sql
SELECT column1, column2
FROM table_name;
```

The `WHERE` clause is used to filter records.

```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

#### INSERT INTO

The `INSERT INTO` statement is used to insert new records in a table.

```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

#### UPDATE

The `UPDATE` statement is used to modify the existing records in a table.

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

#### DELETE

The `DELETE` statement is used to delete existing records in a table.

```sql
DELETE FROM table_name WHERE condition;
```

### Part 5: Practice

For this section, you'll be using SQLFiddle to practice running some basic SQL commands. Don't worry about saving your data - the goal here is just to become more familiar with the syntax and the result of each command.

- Create a table named `Students` with columns `id`, `name`, and `age`.
- Insert some data into your table.
- Use the `SELECT` command to retrieve all data from your table.
- Update a record in your table.
- Delete a record from your table.

Remember to use the "Build Schema" button on SQLFiddle to run your `CREATE TABLE` and `INSERT INTO` statements, and the "Run SQL" button to run your `SELECT`, `UPDATE`, and `DELETE` statements.

### Part 6: Further Exploration

- Take some time to learn more about the tools used for interacting with databases such as Postico (for PostgreSQL) and Beekeeper Studio (for various databases including MySQL and PostgreSQL). Understanding these tools will give you a solid foundation to build upon in your future studies and professional work.

- Also, take some time to explore more about Firebase and MongoDB, two very popular NoSQL databases.

<details>
<summary>Hint: Here's a sample code for Part 5</summary>

```sql
CREATE TABLE Students (
    id INT,
    name VARCHAR(20),
    age INT
);

INSERT INTO Students (id, name, age) VALUES (1, 'John Doe', 20);
INSERT INTO Students (id, name, age) VALUES (2, 'Jane Doe', 22);

SELECT * FROM Students;

UPDATE Students
SET name = 'Johnny Doe'
WHERE id = 1;

DELETE FROM Students WHERE id = 2;
```

Remember to run your `CREATE TABLE` and `INSERT INTO` commands with the "Build Schema" button, and your `SELECT`, `UPDATE`, and `DELETE` commands with the "Run SQL" button.

</details>

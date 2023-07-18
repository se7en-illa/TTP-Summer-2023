# Solo Lab: PostgreSQL Basics

### Part 1: PostgreSQL and Daemons

_PostgreSQL_, often referred to as _pg_, is a popular open-source relational database management system (RDBMS). It is capable of handling a wide range of workloads, from single machines to data warehouses with many concurrent users.

A _daemon_ is a type of computer program that runs in the background, rather than being under the direct control of a user. PostgreSQL operates as a daemon that manages database files on the file system.

### Part 2: Understanding Ports

Every service that listens for incoming connections does so on a _port_. Ports are identified by a number, and the combination of an IP address and a port number uniquely identifies a connection endpoint.

There are two main protocols that use ports, TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). PostgreSQL typically communicates using TCP, which provides a reliable, ordered, and error-checked delivery of a stream of bytes.

By default, PostgreSQL listens on port 5432. This is important as we will need to ensure that this port is open when setting up our PostgreSQL server.

### Part 3: Installation

Let's start by installing PostgreSQL on your system. The installation instructions depend on your operating system. Please visit [this link](https://gist.github.com/orlandocaraballo/95f1f9f33c93df4e75d4b230a1290cfa) for Orlando's installation guide.

### Part 4: Basic Usage

PostgreSQL uses a command-line utility named `psql` for interacting with the database. Let's start `psql` and execute a few basic SQL commands.

- Step 1: Start `psql`.

```bash
psql
```

- Step 2: In the `psql` interface, list all databases.

```SQL
\l
```

- Step 3: Create a new database named `test_db`.

```SQL
CREATE DATABASE test_db;
```

- Step 4: Connect to the new database.

```SQL
\c test_db
```

- Step 5: Create a new table named `test_table`.

```SQL
CREATE TABLE test_table (name VARCHAR(20), age INT);
```

- Step 6: Insert data into the `test_table`.

```SQL
INSERT INTO test_table (name, age) VALUES ('John', 25);
```

- Step 7: Fetch data from the `test_table`.

```SQL
SELECT * FROM test_table;
```

- Step 8: Exit `psql`.

```SQL
\q
```

### Part 5: Practice

- Create a new database named `school`.
- Inside the `school` database, create a table named `students` with columns `id`, `name`, `age`, and `grade`.
- Insert at least three different student records into the `students` table.
- Write SQL commands to fetch all students, only students of a certain grade, and only students of a certain age.

<details>
<summary>Hint: Here's the complete source code</summary>

```SQL
-- Start psql and create the school database
CREATE DATABASE school;
\c school

-- Create the students table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade INT
);

-- Insert student records
INSERT INTO students (name, age, grade) VALUES ('John', 15, 10);
INSERT INTO students (name, age, grade) VALUES ('Emma', 14, 9);
INSERT INTO students (name, age, grade) VALUES ('Oliver', 16, 11);

-- Fetch all students
SELECT * FROM students;

-- Fetch students of a certain grade
SELECT * FROM students WHERE grade = 10;

-- Fetch students of a certain age
SELECT * FROM students WHERE age = 15;

-- Exit psql
\q
```

</details>

By the end of this lab, you should have a basic understanding of PostgreSQL and how to use it to create databases, tables, and manipulate data.

Certainly, here's the revised lab that includes instructions for Ubuntu, macOS, and Windows using WSL:

# Solo Lab: PostgreSQL Basics

### Part 1: PostgreSQL and Daemons

_PostgreSQL_, often referred to as _pg_, is a popular open-source relational database management system (RDBMS). It is capable of handling a wide range of workloads, from single machines to data warehouses with many concurrent users.

A _daemon_ is a type of computer program that runs in the background, rather than being under the direct control of a user. PostgreSQL operates as a daemon that manages database files on the file system.

### Part 2: Understanding Ports

Every service that listens for incoming connections does so on a _port_. Ports are identified by a number, and the combination of an IP address and a port number uniquely identifies a connection endpoint.

There are two main protocols that use ports, TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). PostgreSQL typically communicates using TCP, which provides a reliable, ordered, and error-checked delivery of a stream of bytes.

By default, PostgreSQL listens on port 5432. This is important as we will need to ensure that this port is open when setting up our PostgreSQL server.

### Part 3: Installation

Let's start by installing PostgreSQL on your system. The installation instructions depend on your operating system.

_For Ubuntu/WSL_:

- Step 1: Open a WSL terminal if you are using Windows.
- Step 2: Update your local package index.

```bash
sudo apt update
```

- Step 3: Install PostgreSQL and its additional utilities.

```bash
sudo apt install postgresql postgresql-contrib
```

_For macOS_ (using Homebrew):

- Step 1: Update Homebrew.

```bash
brew update
```

- Step 2: Install PostgreSQL.

```bash
brew install postgresql
```

After installation, PostgreSQL service will start automatically. You can check its status with:

_For Ubuntu/WSL_:

```bash
sudo systemctl status postgresql
```

If you see an error like "System has not been booted with systemd as init system (PID 1). Can't operate.", you'll need to manually start the PostgreSQL service using the following command:

```bash
sudo service postgresql start
```

_For macOS_:

```bash
brew services list
```

### Part 4: Basic Usage

PostgreSQL uses a command-line utility named `psql` for interacting with the database. Let's start `psql` and execute a few basic SQL commands.

- Step 1: Start `psql`.

_For Ubuntu/WSL_:

```bash
sudo -u postgres psql
```

_For macOS_:

```bash
psql postgres
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

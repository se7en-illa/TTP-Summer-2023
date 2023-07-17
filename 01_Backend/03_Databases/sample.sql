-- drop table if they exist
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS "orderProducts" CASCADE;

-- create tables
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(30) NOT NULL,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL
);

CREATE TABLE profiles(
  id SERIAL PRIMARY KEY,
  "firstName" VARCHAR(20),
  "lastName" VARCHAR(20),
  birthdate DATE,
  sex VARCHAR(6),
  "userId" INT references users(id)
);

CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  fulfilled BOOLEAN DEFAULT false,
  "userId" INT references users(id)
);

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price MONEY
);

CREATE TABLE "orderProducts"(
  quantity INT,
  "orderId" INT references orders(id),
  "productId" INT references products(id),
  PRIMARY KEY("orderId", "productId")
);

-- insert data
INSERT INTO users (email, username, password) VALUES ('fake1@email.com', 'totallyrealusername1', 'password1');
INSERT INTO users (email, username, password) VALUES ('fake2@email.com', 'totallyrealusername2', 'password2');
INSERT INTO users (email, username, password) VALUES ('fake3@email.com', 'totallyrealusername3', 'password3');
INSERT INTO users (email, username, password) VALUES ('fake4@email.com', 'totallyrealusername4', 'password4');
INSERT INTO users (email, username, password) VALUES ('fake5@email.com', 'totallyrealusername5', 'password5');
INSERT INTO users (email, username, password) VALUES ('fake6@email.com', 'totallyrealusername6', 'password6');

INSERT INTO profiles ("firstName", "lastName", "birthdate", "sex", "userId") VALUES ('first name 1', 'last name 1', '01/22/94', 'female', 4);
INSERT INTO profiles ("firstName", "lastName", "birthdate", "sex", "userId") VALUES ('first name 2', 'last name 2', '05/11/71', 'male', 1);
INSERT INTO profiles ("firstName", "lastName", "birthdate", "sex", "userId") VALUES ('first name 3', 'last name 3', '10/07/91', 'female', 6);
INSERT INTO profiles ("firstName", "lastName", "birthdate", "sex", "userId") VALUES ('first name 4', 'last name 4', '03/03/89', 'male', 3);
INSERT INTO profiles ("firstName", "lastName", "birthdate", "sex", "userId") VALUES ('first name 5', 'last name 5', '07/14/00', 'female', 5);
INSERT INTO profiles ("firstName", "lastName", "birthdate", "sex", "userId") VALUES ('first name 6', 'last name 6', '12/21/79', 'male', 2);

INSERT INTO products (name, price) VALUES ('cookie crisp cereal', 4.99); -- id: 1
INSERT INTO products (name, price) VALUES ('colgate toothpaste', 2.99); -- id: 2
INSERT INTO products (name, price) VALUES ('charmin toilet paper (8 pack)', 10.99); -- id: 3

INSERT INTO orders ("userId") VALUES (3);
INSERT INTO orders ("userId") VALUES (1);

INSERT INTO "orderProducts" ("orderId", "productId", quantity) VALUES (1, 1, 3);
INSERT INTO "orderProducts" ("orderId", "productId", quantity) VALUES (1, 2, 4);
INSERT INTO "orderProducts" ("orderId", "productId", quantity) VALUES (1, 3, 2);
INSERT INTO "orderProducts" ("orderId", "productId", quantity) VALUES (2, 3, 10);
INSERT INTO "orderProducts" ("orderId", "productId", quantity) VALUES (2, 2, 1);
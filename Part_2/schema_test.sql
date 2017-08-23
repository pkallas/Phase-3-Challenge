DROP DATABASE IF EXISTS grocery_store_test;
CREATE DATABASE grocery_store_test;

\c grocery_store_test

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price NUMERIC(1000, 2),
  section VARCHAR(100)
);

CREATE TABLE shoppers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE orders(
  order_id SERIAL PRIMARY KEY,
  shopper_id INTEGER REFERENCES shoppers (id),
  total_cost NUMERIC(1000, 2)
);

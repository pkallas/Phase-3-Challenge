DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

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
  order_id INTEGER REFERENCES products (id),
  shopper_id INTEGER REFERENCES shoppers (id)
);

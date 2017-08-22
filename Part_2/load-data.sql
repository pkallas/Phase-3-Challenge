COPY products (name, price, section) FROM './grocery_seed_data.csv';

INSERT INTO shoppers (name) VALUES ('Patrick');
INSERT INTO shoppers (name) VALUES ('Susie');
INSERT INTO shoppers (name) VALUES ('Antonio');
INSERT INTO shoppers (name) VALUES ('Mary');
INSERT INTO shoppers (name) VALUES ('Connor');
INSERT INTO shoppers (name) VALUES ('Marina');
INSERT INTO orders (shopper_id, total_cost) VALUES (1, 18.95);
INSERT INTO orders (shopper_id, total_cost) VALUES (1, 23.05);
INSERT INTO orders (shopper_id, total_cost) VALUES (2, 14.95);
INSERT INTO orders (shopper_id, total_cost) VALUES (3, 15.00);
INSERT INTO orders (shopper_id, total_cost) VALUES (5, 12.95);
INSERT INTO orders (shopper_id, total_cost) VALUES (6, 28.50);

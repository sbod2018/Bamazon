DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL (10,2) NULL,
stock_quanity INT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ('Taste of The Wild', 'Pet Supplies', 35.99, 275),
('Taste of The Wild', 'Pet Supplies', 35.99, 275),
('Skippy', 'Food', 4.00, 455),
('Raw Bone', 'Pet Supplies', 3.99, 125),
('Vega One', 'Health and Personal Care', 49.57, 345),
('Vega Sport Hydrator', 'Health and Personal Care', 30.00, 237),
('6 Foot Leash', 'Pet Supplies', 18.95, 35),
('Tennis Balls', 'Sports', .99, 500),
('Reeses Puffs', 'Food', 3.97, 385),
('Daiya Chedder Cheese', 'Food', 2.99, 178),
('Brocoli', 'Food', .79, 273),
('Vanilla Almond Milk', 'Food', 2.89, 249);


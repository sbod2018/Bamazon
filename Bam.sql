DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
item_id VARCHAR(45),
product_name VARCHAR(45),
department_name VARCHAR(45),
price INT default 0,
PRIMARY KEY (id)
);

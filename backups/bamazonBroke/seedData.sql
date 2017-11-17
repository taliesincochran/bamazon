DROP DATABASE  IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL, 
	product_name VARCHAR(50) NOT NULL, 
	price DECIMAL(4,2) NOT NULL, 
	stock_quantity INT,
	department_name VARCHAR(30) NOT NULL,
	number_sold INT,
	PRIMARY KEY(item_id)
);
CREATE TABLE departments (
	department_id INT AUTO_INCREMENT NOT NULL, 
	department_name VARCHAR(30) NOT NULL, 
	over_head_cost DECIMAL(8,2) NOT NULL, 
	PRIMARY KEY(department_id)
);

INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Allspice - Jamaican', '3.95', '87', 'Grocery', '67');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Arrowroot', '8.39', '49', 'Grocery', '32');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Artichoke - Fresh', '8.76', '13', 'Produce', '2');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Bag - Regular Kraft 20 Lb', '6.25', '92', 'Grocery', '83');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Bagel - Plain', '9.02', '74', 'Bakery', '10');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Bar Energy Chocchip', '1.24', '81', 'Grocery', '71');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Beer - Guiness', '8.90', '6', 'Specialty', '4');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Bread - Pumpernickle, Rounds', '14.17', '8', 'Bakery', '4');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Buffalo - Short Rib Fresh', '9.77', '69', 'Meat', '55');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Cabbage - Red', '3.97', '50', 'Produce', '37');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Cheese - Brie,danish', '10.25', '46', 'Specialty', '16');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Cheese - Marble', '9.42', '86', 'Specialty', '27');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Cheese - Parmesan Grated', '5.34', '9', 'Specialty', '9');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Cheese - St. Andre', '13.17', '14', 'Specialty', '13');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Chervil - Fresh', '3.02', '32', 'Produce', '20');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Chickensplit Half', '3.93', '80', 'Meat', '24');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Fish - Atlantic Salmon, Cold', '12.12', '64', 'Seafood', '20');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Fish - Halibut, Cold Smoked', '1.17', '53', 'Seafood', '26');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Chips Potato All Dressed - 43g', '11.25', '38', 'Grocery', '20');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Cocoa Powder - Natural', '8.60', '21', 'Grocery', '4');
USE bamazon;
INSERT INTO departments (department_name,over_head_cost) VALUES ("Bakery", 700);
INSERT INTO departments (department_name,over_head_cost) VALUES ("Grocery", 3500);
INSERT INTO departments (department_name,over_head_cost) VALUES ("Meat", 2000);
INSERT INTO departments (department_name,over_head_cost) VALUES ("Seafood", 1500);
INSERT INTO departments (department_name,over_head_cost) VALUES ("Specialty", 900);
INSERT INTO departments (department_name,over_head_cost) VALUES ("Produce", 3000);
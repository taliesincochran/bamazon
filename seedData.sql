DROP DATABASE  IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL, 
	product_name VARCHAR(35) NOT NULL, 
	price DECIMAL(4,2) NOT NULL, 
	stock_quantity INT DEFAULT 0 NOT NULL,
	department_name VARCHAR(15) NOT NULL,
	number_sold INT DEFAULT 0 NOT NULL,
	product_sales DECIMAL(6,2),
	PRIMARY KEY(item_id)
);
CREATE TABLE departments (
	department_id INT AUTO_INCREMENT NOT NULL, 
	department_name VARCHAR(30) NOT NULL, 
	over_head_cost DECIMAL(8,2) NOT NULL, 
	PRIMARY KEY(department_id)
);
CREATE TABLE users (
	user_id INT AUTO_INCREMENT,
	email VARCHAR(36) NOT NULL,
    pass VARCHAR(36) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE orders (
	email VARCHAR(36) NOT NULL,
    item_quantity INT NOT NULL,
    item_id INT NOT NULL,
    date_of_order VARCHAR(10)
);

INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Wine - White, French Cross', '9.72', '15', 'Specialty', '5');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Wine - White, Pinot Grigio', '13.12', '7', 'Specialty', '3');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Yeast Dry - Fleischman', '3.27', '38', 'Grocery', '3');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Veal - Heart', '3.06', '26', 'Meat', '10');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Lettuce - Romaine', '7.58', '86', 'Produce', '51');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Loaf Pan - 2 Lb, Foil', '11.19', '40', 'Grocery', '34');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Lobster - Tail 6 Oz', '4.90', '11', 'Seafood', '6');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Longos - Assorted Sandwich', '11.78', '54', 'Grocery', '34');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Macaroons - Two Bite Choc', '12.67', '62', 'Grocery', '43');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Mudslide', '11.30', '70', 'Grocery', '58');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Muffin Batt - Blueberry Passion', '4.45', '95', 'Grocery', '81');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Mustard - Pommery', '1.21', '51', 'Grocery', '27');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Nantucket Pine Orangebanana', '11.96', '25', 'Grocery', '8');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Oneshot Automatic Soap System', '12.33', '91', 'Grocery', '10');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Orange Roughy 6/8 Oz', '12.98', '89', 'Produce', '61');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Oven Mitt - 13 Inch', '14.80', '34', 'Grocery', '20');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Passion Fruit', '11.99', '41', 'Produce', '25');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pasta - Penne, Rigate, Dry', '7.02', '89', 'Grocery', '79');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pepper - Gypsy Pepper', '13.64', '92', 'Grocery', '5');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pineapple - Golden', '11.66', '97', 'Produce', '67');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Plastic Arrow Stir Stick', '1.74', '4', 'Grocery', '1');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pork - Loin, Boneless', '7.85', '57', 'Meat', '51');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pork - Loin, Center Cut', '10.02', '62', 'Meat', '47');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pork Salted Bellies', '1.42', '29', 'Meat', '9');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Lobster - Tail 6 Oz', '4.90', '11', 'Seafood', '6');
UPDATE products SET product_sales = (price * number_sold) WHERE item_id>0;
INSERT INTO departments (department_name,over_head_cost) VALUES ("Grocery", 900);
INSERT INTO departments (department_name,over_head_cost) VALUES ("Meat", 400);
INSERT INTO departments (department_name,over_head_cost) VALUES ("Seafood", 100);
INSERT INTO departments (department_name,over_head_cost) VALUES ("Specialty", 200);
INSERT INTO departments (department_name,over_head_cost) VALUES ("Produce", 300);

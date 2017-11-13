DROP DATABASE bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL, 
	product_name VARCHAR(50) NOT NULL, 
	price DECIMAL(4,2) NOT NULL, 
	stock_quantity INT NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	number_sold INT,
	PRIMARY KEY(item_id)
);
CREATE TABLE departments (
	department_id INT AUTO_INCREMENT NOT NULL, 
	department_name VARCHAR(30) NOT NULL, 
	over_head_cost DECIMAL(8,2) NOT NULL, 
	product_sales DECIMAL(8,2) NOT NULL , 
	total_profit DECIMAL(8,2) NOT NULL,
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
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Chips - Assorted', '11.19', '36', 'Grocery', '10');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Chips - Miss Vickies', '12.91', '45', 'Grocery', '23');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Chips Potato All Dressed - 43g', '11.25', '38', 'Grocery', '20');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Cocoa Powder - Natural', '8.60', '21', 'Grocery', '4');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Cod - Salted, Boneless', '10.91', '35', 'Seafood', '9');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Coffee - Hazelnut Cream', '9.69', '41', 'Grocery', '2');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Cookie - Oatmeal', '10.49', '65', 'Grocery', '40');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Cookie Dough - Peanut Butter', '7.11', '28', 'Grocery', '22');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Corn - Cream, Canned', '10.58', '77', 'Grocery', '53');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Corn Syrup', '2.57', '25', 'Grocery', '7');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Crab - Dungeness, Whole', '6.09', '96', 'Seafood', '26');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Dawn Professionl Pot And Pan', '1.47', '15', 'Grocery', '9');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Doilies - 8, Paper', '12.73', '7', 'Grocery', '3');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Dried Peach', '2.08', '12', 'Grocery', '4');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Duck - Breast', '12.04', '90', 'Meat', '42');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Fennel - Seeds', '5.58', '61', 'Grocery', '4');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Fish - Atlantic Salmon, Cold', '12.12', '64', 'Seafood', '20');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Fish - Halibut, Cold Smoked', '1.17', '53', 'Seafood', '26');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Foam Tray S2', '3.12', '46', 'Grocery', '7');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Gloves - Goldtouch Disposable', '7.13', '98', 'Grocery', '29');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Graham Cracker Mix', '2.87', '65', 'Grocery', '42');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Grapefruit - White', '3.58', '84', 'Produce', '28');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Ice Cream - Turtles Stick Bar', '9.93', '67', 'Grocery', '50');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Wine - Black Tower Qr', '8.68', '9', 'Specialty', '7');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Wine - Maipo Valle Cabernet', '13.00', '33', 'Specialty', '15');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Wine - Red, Lurton Merlot De', '6.21', '40', 'Specialty', '21');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Wine - White, French Cross', '9.72', '15', 'Specialty', '5');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Wine - White, Pinot Grigio', '13.12', '7', 'Specialty', '3');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Yeast Dry - Fleischman', '3.27', '38', 'Grocery', '3');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Veal - Heart', '3.06', '26', 'Meat', '10');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Icecream - Dstk Cml And Fdg', '14.76', '78', 'Grocery', '57');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Icecream Bar - Del Monte', '4.04', '37', 'Grocery', '22');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Jam - Marmalade, Orange', '7.97', '96', 'Grocery', '46');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Juice - Orange, 341 Ml', '3.53', '61', 'Grocery', '14');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Lettuce - Romaine', '7.58', '86', 'Produce', '51');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Loaf Pan - 2 Lb, Foil', '11.19', '40', 'Grocery', '34');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Lobster - Tail 6 Oz', '4.90', '11', 'Seafood', '6');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Longos - Assorted Sandwich', '11.78', '54', 'Prepared Foods', '34');
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
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pie Shells 10', '11.66', '3', 'Bakery', '2');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pineapple - Golden', '11.66', '97', 'Produce', '67');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Plastic Arrow Stir Stick', '1.74', '4', 'Grocery', '1');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pork - Loin, Boneless', '7.85', '57', 'Meat', '51');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pork - Loin, Center Cut', '10.02', '62', 'Meat', '47');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pork Salted Bellies', '1.42', '29', 'Meat', '9');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Pumpkin - Seed', '12.09', '40', 'Produce', '30');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Quail - Whole, Boneless', '7.99', '42', 'Meat', '35');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Sauce - Soya, Light', '6.53', '83', 'Grocery', '54');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Scallop - St. Jaques', '2.11', '45', 'Seafood', '22');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Sesame Seed Black', '14.18', '6', 'Grocery', '2');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Shiro Miso', '13.03', '79', 'Grocery', '75');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Shrimp - Black Tiger 6 - 8', '7.90', '83', 'Seafood', '74');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Soup - Campbells Mushroom', '7.33', '87', 'Grocery', '13');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Soup - Chicken And Wild Rice', '5.46', '58', 'Grocery', '22');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Sour Cream', '5.45', '23', 'Specialty', '9');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Spic And Span All Purpose', '14.41', '43', 'Grocery', '14');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Spice - Peppercorn Melange', '12.01', '65', 'Grocery', '5');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Sprouts - Corn', '12.07', '5', 'Produce', '2');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Swiss Chard', '10.39', '35', 'Produce', '4');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Tart - Pecan Butter Squares', '12.68', '95', 'Bakery', '46');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Tea - Decaf Lipton', '13.03', '91', 'Grocery', '88');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Tea - Lemon Green Tea', '14.02', '84', 'Grocery', '27');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Tea - Orange Pekoe', '9.00', '21', 'Grocery', '8');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Thermometer Digital', '7.22', '34', 'Grocery', '33');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Tomatoes - Diced, Canned', '4.38', '48', 'Grocery', '2');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Truffle Shells - White Chocolate', '5.19', '63', 'Bakery', '12');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Turnip - Wax', '11.78', '27', 'Produce', '2');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Turnip - White, Organic', '5.87', '99', 'Produce', '46');
INSERT INTO `bamazon`.`products` (`product_name`, `price`, `stock_quantity`, `department_name`, `number_sold`) VALUES ('Vinegar - Champagne', '1.46', '80', 'Grocery', '42');
USE bamazon;
INSERT INTO departments (department_name, product_sales, over_head_cost, total_profit) VALUES ("Bakery", (SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Bakery'), 700, ((SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Bakery')-700));
INSERT INTO departments (department_name, product_sales, over_head_cost, total_profit) VALUES ("Grocery", (SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Grocery'), 3500, ((SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Grocery')-3500));
INSERT INTO departments (department_name, product_sales, over_head_cost, total_profit) VALUES ("Meat", (SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Meat'), 2000, ((SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Meat')-2000));
INSERT INTO departments (department_name, product_sales, over_head_cost, total_profit) VALUES ("Seafood", (SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Seafood'), 1500, ((SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Seafood')-1500));
INSERT INTO departments (department_name, product_sales, over_head_cost, total_profit) VALUES ("Specialty", (SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Specialty'), 900, ((SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Specialty')-900));
INSERT INTO departments (department_name, product_sales, over_head_cost, total_profit) VALUES ("Produce", (SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Produce'), 3000, ((SELECT SUM(price * number_sold) FROM products WHERE department_name = 'Produce')-3000));

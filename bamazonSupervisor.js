var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
	host: "localhost",
	port:3306,
	user:'root',
	password: 'Yourjoyisyoursorrow6392!',
	database: 'bamazon'
});
department_list = [];
function getDepartments () {
	connection.query("SELECT department_name FROM departments", function(err, res) {
		if (err) throw err;
		for(var i = 0; i<res.length; i++) {
			department_list.push(res[i].department_name);
		}
	})
}
//logic to see all stock or low quantity stock
function getItems (stock) {
	if(stock === 'all') {
		var query = ''; 
	}
	if(stock === 'low') {
		var query = 'WHERE stock_quantity <=5';
	}

	connection.query("SELECT * FROM products " + query, function(err,res){
		var header = "________________________________________________________________________________________";
		var header2 ="|ID  |Item Name                          |Department     |Price      |#In Stock |# Sold|";
		var between ="|----|-----------------------------------|---------------|-----------|----------|------|"; 
		var footer = "|____|___________________________________|_______________|___________|__________|______|";
		if(err) throw err;
		console.log(header);
		console.log(header2);
		for(var i = 0; i < res.length; i++) {
			console.log(between);
			var dLength = res[i].department_name.length;
			var dDiff = 15-dLength;
			var dBuff = "";
			for (var j = 0; j<dDiff; j++) {
				dBuff += " ";
			}
			var length = res[i].product_name.length;
			var differance = 35 - length;
			var productName = res[i].product_name;
			for (var j = 0; j<differance; j++) {
				productName += " ";
			}
			var priceLength = res[i].price.toFixed(2).toString().length;
			var diffPrice = 10 - priceLength;
			var bufferPrice = "";
			for(var k = 0; k<diffPrice; k++) {
				bufferPrice += " ";
			}
			var stockLength = res[i].stock_quantity.toString().length;
			var diffStock = 10 - stockLength;
			var bufferStock = "";
			for(var m = 0; m<diffStock; m++) {
				bufferStock += " ";
			}
			var idLength = res[i].item_id.toString().length;
			var idDiff = 4-idLength;
			var bufferId = '';
			for(var n = 0; n<idDiff; n++) {
				bufferId += " ";
			}
			var soldLength = res[i].number_sold.toString().length;
			var soldDiff = 6-soldLength;
			var bufferSold = '';
			for(var o = 0; o<soldDiff; o++) {
				bufferSold +=" ";
			}		
			var newChoice = "|" + bufferId  + res[i].item_id + "|" + productName + "|" + dBuff + res[i].department_name + "|" + bufferPrice +    "$" + res[i].price.toFixed(2) + '|' + bufferStock + res[i].stock_quantity + "|" + bufferSold + res[i].number_sold + "|";
			console.log(newChoice);
		}
		console.log(footer);
		supervisor();
	})
}
//logic to add an item
function addItem () {
	inquirer.prompt([
		{
			message: "What is the name of the item?",
			type:"input",
			name:"itemName"
		},
		{
			message: "What is the price of the item?",
			type:"input",
			name:'itemPrice',
			validate: function(num) {return (!isNaN(num) && num>0)}
		},
	    {
	    	message: "What department is the item in?",
	    	type: "list",
	    	choices: department_list,
	    	name: "itemDepartment"
	    },
	]).then(function(itemAdd) {
		var query = "INSERT INTO products (product_name, price, department_name, number_sold) VALUES ('"+ itemAdd.itemName + "'," + itemAdd.itemPrice + ",'" + itemAdd.itemDepartment + "',0);";
		connection.query(query, function(err, res) {
			if(err) throw err;
			console.log("You have sucessfully added "+ itemAdd.itemName + " at the price of $" + itemAdd.itemPrice + "per unit to the " + itemAdd. itemDepartment + " department.");
			supervisor();
		})

	})
}
//logic to update an item
function update() {
	inquirer.prompt ([
		{
			message: "What is the id of the product to update?",
			type: "input",
			name: "product"
		}
	]).then(function(res){
		var valid = connection.query("SELECT COUNT(item_id) AS idTest FROM products WHERE item_id =" + res.product, function(err , validate) {
			if (err) throw err;
			test = JSON.stringify(validate[0].idTest);
			if(test !== 0) {
				product = res.product;
				connection.query("SELECT * FROM products WHERE item_id =" + product, function (err, result) {
					if(err) throw err;
					console.log("product id: "+ result[0].item_id + " product name: " + result[0].product_name + ", price: "+ result[0].price + ", department: " + result[0].department_name);
					inquirer.prompt([
						{
							message:"What would you like to update about this product",
							type: "list",
							choices: ["Product Name", "Product Price", "Assigned Department"],
							name: "updateWhat"	
						}
					]).then(function(updateThis) {

						switch(updateThis.updateWhat) {
							case "Product Name":
							inquirer.prompt([
								{
									message: "What is the new product name?",
									type: "input",
									name: "newProductName"
								}
							]).then(function(updateName) {
								if (err) throw err;
								connection.query("UPDATE products SET product_name = " + updateName.newProductName + "' WHERE item_id = " + product, function(err, subRes){
									if (err) throw err;
									console.log("Item #" + product + "\'s name has been changed to " + updateName.newProductName);
									supervisor();
								});
							})							
							break;

							case "Product Price":
							inquirer.prompt([
								{
									message: "What is the price?",
									type: "input",
									validate: function(num) {return (!isNaN(num) && num>0)},
									name: "newProductPrice"
								}
							]).then(function(updatePrice) {
								if (err) throw err;
								connection.query("UPDATE products SET price=" + updatePrice.newProductPrice + " WHERE item_id= " + product, function(err, subRes){
									console.log("Item #" + product + "\'s price has been changed to " + updatePrice.newProductPrice + " per unit.");
									supervisor();
								});
								
							})							
							break;

							case "Assigned Department":
							inquirer.prompt([
								{
									message: "What is the new department assignment?",
									type: "list",
									choices: department_list,
									name: "newDepartment"
							}]).then(function(updateDepartment) {
								connection.query("UPDATE products SET department_name='" + updateDepartment.newDepartment + "' WHERE item_id= " + product, function(err, subRes){
									if (err) throw err;
									console.log("Item #" + product + "\'s assigned department has been changed to " + updateDepartment.newDepartment);
									supervisor();
								});
							})
							break;
						}
					})
				})
			} else {
				console.log("That item does not exist. Try again");
				supervisor();
			}
		})
	})
}
//logic to order an item
function order() {
	inquirer.prompt([
		{
			message: "What is the id of the item you want to order?",
			type:"input",
			name:"itemID"
		},
		{
			message: "How many would you like to order?",
			type:"input",
			validate: function(num) {return (!isNaN(num) && num>0)},
			name:"order"
	    }
	]).then(function(orderQuery) {
		var valid = connection.query("SELECT COUNT(item_id) AS test FROM products WHERE item_id = " + orderQuery.itemID, function(err , res) {
			if(err) throw err;
			if(res[0].test !== 0) {
				connection.query("UPDATE products SET stock_quantity = (stock_quantity + " + orderQuery.order + ") WHERE item_id =" + orderQuery.itemID, function(err, res) {
					if (err) throw err; 
					var itemName = orderQuery.itemID;
					var itemQuantity = orderQuery.order; 
					console.log("Order successful. You ordered " + orderQuery.order + " unit(s) of item #" + orderQuery.itemID);
					connection.query("INSERT INTO orders (email, item_id, item_quantity, date_of_order) VALUES('order by supervisor'," + itemName + "," + itemQuantity + ",CURDATE())", function(error, log) {
						if(error) throw error;
					})
					supervisor();			
				})
			}
			else {
				console.log("That item appears to not exist");
				supervisor();
			}
		})		
	})
}
//logic to see all customer and supervisor orders
function trackOrders () {
	connection.query("SELECT * FROM orders", function(err, res) {
		if (err) throw err;
		var header = "___________________________________________________________________________";
		var header2 ="|ordered by                              |item id |Quantity |Date ordered |";
		var between ="|----------------------------------------|--------|---------|-------------|"; 
		var footer = "|________________________________________|________|_________|_____________|";
		console.log(header);
		console.log(header2);
		for(var i = 0; i < res.length; i++) {
			console.log(between);
			var eLength = res[i].email.length;
			var eDiff = 40-eLength;
			var eBuff = "";
			for (var j = 0; j<eDiff; j++) {
				eBuff += " ";
			}
			var stockLength = res[i].item_quantity.toString().length;
			var diffStock = 9 - stockLength;
			var bufferStock = "";
			for(var m = 0; m<diffStock; m++) {
				bufferStock += " ";
			}
			var idLength = res[i].item_id.toString().length;
			var idDiff = 8-idLength;
			var bufferId = '';
			for(var n = 0; n<idDiff; n++) {
				bufferId += " ";
			}
			var orderLength = res[i].date_of_order.toString().length;
			var orderDiff = 13-orderLength;
			var bufferOrder = '';
			for(var o = 0; o<orderDiff; o++) {
				bufferOrder +=" ";
			}		
			var newChoice = "|" + eBuff + res[i].email + "|" + bufferId + res[i].item_id + "|" + bufferStock + res[i].item_quantity + "|" + bufferOrder + res[i].date_of_order + "|";
			console.log(newChoice);
		}
		console.log(footer);
		supervisor();

	} )
}
//Logic to look at sales data by department
function getSales() {
	var query = "SELECT	departments.department_id AS ID, products.department_name AS department, SUM(products.product_sales) AS sales, departments.over_head_cost AS overhead, SUM(products.product_sales)-departments.over_head_cost as profit FROM products JOIN departments ON departments.department_name = products.department_name GROUP BY products.department_name ORDER BY department_id;"
		connection.query(query, function(err, res) {
		var header = "_____________________________________________________________";
		var header2 ="|ID  |Department     |Total Sales |Overhead    |Profit      |";
		var between ="|----|---------------|------------|------------|------------|"; 
		var footer = "|____|_______________|____________|____________|____________|";
		console.log(header);
		console.log(header2);
		for(var i = 0; i < res.length; i++) {
			console.log(between);
			var dep = res[i].department;
			var id = res[i].ID;
			var sales = parseFloat(res[i].sales).toFixed(2);
			var overhead = parseFloat(res[i].overhead).toFixed(2);
			var profit = parseFloat(res[i].profit).toFixed(2)
			idBuff="    ";
			var dLength = dep.length;
			var dDiff = 15-dLength;
			var dBuff = "";
			for (var j = 0; j<dDiff; j++) {
				dBuff += " ";
			}
			var tsLength = sales.length;
			var tsDiff = 11 - tsLength;
			var tsBuff = "";
			for (var j = 0; j<tsDiff; j++) {
				tsBuff += " ";
			}
			var ohLength = overhead.length;
			var ohDiff = 11 - ohLength;
			var ohBuff = "";
			for (var j = 0; j<ohDiff; j++) {
				ohBuff += " ";
			}
			var pLength = profit.length;
			var pDiff = 11 - pLength;
			var pBuff = "";
			for (var j = 0; j<pDiff; j++) {
				pBuff += " ";
			}
			var newChoice = "|   " + id + "|" + dBuff + dep + "|" + tsBuff + "$" + sales + '|' + ohBuff + "$" + overhead + "|" + pBuff +"$" + profit + "|";
			console.log(newChoice);
			
		}
		console.log(footer);
		supervisor();
	})
}
//Logic to add a department
function addDepartment () {
	inquirer.prompt([
		{
			message: "What is the new department's name?",
			type:"input",
			name:"name"
		},
		{
			message: "What is the new department's overhead cost?",
			type:"input",
			validate: function(num) {return (!isNaN(num) && num>0)},
			name: 'cost'
		}]).then(function(res) {
			var query = "INSERT INTO departments (department_name,over_head_cost) VALUES ('" + res.name + "','" + res.cost + "');";
			connection.query(query, function(err, result){
				if(err) throw err;
				console.log("Department added sucessfully.");
				supervisor();
		})
	})
}
//Logic that gets it all going
function supervisor() {
	inquirer.prompt([
		{
			message: "What would you like to do?",
			type: "list",
			name: "selection",
			choices: ["View sales by department.", "Add a department.", "View inventory.", "View items with low inventory.", "Order an item.", "Add new product.", "Update an existing item.", "Review orders.", "Quit"]
		}
	]).then(function(res) {
		switch(res.selection)  {
			case "View inventory.":
				getItems('all');
				break;
			case "View items with low inventory.":
				getItems('low');
				break;	
			case "Order an item.": 
				order();
				break;
			case "Add new product.":
				addItem();
				break;
			case "Update an existing item.":
				update();
				break;
			case "Review orders.":
				trackOrders();
				break;
			case "Add a department.":
				addDepartment();
				break;
			case "View sales by department.":
				getSales();
				break;
			case "Quit":
				connection.end();
				process.exit();
				break;
		}
	})	
}

getDepartments();
supervisor();
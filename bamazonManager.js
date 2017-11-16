var mysql = require('mysql');
var inquirer = require('inquirer');
var fs = require('fs');
var connection = mysql.createConnection({
	host: "localhost",
	port:3306,
	user:'root',
	password: 'Yourjoyisyoursorrow6392!',
	database: 'bamazon'
});

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
		manager();
	})
}
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
	    	choices: ["Bakery","Grocery","Specialty","Meat","Seafood","Produce"],
	    	name: "itemDepartment"
	    },
	]).then(function(itemAdd) {
		var query = "INSERT INTO products (product_name, price, department_name, number_sold) VALUES ('"+ itemAdd.itemName + "'," + itemAdd.itemPrice + ",'" + itemAdd.itemDepartment + "',0);";
		connection.query(query, function(err, res) {
			if(err) throw err;
			console.log("You have sucessfully added "+ itemAdd.itemName + " at the price of $" + itemAdd.itemPrice + "per unit to the " + itemAdd. itemDepartment + " department.");
			manager();
		})

	})
}
function update() {
	inquirer.prompt ([
		{
			message: "What is the id of the product to update?",
			type: "input",
			name: "product"
		}
	]).then(function(res){
		var valid = connection.query("SELECT COUNT(item_id) AS test FROM products WHERE item_id = " + res.product, function(err , validate) {
			if(err) throw err;
			test = JSON.stringify(validate[0].test);
			console.log(test);
			if(test !== 0) {
				product = res.product;
				connection.query("SELECT * FROM products WHERE item_id = ?", [product], function (err, result) {
					if(err) throw err;
					console.log("prduct id: "+ result[0].item_id + " product name: " + result[0].product_name + ", price: "+ result[0].price + ", department: " + result[0].department_name);
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
							}]).then(function(updateName) {
								if (err) throw err;
								console.log('res.product', res.product);
								connection.query("UPDATE products SET product_name ='" + updateName.newProductName + "' WHERE item_id = " + res.product, function(err, subRes){
									console.log("Item " + subRes.item_id + "\'s name has been changed to " + updateName.newProductName);
								});
								manager();
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
								connection.query("UPDATE products SET price='" + updatePrice.newProductPrice + " WHERE item_id= " + res.product, function(err, subRes){
									console.log("Item " + subRes.item_id + "\'s price has been changed to " + updatePrice.newProductPrice);
								});
								manager();
							})
							
							break;

							case "Assigned Department":
							inquirer.prompt([
								{
									message: "What is the new department assignment?",
									type: "input",
									name: "newDepartment"
							}]).then(function(updateDepartment) {
								connection.query("UPDATE products SET department_name='" + updateDepartment.newDepartment + "' WHERE item_id= " + res.product, function(err, subRes){
									if (err) throw err;
									console.log("Item " + subRes.itemID + "\'s price has been changed to " + updateDepartment.newDepartment);
								});
								manager();
							})
							break;
						}
					})
				})
			} else {
				console.log("That item does not exist. Try again");
				manager();
			}
		})
	})
}

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
		console.log("item ", orderQuery.itemID);
		var valid = connection.query("SELECT COUNT(item_id) AS test FROM products WHERE item_id = " + orderQuery.itemID, function(err , res) {
			if(err) throw err;
			console.log(JSON.stringify(res[0].test));
			if(res[0].test !== 0) {
				connection.query("UPDATE products SET stock_quantity = (stock_quantity + " + orderQuery.order + ") WHERE item_id =" + orderQuery.itemID, function(err, res) {
					if (err) throw err; 
					console.log("Order successful. You ordered " + orderQuery.order + " unit(s) of item #" + orderQuery.itemID);
					manager();			
				})
			}
			else {
				console.log("That item appears to not exist");
				manager();
			}
		})		
	})
}

function manager () {
	inquirer.prompt([
		{
			message: "What would you like to do?",
			type: "list",
			choices: ["View inventory.", "View items with low inventory.", "Order an item.", "Add new product.", "Update an existing item.", "Quit"],
			name: 'managerChoice'
		}
	]).then(function(result) {
		switch(result.managerChoice)  {
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
			case "Quit":
				console.log("You can't quit, you're fired!  Just kidding :)")
				process.exit();
		}
	})
}
manager();
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
		if(err) throw err;
		for(var i = 0; i < res.length; i++) {
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
			// var departmentLength = res[i].department_name.length;
			// var departmentDiff = 15 - departmentLength;

			// var departmentBuffer = '';
			// for(var p = 0; o<departmentDiff; p++) {
			// 	departmentBuffer +=" ";
			// }	
			// "| Department" + departmentBuffer + res[i].department_name + 		
			var newChoice = "|Product Id:" + bufferId  + res[i].item_id + "| " + productName + "| Price per unit:" + bufferPrice +    "$" + res[i].price.toFixed(2) + '| Stock:' + bufferStock + res[i].stock_quantity + "| Number Sold:" + bufferSold + res[i].number_sold + "|" + res[i].departmen;
			console.log(newChoice);
		}
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
		var query = "INSERT INTO products (product_name, price, department_name,number_sold) VALUES ("+ itemAdd.itemName + "," + itemAdd.itemPrice + ',' + itemAdd.itemDepartment + ",0);";
		connection.query(query, function(err, res) {
			if(err) throw err;
			console.log(res.affectedRows);
		})
		manager();
	})
}
function order() {
	inquirer.prompt([
		{
			message: "What is the id of the item you want to order?",
			type:"input",
			name:"itemID",
			validate: function(num) {return (!isNaN(num) && num>0)},
		},
		{
			message: "How many would you like to order?",
			type:"input",
			validate: function(num) {return (!isNaN(num) && num>0)},
			name:"order"
	    }
	]).then(function(order) {
		connection.query("UPDATE products SET stock_quantity = (stock_quantity + " + order.order + ") WHERE item_id = " + order.itemID, function(err, res) {
			if (err) {
				throw err;
			} 
			console.log("Order successful.")
		})
		manager();
	})
}
function manager () {
	inquirer.prompt([
		{
			message: "What would you like to do?",
			type: "list",
			choices: ["View inventory.", "View items with low inventory.", "Order an item.", "Add new product.", "Quit"],
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
			case "Quit":
				console.log("You can't quit, you're fired!  Just kidding :)")
				process.exit();
		}
	})
}
manager();
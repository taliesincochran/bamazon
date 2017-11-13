var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
	host: "localhost",
	port:3306,
	user:'root',
	password: 'Yourjoyisyoursorrow6392!',
	database: 'bamazon'
});
var test_list = ['a','b','c'];
var choice_list = [];
//Logic for product update
function changeQuantity (itemQuantity, itemName) {
	connection.query("UPDATE products SET stock_quantity = (stock_quantity - " + itemQuantity + "), number_sold = (number_sold + " + itemQuantity + "), product_sales = (price * number_sold) WHERE item_id = " + itemName, function(err, set) {
		if (err) throw err;
		// console.log('\n');
	})
}
function prompt() {
	connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err,res){
		if(err) throw err;
		//Logic for making the table look nice in the command line
		for(var i = 0; i < res.length; i++) {
			var length = res[i].product_name.length;
			var differance = 40 - length;
			var string = res[i].product_name;
			for (var j = 0; j<differance; j++) {
				string += " ";
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
			var newChoice = "|Product Id:" + bufferId  + res[i].item_id + "| " + string + "| Price per unit:" + bufferPrice +    "$" + res[i].price.toFixed(2) + '| Stock:' + bufferStock + res[i].stock_quantity + "|";
			console.log(newChoice);
		}
		//logic for customer interaction
		inquirer.prompt([
			{
				'message':'Would you like to order something?',
				'type':'confirm',
				'name': 'confirm',
			}
		]).then(function(result) {
			if(result.confirm) {
				inquirer.prompt([
					{
						'message': 'What would you like to order? Please enter items id#.',
						'type': 'input',
						'validate': function(num) {return (!isNaN(num) && num<=res.length && num>0)},
						'name': 'item'
					},
					{
						'message':"How many units would you like to order?",
						'validate': function(num) {return (!isNaN(num) && num>0)},
						'type': 'input',
						'name': 'quantity'
					}
				]).then(function(result){
					if((res[result.item-1].stock_quantity-result.quantity) >= 0) {
						changeQuantity(result.quantity, result.item);
						inquirer.prompt([
							{
								'message':'Order successful. Would you like to continue?',
								'type':'confirm',
								'name': 'confirm',
							}
						]).then(function(result) {
							if(result.confirm) {
								prompt();
							}	
							else {
								process.exit()
							}	
						})	
					}
					else {
						console.log("Insufficient quantity. Please try again.");
						inquirer.prompt([
							{
								'message':'Would you like to try again?',
								'type':'confirm',
								'name': 'confirm',
							}
						]).then(function(result) {
							if(result.confirm) {
								prompt();
							}
							else {
								process.exit()
							}			
						})
					}	
				})
			}
			else {
				process.exit()
			}	
		})
	})
}
prompt();
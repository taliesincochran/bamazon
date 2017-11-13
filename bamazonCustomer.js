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
function changeQuantity (itemQuantity, itemName) {
	connection.query("UPDATE products SET stock_quantity = (stock_quantity - " + itemQuantity + ") WHERE item_id = " + itemName, function(err, set) {
		if (err) throw err;
		console.log(set.affectedRows);
	})
}
function prompt() {
	connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err,res){
		if(err) throw err;
		for(var i = 0; i < res.length; i++) {
			var length = res[i].product_name.length;
			var differance = 40 - length;
			var string = res[i].product_name;
			for (var j = 0; j<differance; j++) {
				string += " ";
			}
			var priceLength = res[i].price.toString().length;
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
			var newChoice = "|Product Id:" + bufferId  + res[i].item_id + "| " + string + "| Price per unit:" + bufferPrice +    "$" + res[i].price + '| Stock:' + bufferStock + res[i].stock_quantity + "|";
			console.log(newChoice);
		}
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
						'name': 'item'
					},
					{
						'message':"How many units would you like to order?",
						'type': 'input',
						'name': 'quantity'
					}
				]).then(function(result){
					if((res[result.item-1].stock_quantity-result.quantity) > 0) {
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
		})
	})
}
prompt();
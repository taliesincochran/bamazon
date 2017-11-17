var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
	host: "localhost",
	port:3306,
	user:'root',
	password: 'Yourjoyisyoursorrow6392!',
	database: 'bamazon'
});
var shoppingCart = [];
var username;
var total = 0;
//Logic for login and new customer sign in.
function login() {
	inquirer.prompt([
		{
			message: "Welcome to Bamazon.  Are you a new user or a return customer?",
			name: "new",
			type: "list",
			choices: ["new","returning"]
		}
	]).then(function(result){
		if(result.new === "new") {
			newCustomer();
		}
		else {
			returnCustomer();
		}
	})
};
function newCustomer() {
	inquirer.prompt([
		{
			message:"Please enter your email.",
			type:"input",
			name:"email",
			validate: function (mail)  {  
 				if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {  
   					return (true);
  				}  
  				else {
  					console.log("You have entered an invalid email address!");
  					return (false);
  				} 
   			}
		},
		{
			message:"Please enter your new password. The password must be at least \n   8-32 alpha numeric characters long and have one uppercase letter\n   and at least one number.\n",
			type:"password",
			name:"password",
			validate: function (pass) {
				if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(pass)) {
					return true;
				}
				else {
					console.log("You need to enter a valid password.")
				}
			}
		}
	]).then(function(result) {
		username = result.email;
		var query = "INSERT INTO users (email, pass) VALUES ('" + result.email + "','" + result.password + "')";
		connection.query(query, function(err,res) {
			if(err) throw err;

		});
		prompt();
	})
}
function returnCustomer() {
	inquirer.prompt([
		{
			message:"Enter your email address.",
			type:"input",
			name:'email'
		},
		{
			message:"Enter your password.",
			type:"password",
			name:"pass"
		}
	]).then(function(res){
		username = res.email;
		var email = res.email;
		var pass = res.pass;
		var query = "SELECT COUNT(email) as test FROM users WHERE pass ='" + pass + "'";
		connection.query(query, function(err, result) {
			if(err) throw err;
			if(result[0].test === 1) {
				connection.query("SELECT email as email FROM users WHERE pass ='" + pass + "'", function(err, result2) {
					if(result2[0].email === email) {
						prompt();
					}
				})
			}			
			else {
				console.log("Incorrect email or password.");
				login();
			}
		})

	})
}
//Logic concerning updating database on orders
function changeQuantity (itemQuantity, itemName) {
	connection.query("UPDATE products SET stock_quantity = (stock_quantity - " + itemQuantity + "), number_sold = (number_sold + " + itemQuantity + "), product_sales = (price * number_sold) WHERE item_id = " + itemName, function(err, set) {
		if (err) throw err;
		connection.query("INSERT INTO orders (email, item_id, item_quantity, date_of_order) VALUES('" + username + "'," + itemName + "," + (itemQuantity * -1) + ",CURDATE())", function(error, log) {
			if(error) throw error;
			shoppingCart.push({'id': itemName,'quantity': itemQuantity});
			connection.query("SELECT price FROM products WHERE item_id=" + itemName, function(err, price) {
				if(err) throw err;
				total += (price[0].price * itemQuantity);
			})
			prompt();
		})
	})	
}
//Logic for user prompt item ordering and item selection display
function prompt() {
	connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err,res){
		if(err) throw err;
		var header = "______________________________________________________________________";
		var header2 ="|ID  |Item Name                                |Price      |#In Stock |";
		var between ="|----|-----------------------------------------|-----------|----------|"; 
		var footer = "|____|_________________________________________|___________|__________|";
		//Logic for making the table look nice in the command line
		console.log(header);
		console.log(header2);
		for(var i = 0; i < res.length; i++) {
			console.log(between);
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
			var newChoice = "|" + bufferId  + res[i].item_id + "| " + string + "|" + bufferPrice +    "$" + res[i].price.toFixed(2) + '|' + bufferStock + res[i].stock_quantity + "|";
			console.log(newChoice);
		}
		console.log(footer)
		if(shoppingCart.length > 0) {
			console.log("You've ordered:")
			for(var i = 0; i<shoppingCart.length; i++) {
				console.log(shoppingCart[i].quantity + " of item #" + shoppingCart[i].id);
			}
		}
		console.log("Your total is " + total.toFixed(2));
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
					}
					else {
						console.log("Insufficient quantity. Please try again.");
						inquirer.prompt([
							{
								'message':'Would you like to try again?',
								'type':'confirm',
								'name': 'try',
							}
						]).then(function(response) {
							console.log(response);
							if(response.try) {
								prompt();
							}
							else {	
								connection.end();
								process.exit();
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
login();
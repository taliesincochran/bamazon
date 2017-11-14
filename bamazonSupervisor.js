var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
	host: "localhost",
	port:3306,
	user:'root',
	password: 'Yourjoyisyoursorrow6392!',
	database: 'bamazon'
});
var getSales = function() {
	var query = "SELECT	departments.department_id AS ID, products.department_name AS department, SUM(products.product_sales) AS sales, departments.over_head_cost AS overhead, SUM(products.product_sales)-departments.over_head_cost as profit FROM products JOIN departments ON departments.department_name = products.department_name GROUP BY products.department_name;"
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
		start()
	})
}
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
				start();
		})
	})
}

function start() {
	inquirer.prompt([
		{
			message: "What would you like to do?",
			type: "list",
			name: "selection",
			choices: ["View sales by department.", "Add a department.", "Quit"]
		}
	]).then(function(res) {
		if(res.selection === "Add a department.") {
			addDepartment();
		}
		else if(res.selection === "View sales by department.") {
			getSales();
		}
		else {
			process.exit();
		}
	})	
}
start();
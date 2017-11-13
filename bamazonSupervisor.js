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
		var header2 ="|ID  |Department     |Total Sales |Overhead    |Profit      |"
		var footer = "|___________________________________________________________|"
		console.log(header);
		console.log(header2);
		for(var i = 0; i < res.length; i++) {
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
	})
}
getSales();
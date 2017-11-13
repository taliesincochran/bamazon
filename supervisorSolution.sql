SELECT
	departments.department_id,
    products.department_name,
	SUM(products.product_sales) AS Total,
    departments.over_head_cost,
    SUM(products.product_sales)-departments.over_head_cost as Profit
FROM
    products

JOIN 
departments
on 
departments.department_name = products.department_name
GROUP BY products.department_name;
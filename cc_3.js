//Task 1: Product Price Management Scenario: Online Store You are managing a product pricing system.
let prices = [1, 50, 97, 654521, 3]; //the prices yup
prices.push(69); //adding a new price
prices.shift(); //removing the first price
console.log(`Updated Prices `, prices); //updated price list

//Task 2: Modifying Customer Orders Scenario: Order List You are processing customer orders and need to update order quantities
let orders = [10, 17, 500, 87, 4];
orders[2] +=5; //increasing the 3rd order by 5
let totalOrders = orders.reduce((total, orders) => total + orders, 0); //calculating the total number of the orders
console.log(`Updated Orders `, orders); // updated order list
console.log(`Total Orders `, totalOrders); 
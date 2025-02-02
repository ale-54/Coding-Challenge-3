//Task 1: Product Price Management Scenario: Online Store You are managing a product pricing system.
let prices = [1, 50, 97, 654521, 3]; //the prices yup
prices.push(69); //adding a new price
prices.shift(); //removing the first price
console.log(`Updated Prices: `, prices); //updated price list

//Task 2: Modifying Customer Orders Scenario: Order List You are processing customer orders and need to update order quantities
let orders = [10, 17, 500, 87, 4];
orders[2] +=5; //increasing the 3rd order by 5
let totalOrders = orders.reduce((total, orders) => total + orders, 0); //calculating the total number of the orders
console.log(`Updated Orders: `, orders); // updated order list
console.log(`Total Orders: `, totalOrders); 

//Task 3: Employee Performance Tracking Scenario: HR System You are tracking employee performance data
let employee = {
    name: `Sonny Meatballs`,
    role: `Meatball Eater`,
    performanceScore: 99,
    isActive: `true`
}; // employement info
employee.performanceScore = 57; //Sonny Meatballs performance score went down
employee.promotionEligible = employee.performanceScore >=90; //minimum of 90 to get promotion
console.log(`Updated Employee: `, employee); //updated employee list


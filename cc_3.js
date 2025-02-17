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

//Task 4: Customer Feedback Records Scenario: Feedback Management You are collecting customer feedback data
let feedback = [
    {customerName: `Abyssal Black Flame Dragon`, feedbackText: `This was booty`, rating: 0},
    {customerName: `Dog Bark`, feedbackText: `woof :D`, rating: 4},
    {customerName: `Gordon Shark`, feedbackText: `This was such an exquisite experience, would definitely reccommend this place !!!`, rating: 5}
]; //feedback from three customers
feedback.push({customerName: `Silent Man`, feedbackText: `.....`, rating: 3}); //added new feedback
console.log(`Customer Feedback: `, feedback); //log of all 4 feedbacks

//Task 5: Inventory Management System Scenario: Stock Analysis You are developing a system to track inventory details
let inventory = {
    itemName: `Mahogany Apple Candle`, stockCount: 2, price: 26.95,
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
}; //info on the item and the total value
console.log(inventory); //inventory details
console.log(`Total Inventory: `, inventory.calculateTotalValue()); //total value of the entire inventory stock
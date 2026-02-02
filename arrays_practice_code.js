// 1. Student Grades
let grades = [78, 85, 92, 60, 89];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}
let average = sum / grades.length;
console.log("Average:", average);

// 2. Shopping Cart
let cart = ["Milk", "Bread", "Eggs"];
cart.push("Butter");
cart.unshift("Juice");
cart.shift();
console.log(cart);

// 3. Product Prices
let prices = [10, 20, 30, 40];
let newPrices = prices.map(p => p + p * 0.15);
console.log("Old:", prices);
console.log("New:", newPrices);

// 4. Attendance List
let students = ["Ali", "Fatima", "Omar", "Hassan", "Layla"];
if (students.includes("Omar")) {
  console.log("Omar is present");
} else {
  console.log("Omar is absent");
}

// 5. Temperature Readings
let temps = [25, 30, 29, 33, 27, 35, 28];
let hot = temps.filter(t => t > 30);
console.log(hot);

// 6. Library Books
let books = ["Book1", "Book2", "Book3"];
books.push("Book4");
books.push("Book5");
books.pop();
console.log("Total books:", books.length);

// 7. Restaurant Orders
let orders = ["Pizza", "Burger", "Juice", "Salad"];
orders.splice(1, 1, "Shawarma");
console.log(orders);

// 8. Monthly Sales
let sales = [1200, 2300, 1800, 2900, 3100];
let total = sales.reduce((a, b) => a + b);
console.log("Yearly total:", total);

// 9. Movie Ratings
let ratings = [4.5, 3.2, 5.0, 2.9, 4.1];
let good = ratings.filter(r => r >= 4);
console.log(good);

// 10. Classroom Seats (2D Array)
let classroom = [
  ["Ali", "Fatima"],
  ["Omar", "Layla"],
  ["Hassan", "Amina"]
];
console.log(classroom[1][0]);

// 11. Grocery Prices
let items = ["Rice", "Sugar", "Flour", "Tea"];
let itemPrices = [3, 5, 2, 4];
items.forEach((item, i) => {
  console.log(item, "=", itemPrices[i]);
});

// 12. Flight Destinations
let destinations = ["Doha", "Dubai", "Nairobi", "Istanbul"];
let firstTwo = destinations.slice(0, 2);
console.log(firstTwo);

// 13. Exam Marks Sorting
let marks = [45, 88, 67, 92, 55, 76];
let sorted = [...marks].sort((a, b) => a - b);
console.log("Original:", marks);
console.log("Sorted:", sorted);

// 14. Warehouse Stock
let stock = [120, 80, 150, 60];
let max = Math.max(...stock);
let min = Math.min(...stock);
console.log("Max:", max);
console.log("Min:", min);

// 15. Combine Teams
let teamA = ["Ali", "Layla"];
let teamB = ["Omar", "Fatima"];
let finalTeam = [...teamA, ...teamB];
console.log(finalTeam);

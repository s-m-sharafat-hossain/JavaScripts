
/*
input.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (name) => {
  console.log(`Hello, ${name}`);
  rl.close();
});
*/

// npm install prompt-sync

const prompt = require('prompt-sync')();

// String input:
var Name = prompt("Enter your name: ");
console.log(Name);


// Integer input:
let age = parseInt(prompt("Enter your age: "));
console.log(age);

// Float input: 

let price = parseFloat(prompt("Enter price: "));
console.log(price.toFixed(2));

// Multiple inputs:

let [a, b, c] = prompt("Enter 3 numbers (space-separated): ").split(" ");
console.log(a, b, c);


// Array input: 

let fruits = prompt("Enter fruits (comma-separated): ");
console.log(fruits.split(","));


// Object input: 

let person = prompt("Enter person (JSON format): "); // {"name": "John", "age": 30}
console.log(JSON.parse(person));

// Confirmation Input (OK/Cancel)

let con = confirm("Are you sure: ");
console.log(con);

 





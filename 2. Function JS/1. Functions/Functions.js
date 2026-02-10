/*
=> Function is recusable block of code designed to perform a specific task.

=> syntax: 
    function functionName(parameters){
        // function body   
    }
    functionName(parameters); //function call

*/
const prompt = require("prompt-sync")();


//function without parameters:

function myFunction() {
    console.log("Hello, world!");
}

myFunction();


// Default parameters:

function myFunction2(param1 = "default value") {
    console.log(param1);
}
myFunction2(); // default value
myFunction2("Hello"); // Hello


// Function with parameters:

var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");

function Sum(num1, num2) {
    result = num1 + num2;
    console.log(`Sum: ${result}`);
}
Sum(num1, num2);


// Function with return value:

function sub(num1, num2) {
    result = num1 - num2;
    return result;
}
console.log(`Subtraction: ${sub(num1, num2)}`);




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


// Function with multiple return values:

function multiReturn(num1, num2) {
    result = num1 * num2;
    return result;
}
console.log(`Multiplication: ${multiReturn(num1, num2)}`);


                // Type of functions:


//Named Function:
// -> Function with a own name.

function namedFunction() {
    console.log("Named Function");
}
namedFunction();



//Anonymous Function:
// -> Function without a name. it can call directly.

var anonymousFunction = function() {
    console.log("Anonymous Function");
}
anonymousFunction();


// Function Expression:
// -> Function stored in a variable. Then we can call it using that variable.

var add = function(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));



//Arrow Function:
// -> Modern syntax for functions. 

var arrowFunction = () => {         // use => to define arrow function
    console.log("Arrow Function");
}
arrowFunction();

var add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(5, 10));

// we can write arrow function in single line
const sub = (num1, num2) => num1 - num2;
console.log(sub(5, 10));


/* Immediately Invoked Function Expression (IIFE):
 -> Function that is executed immediately after it is defined.
 -> Used to avoid polluting the global scope.
*/

(function() {
    console.log("Immediately Invoked Function Expression");
})();



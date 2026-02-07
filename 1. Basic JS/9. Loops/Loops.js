/*
=> Loops are used to execute a block of code repeatedly.

=> There are 3 types of loops:
1. for loop
    - for in loop
    - for each loop
2. while loop
    - while loop
    - do while loop
*/

                        // For loop //

/*
for (initialization; condition; increment/decrement) {
    // code to be executed
}
*/

let count = 0;
for (let i = 0; i < 10; i++) {
    count++;
}
console.log(count);


                        // For in loop //

/*
=> The for...in loop iterates over the properties of an object.
=> Here key is the property name and object is the object.

for (key in object) {
    // code to be executed
}
*/

let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key, person[key]);
}


                        // For each loop //

/*
=> The forEach() method calls a function for each element in an array.

array.forEach(function(currentValue, index, arr), thisValue)

=> currentValue: The value of the current element.
=> index: The index of the current element.
=> arr: The array the forEach method was called upon.
=> thisValue: A value to be passed to the function to be used as its this value.
*/

let arr = [1, 2, 3, 4, 5];
arr.forEach(function (currentValue, index, arr) {
    console.log(currentValue, index, arr);
});


                        // While loop //

/*
=> The while loop is used to execute a block of code repeatedly while a condition is true.

# initialization
while (condition) {
    # code to be executed
    # increment/decrement
}
*/

var i = 0;      // initialization
while (i < 10) {  // condition
    i++;        // increment/decrement
}
console.log(i);


                        // Do while loop //

/*
=> The do...while loop is similar to while loop except it excutes the code block at least once before checking the condition. 
=> Condition pore check kre.

# initialization

do {
    # code to be executed
    # increment/decrement
} while (condition);
*/

let i = 0;      // initialization
do {
    i++;        // increment/decrement
} while (i < 10);  // condition
console.log(i);


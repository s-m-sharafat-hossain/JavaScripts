/*
                        JavaScript Operators:

=> Arithmetic operators:     +, -, *, /, %, **(Exponentiation)
=> Assignment operators:     +=, -=, *=, /=, %=, **=
=> Comparison operators:     ==, ===, !=, !==, >, <, >=, <=
=> Logical operators:        &&, ||, !
=> Identity operators:       ===, !==
=> Ternary Operators:        condition ? trueExpression : falseExpression
=> Comma Operators:          ,(Comma) {Left to right evaluation}
=> Unary operators:          typeof, +(U plus), -(U minus), ++, --
=> Membership operators:     in, includes()
=> Bitwise operators:        &(AND), |(OR), ^(XOR), ~(Not)
=> Chain operators:          ?.
*/



                // Arithmetic operators: 
    
// => +, -, *, /, %, **(Exponentiation)

var a = 45;
var b = 34;

let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;

//console.log(add, sub, mul, div.toFixed(2), mod);

console.log(`Addition: ${add}\nSubtraction: ${sub}\nMultiplication: ${mul}\nDivision: ${div.toFixed(2)}\nModulus: ${mod}`);

// a**b like a^b (power)
console.log(`2 to the power of 3 = ${2 ** 3}`);

// JavaScript does not have floor division (//)
// Use Math.floor()
console.log(`Floor division of 13 / 2 = ${Math.floor(13 / 2)}`);

console.log("\n\n")


                    // Assignment operators:     

// +=, -=, *=, /=, %=, **=

a = 5;
a += 4;
console.log(`Add Assignment (a += 4) = ${a}`); // It means: a = a + 4 = 9

a -= 5
console.log(`Sub Assignment (a -= 5) = ${a}`);  // a = a-5 = 4

b = 7
b *=3
console.log(`Mul Assignment (b *= 3) = ${b}`); // b = b*3 = 21

b /= 2;
console.log(`Div Assignment (b /= 2) = ${b.toFixed(2)}`);  // b/2 = 4.50

var c = 11
c %= 3
console.log(`Mod Assignment (c %= 3) = ${c}`); // c = c%3 = 2

var d = 2
d **= 3
console.log(`Exp Assignment (d **= 3) = ${d}`); // d = d**3 = 8

console.log("\n\n")

// Some other assignment operator: <<=, >>=, &=,|=, ^=(XOR), &&=, ||= ;





                        // Comparison operators //     

/* ==, !=, !==, >, <, >=, <=
=> == checks only value
=> != checks only value
=> !== checks both value and type
*/
a = 5;
b = 6;

console.log("a = 5, b= 6");
console.log(`a > b  → ${a > b}`);
console.log(`a >= b  → ${a >= b}`);
console.log(`a < b  → ${a < b}`);
console.log(`a <= b  → ${a <= b}`);
console.log(`a == b → ${a == b}`);
console.log(`a != b → ${a != b}`);

console.log("\n\n");

                        // Identity operators //     

/* ===, !== (Strict comparison: value + type)
=> It checks both value and type
=> Example: 5 === "5" is false because 5 is a number and "5" is a string
=> Example: 5 !== "5" is true because 5 is a number and "5" is a string
*/

a = 5;
b = "5";

console.log(`a === b means a = b (value + type): ${a === b}`);
console.log(`a !== b means a != b (value + type): ${a !== b}`);

console.log("\n\n");


                        // Ternary operator //

// condition ? trueExpression : falseExpression

var age = 20;
var canVote = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

console.log("\n\n");


                        // Logical operators //        

/* &&(AND), ||(OR), !(NOT), ??(Nullish Coalescing)
=> && returns true if both conditions are true
=> || returns true if at least one condition is true
=> ! returns the opposite of the condition
=> ?? returns the right operand if the left operand is null or undefined
*/

a = 6
if(a > 5 && a < 10){
    console.log(`a is between 5 and 10`);
}

if(a > 5 || a < 10){
    console.log(`a is greater than 5 or less than 10`);
}

if(!(a > 5)){
    console.log(`a is not greater than 5`);
}

// Nullish Coalescing (??)
let nullValue = null;
let defaultValue = "Default";
let result = nullValue ?? defaultValue;
console.log(result); // "Default"

console.log("\n\n");

                        // Membership operators:     

/* in, includes() (Used to check values)
=> in is used to check if a property exists in an object
=> includes() is used to check if a value exists in an array
*/

let obj = {name: "John", age: 30};
console.log("name" in obj); // true


let fruits = ["apple", "banana"];
console.log(fruits.includes("banana"));
// Use not in (using !includes)
console.log(!fruits.includes("cherry")); // print Boolean value true

console.log("\n\n");



                        // Bitwise operators:        
 
/* &(AND), |(OR), ^(XOR), ~(Not)
=> &(AND) returns 1 if both bits are 1, otherwise 0
=> |(OR) returns 1 if at least one bit is 1, otherwise 0
=> ^(XOR) returns 1 if bits are different, otherwise 0
=> ~(Not) returns the complement of the number
*/

a = 10;   // binary: 1010
b = 4;    // binary: 0100

console.log("a & b =", a & b);   // 1010 & 0100 = 0000 -> 0
console.log("a | b =", a | b);   // 1010 | 0100 = 1110 -> 14
console.log("a ^ b =", a ^ b);   // 1010 ^ 0100 = 1110 -> 14
console.log("~a =", ~a);         // ~1010 = -(10+1) -> -11

console.log("\n\n");


                        // Comma operator //

/* Used to separate expressions in a single statement
=> Left to right evaluation (returns the last expression)
*/
var x = 1, y = 2, z = 3;
console.log(x, y, z); // 1 2 3

var y = (1,2,3);
console.log(y); // 3 (last expression)




/*
                        JavaScript Operators:

=> Arithmetic operators: +, -, *, /, %, **(Exponentiation)
=> Assignment operators: +=, -=, *=, /=, %=, **=
=> Comparison operators:     ==, ===, !=, !==, >, <, >=, <=
=> Logical operators:        &&, ||, !
=> Identity operators:       ===, !==
=> Membership operators:     in, includes()
=> Bitwise operators:        &(AND), |(OR), ^(XOR), ~(Not)
*/
let a = 45;
let b = 34;


                // Arithmetic operators: 
    
// => +, -, *, /, %, **(Exponentiation)

let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;

//console.log(add, sub, mul, div.toFixed(2), mod);

console.log(`Addition: ${add}\nSubtraction: ${sub}\nMultiplication: ${mul}\nDivision: ${div.toFixed(2)}\nModulus: ${mod}`);

// a**b like a^b (power)
console.log(2 ** 3);

// JavaScript does not have floor division (//)
// Use Math.floor()
console.log(Math.floor(13 / 2));



                    // Assignment operators:     

// +=, -=, *=, /=, %=, **=
a = 5;
a += 4;
console.log(a); // It means: a = a + 4

a /= 2;
console.log(a.toFixed(2));

a = 43;
a = Math.floor(a / 4);
console.log(a);



                        // Comparison operators:     

// ==, ===, !=, !==, >, <, >=, <=
a = 5;
b = 6;

console.log(
  a > b,
  a < b,
  a == b,   // checks value only
  a != b
);



                        // Logical operators:        

// &&, ||, !
let x = 5;
console.log(x > 3 && x < 10);

console.log(x < 4 || x > 12);

console.log(!(x > 3 && x < 10)); // Change output



                        // Identity operators:       

// ===, !== (Strict comparison: value + type)
a = 5;
b = 5;

if (a === b) {
  console.log("A = B");
}

if (a !== b) {
  console.log("A != B");
}

b = 6;
console.log(a === b);



                        // Membership operators:     

// in, includes() (Used to check values)
let fruits = ["apple", "banana"];
console.log(fruits.includes("banana"));

let num = 5;
for (let i = 0; i < num; i++) {
  console.log("Number:", i);
}

for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}

// Use not in (using !includes)
console.log(!fruits.includes("cherry")); // print Boolean value true



                        // Bitwise operators:        
 
// &(AND), |(OR), ^(XOR), ~(Not)
a = 10;   // binary: 1010
b = 4;    // binary: 0100

console.log("a & b =", a & b);   // 1010 & 0100 = 0000 -> 0
console.log("a | b =", a | b);   // 1010 | 0100 = 1110 -> 14
console.log("a ^ b =", a ^ b);   // 1010 ^ 0100 = 1110 -> 14
console.log("~a =", ~a);         // ~1010 = -(10+1) -> -11

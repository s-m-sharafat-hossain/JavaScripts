                                //Arithmetic Operators

/*
  => +(Addition), -(Subtraction), *(Multiplication), /(Division), %(Modulus), 
  => **(Exponentiation), ++(Increment), --(Decrement)
  => -(Unary Minus), +(Unary Plus)
*/


            // Addition(+):
let x = 4+5;
console.log(x); // Number + Number

let y = 5 + " Ball";
console.log(y)


            // Subtraction(-):
let z = 10 - 3;
console.log(z); // Number - Number

let w = "10" - 3;
console.log(w); // String - Number

var a = "Hello" - 3;
console.log(a); // String - Number 
// Output: NaN (Not a Number)


            // Multiplication(*):
var b = 5 * 6;
console.log(b); // Number * Number

var e = 5 * -5;
console.log(e); // Number * Negative Number

var a = Infinity * 0;
console.log(a); // Infinity * 0 Output: NaN

var c = "5" * 6;
console.log(c); // String * Number

var d = "Hello" * 3;
console.log(d); // String * Number Output: NaN


            // Division(/):
a = 6/3;
console.log(a);

b = 5/2;
console.log(b.toFixed(2));

c = 10/0;
console.log(c);    //Infinity

d = 5.0/3
console.log(d.toFixed(4));

e = 6/-3    // Number / Negative Number
console.log(e)


                // Modulus(%):
a = 10%3;
console.log(a);    // 1

b = 10%2;
console.log(b);    // 0

c = 10%0;
console.log(c);    // NaN

d = 10%-3;
console.log(d);    // 1

e = -10%3;
console.log(e);    // -1

f = NaN%-3;
console.log(f);    // NaN


                // Exponentiation(**):
a = 2**3;
console.log(a);    // 8

b = 2**-3;
console.log(b);    // 0.125

c = 2**0;
console.log(c);    // 1

d = 2**NaN;
console.log(d);    // NaN


                // Increment(++)
a = 5;
b = a++
console.log(b);
c = ++a
console.log(c);

                // Decrement(--)
a = 5;
b = a--
console.log(b);
c = --a
console.log(c);


                // Unary Operators
let uNum = 5;
console.log(+uNum); // +5
console.log(-uNum); // -5







                            // Type Conversion:

/*
Type Coercion: JavaScript automatically converts one data type to another.

Type Conversion: JavaScript manually converts one data type to another.

-> String Conversion:
    1. String() constructor
    2. toString() method

-> Number Conversion:
    1. Number() constructor
    2. parseInt() method
    3. parseFloat() method

-> Boolean Conversion:
    1. Boolean() constructor
    2. toBoolean() method
*/

// String Conversion:

let a = 10;
let b = a.toString();
console.log(b);
console.log(typeof b);

let c = String(a);
console.log(c);
console.log(typeof c);

// Number Conversion:

let d = Number(a);
console.log(d);
console.log(typeof d);

let e = parseInt(a);
console.log(e);
console.log(typeof e);

let x= 5.43456433;
let f = parseFloat(x);
console.log(f.toFixed(2));   //Fraction ar por koi ta value nibo ta toFixed() method er moddhe dite hobe.

let y= 5
let z = parseFloat(y);
console.log(z);
console.log(typeof z);

// Boolean Conversion:

let g = Boolean(a);
console.log(g);
console.log(typeof g);

let h = Boolean(b);
console.log(h);
console.log(typeof h);

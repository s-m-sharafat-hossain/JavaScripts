                        // JavaScript Data Type

/*
                    Primitive Data Type:

-> Number: Numeric Value (Integer, Float)
-> String: Text Value
-> Boolean: True or False
-> Undefined: A variable that has been declared but not assigned a value.
-> Null: Absence of value
-> BigInt: Very large integer values
-> Symbol: unique and immutable value. Often used as object property.

                    Non-Primitive Data Type:

-> Object: Collection of properties. 

-> Array: Collection of list values.

-> Function: reusable code block.
*/

            // Primitive Data Type:

// Number:
let x = 50
console.log(x)

// String:
let y = "Hello World"
console.log(y)

// Boolean:
let z = true
console.log(z)

//Undefined:
let a
console.log(a)

//Null:
let b = null
console.log(b)

//BigInt:
let c = 1234567890123456789012345678901234567890n
console.log(c)

//Symbol:
let d = Symbol("id")
console.log(d)

                //Non-Primitive Data Type:

//Object:
let e = {name: "John", age: 30}
console.log(e)

//Array:
let f = [1, 2, 3, 4, 5]
console.log(f)

//Function:
let g = function() {
    console.log("Hello World")
}
g()

let h = function(radius) {
    let area = 3.14 * radius * radius
    return area
}
console.log(h(10))

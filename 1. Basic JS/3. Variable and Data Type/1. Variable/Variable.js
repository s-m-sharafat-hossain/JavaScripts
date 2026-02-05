// -> JavaScript HAS commands for declaring variables: var, let, const

/*
                    JavaScript Variables:

- var: var is a keyword used to declare variables in JavaScript. you can update var.

- let: let is a keyword used to declare variables in JavaScript. you can update let. but you can not redeclare let.

- const: const is a keyword used to declare variables in JavaScript. you can not update const. but you can not redeclare const.


            Rules of Variables Declaration:

1. A variable name must start with a letter, underscore (_), or dollar sign ($).
2. A variable name cannot start with a number.
3. A variable name can only contain alpha-numeric characters, underscores, and $ (A-z, 0-9, _, $).
4. Variable names are case-sensitive.
5. A variable name cannot be any of the JavaScript reserved words.


                        Variable Case:

-> There are different cases to name a variable:
1. Camel Case: myVariableName   (Most common in JavaScript)
2. Pascal Case: MyVariableName
3. Snake Case: my_variable_name
*/


//var:
var WelcomeMassage = "Hello Friend"
console.log(WelcomeMassage)

var x = 50
x = 60
x = 40 //this is possible
console.log(x)

//let:
let bagPrice= 560
let discount= 10.00
let bagSummary = bagPrice-((discount/100)*bagPrice)
console.log(`Bag Price is: ${bagSummary}`)

let a = 50
//a = 40        //this is not possible
console.log(a)


//const:
const pi = 3.14
const radius = 10
const height = 20
const ContainerArea = pi*radius*height
console.log(`Container Area is: ${ContainerArea}`)
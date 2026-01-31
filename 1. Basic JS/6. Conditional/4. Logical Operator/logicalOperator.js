/*
=> Logical Operator:

- Type: && (and), \\(or) , !(not)

- && (AND): All condition must be true.

- \\ (OR): Only one condition must be true

- ! (NOT): Inverts the boolean value of a condition.

- Lower Priority than Math and Comparison operators.

*/

let a= 56;

if (a>=18 && a<100){
    console.log('You can vote')
}else{
    console.log('You can not vote')
}

let b=10

if(a%2==0 || a>20){
    console.log('A is even')
}else{
    console.log('A is odd')
}
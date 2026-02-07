/*
                        Conditional in JavaScript

    => if ... else:
        if(condition){
            // code to execute if condition is true
        }
        
    => if ... else:
        if(condition){
            // code to execute if codition is true
        } else{
            // code to execute if codition is false    
        }

    => if ... else if ... else
        if(condition){
            // code to execute if codition is true
        } else if(condition){
            // code to execute if codition is true
        } else{
            // code to execute if codition is false    
        }

    => We can use nested if.

    => We can use Ternary Operator
*/
const prompt = require('prompt-sync')();

// if:

const a = prompt('Enter a Number: ');
if (a >= 18) {
    console.log(`Your age is ${a}`);
}

// if ... else

//const num = prompt('Enter a number: ');

if(a >= 18){
    console.log("This number is 18 or more than 18");
} else{
    console.log('The number is bellow 18');
}

//if ... else if ... else

//const temp = prompt('Enter Temparature: ');

if(a>30){
    console.log("It's HOT");
} else if(a>=20){
    console.log("It's Warm")
} else{
    console.log("It's Cold");
}


// Ternary Operator

console.log( 13<=a && a<=19?"Teen":a<13?"child":a>19?"Adult":"invalid" );

// Switch Statement

const day = prompt('Enter a day: ');
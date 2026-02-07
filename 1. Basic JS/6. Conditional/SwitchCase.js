/*
=> Switch Case is a control structure that allows you to execute different blocks of code based on the value of a variable.

*/

const prompt = require('prompt-sync')();

const sign = prompt('Enter a sign(+,-,*,/,%): ');

const a = prompt("Enter 1st Number: ");
const b = prompt("Enter 2nd Number: ");

switch(sign){
    case '+':
        console.log(`Addition: ${a+b}`)
        break;
    
}


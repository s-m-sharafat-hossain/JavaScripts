/*
Scope: Scope means when we declare a variable in the conditional, loop, function it only work on between { }. 

when we declare a variable globally it works every where.
*/


let a= 5;

if(a>4){
    let b= 5;
    let sum = a+b;
    console.log(`Sum of a and b is: ${sum}`)
}
//b did not work here.
//but a work everywhere.

//function scope:
function Scope(){
    let c= 5;
    console.log(c)
}
Scope()
//c did not work here.

//block scope:
{
    let ab = 50;
    console.log(ab)
}
//console.log(ab) 
// ab did not work here.

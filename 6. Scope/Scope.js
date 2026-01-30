/*
Scope: Scope means when we declare a variable in the conditional, loop, function it only work on between { }. 

when we declare a variable globally it works every where.
*/


let a= 5;

if(a>4){
    let b= 5;
    let sum = a+b;
    console.log(sum)
}
//b did not work here.
//but a work everywhere.
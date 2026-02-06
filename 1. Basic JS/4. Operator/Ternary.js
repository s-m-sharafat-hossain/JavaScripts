/*

Ternary Operator: ? :

Syntax: condition ? valueIfTrue : valueIfFalse

*/

let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);


// Nested Ternary
var score = 85;
var grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(`Grade: ${grade}`);


// In Function
function getGrade(score) {
    return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
}
console.log(`Grade: ${getGrade(85)}`);

function GradeCalculation(score){
    var grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(`Grade: ${grade}`);
}
GradeCalculation(76);
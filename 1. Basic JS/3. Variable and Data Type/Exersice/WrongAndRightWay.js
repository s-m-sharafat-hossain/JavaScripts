

console.log("10"<"2");
// this is true because Js compare string based on unicode values.

console.log("10"<2);
// this is false because Js compare string based on unicode values.

console.log("10"===10);
// this is false because Js use equality operator to compare both values and types.

console.log([1,2]==[1,2]);
// though both are same type. but JS compare arrays by reference not by value.

//Right way to compare arrays:
const arr1 = [1,2,3];
const arr2 = [1,2,3];
console.log(arr1 === arr2);
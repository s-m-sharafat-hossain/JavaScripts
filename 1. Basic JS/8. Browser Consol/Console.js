
/* Browser Console:
=> The console object provides access to the browser's debugging console.
*/

// console.log()
console.log("Hello world");


// console.error() : to show an error message
console.error("Be careful");


// console.warn() : to show warning message
console.warn("This is my last warning");


// console.info() : Using to show information message. we can add style using %c.
console.info("%cThis is my information", "color: green");


// console.table() : to show data in table format
console.table([{name: "Hamim", age: 22, country: "Bangladesh"},{name: "Munim", age: 22, country: "Bangladesh"},{name: "Sharia", age: 22, country: "Bangladesh"}]);

document.getElementById("B3").onclick = function(){
    console.table([{name: "Hamim", age: 22, country: "Bangladesh"},{name: "Munim", age: 22, country: "Bangladesh"},{name: "Sharia", age: 22, country: "Bangladesh"}]);
}


// console.time() : to show time taken by a code to execute
console.time("Time 1");
function loop(){
    for(let i = 0; i < 100000; i++){
        // do something
    }
}
loop();
console.timeEnd("Time 1");


// console.group() : to group console messages
console.group("Group 1");
console.log("Name: Sharafat Hossain");
console.log("Age: 22");
console.log("Country: Bangladesh");
console.groupEnd();


// console.assert() : to show an error message if the condition is false
console.assert(1 === 2, "1 is not equal to 2");


// console.count() : to count the number of times a message is logged
console.count("Count Label");
console.count("Count Label");
console.countReset("Count Label");
console.count("Count Label");
console.count("Count Label");


// console.trace() : to show the stack trace of the current function
function a(){
    b();
}
function b(){
    c();
}
function c(){
    console.trace();
}
a();
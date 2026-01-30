/*
= Query Selector: 

- getElementById: Find one element by its ID.

- getElementByClassName: Find element by class name

- querySelector: Finds the first element that matches a CSS selector.

- Purpose: To interact with or modify webpage element. 

*/

console.log("Query Selector\n")

//getElementById
document.getElementById('B1').onclick = function(){
    alert("Hello World")
}

//getElementByClassName
document.getElementsByClassName('p1')[0].onclick = function(){
    location.assign("https://www.google.com")
}

//querySelector
document.querySelector('h1').style.color = "red"



    




let cartItem = 0;

document.querySelector('h1').innerText= `Your Item is ${cartItem}`;



document.getElementById('b1').onclick = function() {
    cartItem++;
    document.querySelector('h1').innerText= `Your Item is ${cartItem}`;
};

document.getElementById('b3').onclick = function() {
    cartItem = cartItem+2;
    document.querySelector('h1').innerText= `Your Item is ${cartItem}`;
};




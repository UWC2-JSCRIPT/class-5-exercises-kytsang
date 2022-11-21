// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const answer1= body.firstChild.nextElementSibling;
console.log(answer1);


// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const answer2= ul.parentNode.parentNode;
console.log(answer2);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const answer3= p.parentElement.children[1].children[2];
console.log(answer3);


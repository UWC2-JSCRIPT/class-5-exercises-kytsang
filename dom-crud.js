// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const aElement = document.createElement('a');
const aTextNode= document.createTextNode('Buy Now!');
aElement.appendChild(aTextNode);

const main = document.querySelector('main');
main.appendChild(aElement);

aElement.setAttribute('id', 'cta');


// Access (read) the data-color attribute of the <img>,
// log to the console


const color = document.querySelector('[data-color]');
console.log(color);



// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const thirdLi = document.querySelector('ul li:nth-child(3)')
thirdLi.setAttribute('class', 'highlight');


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const para = document.getElementsByTagName('p');
para.remove();
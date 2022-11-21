// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.



let counter = 0;
const plusEl = document.getElementById('plus');
const number = document.getElementById('counter');
plusEl.addEventListener('click', ()=>{
  let count = counter++;
  number.innerHTML = count;
})


const minusEl = document.getElementById('minus');
minusEl.addEventListener('click', ()=>{
  let count = counter--;
  number.innerHTML = count;
})




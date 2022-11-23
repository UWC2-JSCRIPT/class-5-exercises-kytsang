// If an li element is clicked, toggle the class "done" on the <li>

const list = document.getElementsByTagName('li')[0];

list.addEventListener('click', ()=> {
  list.className='done';
})

// If a delete link is clicked, delete the li element / remove from the DOM

const del = document.getElementsByClassName('delete')[0];

del.addEventListener('click', ()=> {
  list.remove();
})



// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const add = document.getElementsByClassName('add-item')[0];

add.addEventListener('click', (e)=> {
  addListItem(add,e);
})


const addListItem = function(button, e) {
  e.preventDefault();
  const input = button.parentNode.getElementsByTagName('input')[0];  
  const text = input.value; // use this text to create a new <li>
  const aElement = document.createElement('li');
  aElement.innerText=text;
  const todayList = document.getElementsByClassName("today-list")[0];
  todayList.appendChild(aElement);
};





const input = document.querySelector('.input');
const button = document.querySelector('.button');
const items = document.querySelector('.items');
const closeButton = document.querySelector('.close');

const addCloseButton = (li) => {
  const span = document.createElement('span');
  const icon = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(icon);
  li.appendChild(span);
}

button.addEventListener('click', (event) => {
  if (!input.value) {
    alert("You must write something!");
  } else {
    createTask(input.value);
    clearInput();
  }
})

const createTask = (task) => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  li.innerHTML = task;
  items.appendChild(li);
  addCloseButton(li);
}

const clearInput = () => {
  input.value = "";
}

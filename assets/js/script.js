const input = document.querySelector('.input');
const button = document.querySelector('.button');
const items = document.querySelector('.items');
const tasks = document.getElementsByTagName('li');

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
  saveTask(task);
}

const clearInput = () => {
  input.value = "";
  input.focus();
}

document.addEventListener('click', function(event) {
  const el = event.target;
  if (el.classList.contains('close')) {
    el.parentElement.remove();
  }
});

const saveTask = (task) => {
  let tasks = new Array();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.addEventListener('load', () => {
  if(localStorage.hasOwnProperty('tasks')) {
    JSON.parse(localStorage.getItem('tasks')).forEach(element => {
      createTask(element);
    });
  }
})

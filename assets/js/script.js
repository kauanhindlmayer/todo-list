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

input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    if (!input.value) {
      alert("You must write something!");
      return;
    }  
    createTask(input.value);
    clearInput();
  }
})

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
  saveTask();
}

const clearInput = () => {
  input.value = "";
  input.focus();
}

document.addEventListener('click', function(event) {
  const el = event.target;
  if (el.classList.contains('close')) {
    el.parentElement.remove();
    saveTask();
  }
});

const saveTask = () => {
  const tasks = document.querySelectorAll('li');
  const todolist = [];
  
  for(let task of tasks) {
    let textTask = task.innerText;
    textTask = textTask.replace('\u00D7', '');
    todolist.push(textTask);
  }

  localStorage.setItem('todolist', JSON.stringify(todolist));
}

window.addEventListener('load', () => {
  if(localStorage.hasOwnProperty('todolist')) {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('todolist'));

    console.log(tasksFromLocalStorage);

    for (let task of tasksFromLocalStorage) {
      createTask(task);
    }
  }
})

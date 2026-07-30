const todo = document.getElementById('todo-list')
const li = document.createElement('li')
li.textContent = "Finish DOM exercises"
// todo.append(li)
todo.insertAdjacentElement('beforeend',li)
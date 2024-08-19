let todoCount = 2; // Keep track of the number of todos

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  element.parentNode.removeChild(element);
}

function addTodo() {
  const inputEl = document.getElementById("inp");
  const todoText = inputEl.value.trim();

  if (todoText === '') {
    alert('Please write some todo in the input box!')
    return;
   } // Don't add empty todos

  todoCount++; // Increment the todo counter for unique IDs

  // Create a new div for the todo item
  const newTodo = document.createElement('div');
  newTodo.id = "todo-" + todoCount;

  // Create a new h4 element for the todo text
  const todoTextElement = document.createElement('h4');
  todoTextElement.textContent = `${todoCount}. ${todoText}`;
  
  // Create a new delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function () {
    deleteTodo(todoCount);
  };

  // Append the todo text and delete button to the new div
  newTodo.appendChild(todoTextElement);
  newTodo.appendChild(deleteButton);

  // Append the new todo item to the list
  document.getElementById("todos").appendChild(newTodo);

  // Clear the input field after adding the todo
  inputEl.value = '';
}

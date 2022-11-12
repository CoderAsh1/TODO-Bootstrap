let todoInput = document.querySelector("#todo-input");
let ul = document.querySelector(".ul-list");

let todo = [];

//create a listItem
function createElement(text) {
  todo.push(text);

  let li = document.createElement("li");
  li.setAttribute("id", "li" + todo.length);

  let label = document.createElement("label");
  label.setAttribute("id", "label" + todo.length);
  //create edit btn
  let editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.setAttribute("id", "editBtn" + todo.length);
  editBtn.classList.add("btn");
  editBtn.classList.add("btn-primary");
  editBtn.onclick = handleEdit;
  //create delete btn
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "deleteBtn" + todo.length);
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-danger");
  deleteBtn.onclick = handleDelete;

  li.append(label, editBtn, deleteBtn);
  label.innerHTML = text;
  ul.appendChild(li);
}
function handleSubmit() {
  createElement(todoInput.value);
  todoInput.value = "";
}

// edit the TODO

function handleEdit(e) {
  //getting the parent list item
  let listItemClass = e.target.id.replace("editBtn", "li");
  let currentLi = document.getElementById(listItemClass);

  let labelClass = e.target.id.replace("editBtn", "label");
  let currentLabel = document.getElementById(labelClass);

  let textInput = document.getElementById("editInputTodo");
  if (textInput) {
    handleUpdate(e, currentLi, currentLabel);
    currentLi.removeChild(textInput);
    return;
  }

  let editInput = document.createElement("input");
  editInput.setAttribute("id", "editInputTodo");
  editInput.classList.add("form-control");
  editInput.value = currentLabel.innerHTML;
  e.target.innerHTML = "save";
  e.target.classList.add("animate");
  currentLabel.style.display = "none";
  currentLi.prepend(editInput);
}

function handleUpdate(e, currentLi, currentLabel) {
  let editInputVal = document.getElementById("editInputTodo");
  currentLabel.style.display = "block";
  currentLabel.innerHTML = editInputVal.value;

  e.target.innerHTML = "edit";
  e.target.classList.remove("animate");
  console.log(currentLi);
}

function handleDelete(e) {
  let currentLiId = e.target.id.replace("deleteBtn", "li");
  let currentLi = document.getElementById(currentLiId);
  ul.removeChild(currentLi);
}

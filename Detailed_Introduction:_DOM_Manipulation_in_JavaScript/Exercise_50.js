// Code:
const todoInput = document.getElementById("todoInput");
const addTodo = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");
addTodo.addEventListener("click", () => {
const todoText = todoInput.value.trim();
if (todoText !== "") {
const li = document.createElement("li");
li.textContent = todoText;
li.addEventListener("click", () => li.remove()); // Remove item on click
todoList.appendChild(li);
todoInput.value = "";
}
});
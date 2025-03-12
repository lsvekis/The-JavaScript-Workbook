// Code:
const fruits = ["Apple", "Banana", "Cherry"];
const fruitList = document.getElementById("fruitList");
fruits.forEach(fruit => {
const li = document.createElement("li");
li.textContent = fruit;
fruitList.appendChild(li);
});
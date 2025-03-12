// Code:
const dynamicList = document.getElementById("dynamicList");
const addItemBtn = document.getElementById("addItemBtn");
let itemCount = 2;
addItemBtn.addEventListener("click", () => {
const li = document.createElement("li");
li.textContent = "Item " + itemCount++;
dynamicList.appendChild(li);
});
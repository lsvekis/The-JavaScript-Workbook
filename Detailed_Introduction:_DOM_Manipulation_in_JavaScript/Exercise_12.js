// Code:
const oldElement = document.getElementById("oldElement");
const newElement = document.createElement("div");
newElement.textContent = "New Content";
oldElement.parentNode.replaceChild(newElement, oldElement);
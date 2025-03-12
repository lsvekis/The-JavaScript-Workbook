// Code:
const fragmentList = document.getElementById("fragmentList");
const fragment = document.createDocumentFragment();
["Item A", "Item B", "Item C"].forEach(text => {
const li = document.createElement("li");
li.textContent = text;
fragment.appendChild(li);
});
fragmentList.appendChild(fragment);
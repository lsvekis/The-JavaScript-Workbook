// Code:
const itemList = document.getElementById("itemList");
itemList.addEventListener("click", (e) => {
if (e.target && e.target.nodeName === "LI") {
console.log("Clicked on:", e.target.textContent);
}
});
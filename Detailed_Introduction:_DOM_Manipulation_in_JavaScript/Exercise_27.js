// Code:
const removableList = document.getElementById("removableList");
removableList.addEventListener("click", (e) => {
if (e.target && e.target.nodeName === "LI") {
e.target.remove();
}
});
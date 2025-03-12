// Code:
const searchInput = document.getElementById("searchInput");
const searchList = document.getElementById("searchList");
searchInput.addEventListener("input", () => {
const filter = searchInput.value.toLowerCase();
const items = searchList.getElementsByTagName("li");
Array.from(items).forEach(item => {
if (item.textContent.toLowerCase().includes(filter)) {
item.style.display = "";
} else {
item.style.display = "none";
}
});
});
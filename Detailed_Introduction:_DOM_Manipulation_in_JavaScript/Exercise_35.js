// Code:
const dropBtn = document.getElementById("dropBtn");
const dropContent = document.getElementById("dropContent");
dropBtn.addEventListener("click", () => {
dropContent.style.display = dropContent.style.display === "block" ? "none" : "block";
});
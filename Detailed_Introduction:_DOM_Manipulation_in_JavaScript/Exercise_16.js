// Code:
const changeTextBtn = document.getElementById("changeTextBtn");
const targetText = document.getElementById("targetText");
changeTextBtn.addEventListener("click", () => {
targetText.textContent = "Text has been changed!";
});
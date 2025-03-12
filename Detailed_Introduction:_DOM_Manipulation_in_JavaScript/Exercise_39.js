// Code:
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => {
navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});
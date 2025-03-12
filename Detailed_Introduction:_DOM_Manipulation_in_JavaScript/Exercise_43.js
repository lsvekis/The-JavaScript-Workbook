// Code:
const scrollBtn = document.getElementById("scrollBtn");
const targetSection = document.getElementById("targetSection");
scrollBtn.addEventListener("click", () => {
targetSection.scrollIntoView({ behavior: "smooth" });
});
// Code:
const toggleVisibility = document.getElementById("toggleVisibility");
const toggleContent = document.getElementById("toggleContent");
toggleVisibility.addEventListener("click", () => {
if (toggleContent.style.display === "none") {
toggleContent.style.display = "block";
} else {
toggleContent.style.display = "none";
}
});
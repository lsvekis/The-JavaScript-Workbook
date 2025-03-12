// Code:
const buttonContainer = document.getElementById("buttonContainer");
buttonContainer.addEventListener("click", (e) => {
if (e.target && e.target.matches("button.btn")) {
console.log("Clicked:", e.target.textContent);
}
});
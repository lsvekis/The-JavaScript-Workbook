// Code:
const incrementBtn = document.getElementById("incrementBtn");
const counterDiv = document.getElementById("counter");
incrementBtn.addEventListener("click", () => {
let count = parseInt(counterDiv.textContent);
counterDiv.textContent = count + 1;
});
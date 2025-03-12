// Code:
let color = "blue"; // Global variable
function changeColor() {
let color = "red"; // Local variable shadows the global one
console.log("Inside function:", color); // red
}
changeColor();
console.log("Outside function:", color); // blue
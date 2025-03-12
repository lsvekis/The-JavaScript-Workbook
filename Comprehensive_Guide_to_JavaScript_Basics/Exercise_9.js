// Code:
function add(a, b) {
return a + b;
}
function subtract(a, b) {
return a - b;
}
function multiply(a, b) {
return a * b;
}
function divide(a, b) {
if (b === 0) {
console.error("Cannot divide by zero.");
return null;
}
return a / b;
}
console.log("Add:", add(10, 5));
console.log("Subtract:", subtract(10, 5));
console.log("Multiply:", multiply(10, 5));
console.log("Divide:", divide(10, 5));
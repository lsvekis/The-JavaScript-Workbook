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
return "Error: Division by zero";
}
return a / b;
}
function calculator(a, b, operator) {
switch (operator) {
case "+":
return add(a, b);
case "-":
return subtract(a, b);
case "*":
return multiply(a, b);
case "/":
return divide(a, b);
default:
return "Invalid operator";
}
}
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "/")); // 2
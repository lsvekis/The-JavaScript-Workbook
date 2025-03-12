// Code:
function simpleCalculator(num1, num2, operator) {
switch (operator) {
case '+': return num1 + num2;
case '-': return num1 - num2;
case '*': return num1 * num2;
case '/': return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
default: return "Invalid operator";
}
}
console.log("Calculator:", simpleCalculator(10, 2, '+'));
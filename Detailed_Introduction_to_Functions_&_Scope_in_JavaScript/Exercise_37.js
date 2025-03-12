// Code:
function safeDivide(a, b) {
if (b === 0) {
return "Error: Division by zero";
}
return a / b;
}
console.log(safeDivide(10, 0)); // "Error: Division by zero"
console.log(safeDivide(10, 2)); // 5
// Code:
function interactiveCalculator(a, b, operator) {
let output;
switch (operator) {
case '+':
output = a + b;
break;
case '-':
output = a - b;
break;
case '*':
output = a * b;
break;
case '/':
output = b !== 0 ? a / b : "Error: Division by zero";
break;
default:
output = "Invalid operator";
}
return output;
}
// Test the calculator
console.log("Calculator Test:", interactiveCalculator(15, 3, '/'));
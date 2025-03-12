// Code:
function buggyFunction(num) {
// Intentional mistake: using subtraction instead of addition
let result = num - 10;
console.log("Debug: num =", num, "result =", result);
return result;
}
console.log("Buggy function output:", buggyFunction(20));
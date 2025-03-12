// Code:
function outerFunction() {
let message = "Hi";
function innerFunction() {
console.log(message);
}
innerFunction();
}
outerFunction(); // Logs "Hi"
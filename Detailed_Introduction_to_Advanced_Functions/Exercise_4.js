// Code:
function applyOperation(a, b, operation) {
return operation(a, b);
}
function multiply(x, y) {
return x * y;
}
console.log(applyOperation(5, 3, multiply)); // 15
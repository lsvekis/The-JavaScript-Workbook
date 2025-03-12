// Code:
function multiply(a, b = 1) {
return a * b;
}
console.log(multiply(5));    // 5 (b defaults to 1)
console.log(multiply(5, 3)); // 15
// Code:
function secretOperations() {
function secretMultiply(a, b) {
return a * b;
}
return {
multiply: secretMultiply
};
}
const ops = secretOperations();
console.log(ops.multiply(3, 4)); // 12
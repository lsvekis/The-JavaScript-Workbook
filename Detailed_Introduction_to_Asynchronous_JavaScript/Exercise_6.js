// Code:
function addNumbers(a, b, callback) {
setTimeout(() => {
const sum = a + b;
callback(sum);
}, 500);
}
addNumbers(5, 10, result => console.log("Sum:", result));
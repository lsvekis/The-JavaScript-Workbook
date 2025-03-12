// Code:
function checkNaN(value) {
if (isNaN(value)) {
console.log(value, "is NaN");
} else {
console.log(value, "is a valid number");
}
}
checkNaN("Hello");
checkNaN(42);
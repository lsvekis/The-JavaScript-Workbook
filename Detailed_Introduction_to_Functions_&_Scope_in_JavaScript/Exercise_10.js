// Code:
function executeCallback(callback) {
console.log("Before callback");
callback();
console.log("After callback");
}
executeCallback(() => console.log("Callback executed"));
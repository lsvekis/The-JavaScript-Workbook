// Code:
let globalVar = "I'm global";
function scopeTest() {
let localVar = "I'm local";
console.log(globalVar); // Accessible inside the function
console.log(localVar);  // Local to this function
}
scopeTest();
console.log(globalVar); // Accessible globally
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined
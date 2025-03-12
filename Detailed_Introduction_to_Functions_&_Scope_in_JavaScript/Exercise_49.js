// Code:
let shadowVar = "global";
function showShadow() {
let shadowVar = "local";
console.log("Inside function:", shadowVar);
}
showShadow();              // "local"
console.log("Outside function:", shadowVar); // "global"
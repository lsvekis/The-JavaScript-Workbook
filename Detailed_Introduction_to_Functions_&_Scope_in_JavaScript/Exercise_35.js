// Code:
function showBlockScope() {
if (true) {
let blockVar = "Inside block";
console.log(blockVar);
}
// console.log(blockVar); // Error: blockVar is not accessible here
}
showBlockScope();
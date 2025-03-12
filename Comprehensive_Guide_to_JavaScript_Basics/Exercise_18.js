// Code:
function debugExample(x) {
debugger;  // Execution pauses here when developer tools are open
return x * 2;
}
console.log("Debug Example:", debugExample(5));
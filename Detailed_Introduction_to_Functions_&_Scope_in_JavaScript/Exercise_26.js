// Code:
function logArgs() {
for (let i = 0; i < arguments.length; i++) {
console.log("Arg " + i + ":", arguments[i]);
}
}
logArgs("first", "second", "third");
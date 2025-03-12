// Code:
function callbackFunction(callback) {
setTimeout(() => callback("Callback result"), 1000);
}
function promisedFunction() {
return new Promise(resolve => {
callbackFunction(resolve);
});
}
promisedFunction().then(result => console.log(result));
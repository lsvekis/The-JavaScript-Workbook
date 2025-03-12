// Code:
function asyncOperation(value, ms) {
return new Promise(resolve => setTimeout(() => resolve(value), ms));
}
asyncOperation("First", 1000)
.then(result => {
console.log(result);
return asyncOperation("Second", 1000);
})
.then(result => console.log(result));
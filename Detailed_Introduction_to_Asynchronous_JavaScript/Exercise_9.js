// Code:
const promiseChain = new Promise((resolve, reject) => {
setTimeout(() => resolve(10), 500);
});
promiseChain
.then(value => {
console.log("First value:", value);
return value * 2;
})
.then(newValue => {
console.log("Second value:", newValue);
})
.catch(error => console.error(error));
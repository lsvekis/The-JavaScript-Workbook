// Code:
const successPromise = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Promise resolved successfully!");
}, 1000);
});
successPromise.then(message => console.log(message));
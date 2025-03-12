// Code:
const promise1 = new Promise(resolve => setTimeout(() => resolve("One"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Two"), 1500));
Promise.all([promise1, promise2])
.then(results => console.log("Results:", results));
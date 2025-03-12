// Code:
const promiseA = new Promise((resolve, reject) => setTimeout(reject, 100, "A failed"));
const promiseB = new Promise((resolve, reject) => setTimeout(resolve, 200, "B succeeded"));
Promise.any([promiseA, promiseB])
.then(result => console.log("First success:", result))
.catch(error => console.error("Error:", error));
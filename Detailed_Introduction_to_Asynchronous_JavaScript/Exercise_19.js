// Code:
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 500));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 1500));
Promise.race([fast, slow])
.then(result => console.log("Fastest result:", result));
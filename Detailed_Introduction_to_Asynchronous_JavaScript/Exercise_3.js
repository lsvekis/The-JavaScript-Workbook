// Code:
const id = setInterval(() => {
console.log("Interval running...");
}, 1000);
setTimeout(() => {
clearInterval(id);
console.log("Interval stopped");
}, 5000);
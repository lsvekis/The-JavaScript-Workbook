// Code:
const conditionPromise = new Promise((resolve, reject) => {
const condition = false;
setTimeout(() => {
if (condition) {
resolve("Condition met");
} else {
reject("Condition not met");
}
}, 1000);
});
conditionPromise
.then(result => console.log(result))
.catch(error => console.error("Error:", error));
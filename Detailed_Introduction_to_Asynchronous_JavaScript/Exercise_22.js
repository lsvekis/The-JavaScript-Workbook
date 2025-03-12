// Code:
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
async function pauseExample() {
console.log("Before pause");
await sleep(1000);
console.log("After 1 second pause");
}
pauseExample();
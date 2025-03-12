// Code:
function unreliableDelay(ms) {
return new Promise((resolve, reject) => {
setTimeout(() => {
Math.random() > 0.5 ? resolve("Success") : reject("Failure");
}, ms);
});
}
async function testUnreliable() {
try {
const result = await unreliableDelay(500);
console.log(result);
} catch (error) {
console.error("Caught error:", error);
}
}
testUnreliable();
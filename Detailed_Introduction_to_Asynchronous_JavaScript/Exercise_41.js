// Code:
async function tryFinallyExample() {
try {
await sleep(500);
console.log("Operation completed");
} finally {
console.log("This always runs, cleanup tasks");
}
}
tryFinallyExample();
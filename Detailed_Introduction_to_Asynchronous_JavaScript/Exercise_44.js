// Code:
async function periodicUpdate(times, delayTime) {
for (let i = 0; i < times; i++) {
console.log(`Update ${i + 1}`);
await sleep(delayTime);
}
console.log("Updates complete");
}
periodicUpdate(3, 1000);
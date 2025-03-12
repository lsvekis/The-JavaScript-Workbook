// Code:
async function countdown() {
for (let i = 5; i > 0; i--) {
console.log(i);
await sleep(1000);
}
console.log("Countdown complete");
}
countdown();
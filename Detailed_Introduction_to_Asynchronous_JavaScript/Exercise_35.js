// Code:
async function conditionalDelay(condition, ms) {
if (condition) {
await sleep(ms);
return "Delayed";
}
return "No delay";
}
conditionalDelay(true, 1000).then(result => console.log(result));
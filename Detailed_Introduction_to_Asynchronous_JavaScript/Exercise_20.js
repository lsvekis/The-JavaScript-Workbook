// Code:
async function processSequentially() {
const delays = [500, 1000, 1500];
for (const delayTime of delays) {
const result = await new Promise(resolve => setTimeout(() => resolve(`Done after ${delayTime}ms`), delayTime));
console.log(result);
}
}
processSequentially();
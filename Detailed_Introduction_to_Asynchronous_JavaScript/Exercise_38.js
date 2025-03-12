// Code:
async function first() {
await sleep(300);
return "First";
}
async function second() {
await sleep(300);
return "Second";
}
async function third() {
await sleep(300);
return "Third";
}
async function chainCalls() {
const a = await first();
const b = await second();
const c = await third();
console.log(a, b, c);
}
chainCalls();
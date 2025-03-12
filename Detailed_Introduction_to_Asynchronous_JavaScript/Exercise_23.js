// Code:
async function firstAsync() {
await sleep(500);
return "First";
}
async function secondAsync() {
await sleep(500);
return "Second";
}
async function chainAsync() {
const firstResult = await firstAsync();
const secondResult = await secondAsync();
console.log(firstResult, secondResult);
}
chainAsync();
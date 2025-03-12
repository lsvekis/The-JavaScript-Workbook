// Code:
async function simulateApiCalls() {
const first = await fakeFetch("https://api.example.com/first");
console.log(first);
await sleep(1000);
const second = await fakeFetch("https://api.example.com/second");
console.log(second);
}
simulateApiCalls();
// Code:
async function getAsyncData() {
const result = await Promise.resolve("Async data");
console.log(result);
}
getAsyncData();
// Code:
async function processArray(arr) {
const result = [];
for (const num of arr) {
await sleep(300);
result.push(num * 2);
}
return result;
}
processArray([1, 2, 3, 4]).then(res => console.log("Processed array:", res));
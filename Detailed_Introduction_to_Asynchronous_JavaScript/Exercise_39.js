// Code:
async function processItems(items) {
for (const item of items) {
const result = await dynamicPromise(item);
console.log(`Processed ${item}:`, result);
}
}
processItems([2, 3, 4]);
// Code:
async function processInParallel() {
const promises = [
sleep(500).then(() => "Task 1"),
sleep(1000).then(() => "Task 2"),
sleep(1500).then(() => "Task 3")
];
const results = await Promise.all(promises);
console.log("Parallel results:", results);
}
processInParallel();
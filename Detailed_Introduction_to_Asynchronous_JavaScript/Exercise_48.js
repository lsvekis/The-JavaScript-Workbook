// Code:
async function taskManager(tasks) {
const results = [];
for (const task of tasks) {
const result = await task();
results.push(result);
console.log("Task result:", result);
}
return results;
}
// Define some sample async tasks:
const task1 = async () => { await sleep(500); return "Task 1 complete"; };
const task2 = async () => { await sleep(300); return "Task 2 complete"; };
const task3 = async () => { await sleep(700); return "Task 3 complete"; };
taskManager([task1, task2, task3]).then(allResults => {
console.log("All task results:", allResults);
});
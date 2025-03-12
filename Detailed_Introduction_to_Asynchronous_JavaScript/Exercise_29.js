// Code:
async function sequential() {
console.time("Sequential");
const a = await sleep(1000).then(() => "A");
const b = await sleep(1000).then(() => "B");
console.log("Sequential:", a, b);
console.timeEnd("Sequential");
}
async function parallel() {
console.time("Parallel");
const [a, b] = await Promise.all([
sleep(1000).then(() => "A"),
sleep(1000).then(() => "B")
]);
console.log("Parallel:", a, b);
console.timeEnd("Parallel");
}
sequential().then(() => parallel());
// Code:
function timeFunction(fn) {
return function(...args) {
const start = Date.now();
const result = fn(...args);
console.log("Execution time:", Date.now() - start, "ms");
return result;
};
}
function heavyComputation(n) {
let sum = 0;
for (let i = 0; i < n; i++) sum += i;
return sum;
}
const timedHeavyComputation = timeFunction(heavyComputation);
console.log(timedHeavyComputation(1000000));
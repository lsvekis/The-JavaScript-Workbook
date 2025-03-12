// Code:
function reduceArray(arr, reducer, initialValue) {
let accumulator = initialValue;
for (const item of arr) {
accumulator = reducer(accumulator, item);
}
return accumulator;
}
console.log(reduceArray([1, 2, 3, 4], (acc, n) => acc + n, 0)); // 10
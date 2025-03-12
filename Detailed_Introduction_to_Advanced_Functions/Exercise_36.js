// Code:
function memoizedSum() {
const cache = new Map();
return function(arr) {
const key = arr.toString();
if (cache.has(key)) return cache.get(key);
const sum = arr.reduce((a, b) => a + b, 0);
cache.set(key, sum);
return sum;
};
}
const sumMemo = memoizedSum();
console.log(sumMemo([1, 2, 3])); // 6
console.log(sumMemo([1, 2, 3])); // Cached result: 6
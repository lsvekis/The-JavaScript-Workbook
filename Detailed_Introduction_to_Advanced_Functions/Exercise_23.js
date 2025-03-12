// Code:
function memoizePower() {
const cache = {};
return function(n) {
if (n in cache) return cache[n];
cache[n] = Math.pow(2, n);
return cache[n];
};
}
const powerOfTwo = memoizePower();
console.log(powerOfTwo(5)); // 32
console.log(powerOfTwo(5)); // Cached result: 32
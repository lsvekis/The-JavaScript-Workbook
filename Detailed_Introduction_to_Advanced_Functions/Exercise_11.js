// Code:
function memoizedFactorial() {
const cache = {};
return function factorial(n) {
if (n in cache) return cache[n];
if (n <= 1) return 1;
cache[n] = n * factorial(n - 1);
return cache[n];
};
}
const factorialMemo = memoizedFactorial();
console.log(factorialMemo(5)); // 120
console.log(factorialMemo(6)); // Uses cached factorial(5)
// Code:
function memoizedCalculator() {
const cache = {};
return {
factorial: function fact(n) {
if (n in cache) return cache[n];
if (n <= 1) return 1;
cache[n] = n * fact(n - 1);
return cache[n];
},
fibonacci: function fib(n) {
if (n in cache) return cache[n];
if (n < 2) return n;
cache[n] = fib(n - 1) + fib(n - 2);
return cache[n];
}
};
}
const calc = memoizedCalculator();
console.log(calc.factorial(5)); // 120
console.log(calc.fibonacci(10)); // 55
// Code:
function tailFactorial(n, accumulator = 1) {
if (n <= 1) return accumulator;
return tailFactorial(n - 1, accumulator * n);
}
console.log(tailFactorial(5)); // 120
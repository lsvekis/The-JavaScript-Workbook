// Code:
function memoizedTriangular() {
const cache = {};
return function triangular(n) {
if (n in cache) return cache[n];
if (n === 1) return 1;
cache[n] = n + triangular(n - 1);
return cache[n];
};
}
const triangularNumber = memoizedTriangular();
console.log(triangularNumber(5)); // 15 (5+4+3+2+1)
// Code:
function sumAll(...numbers) {
return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10
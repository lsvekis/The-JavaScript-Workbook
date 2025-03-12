// Code:
function multiplyAll(multiplier = 1, ...numbers) {
return numbers.map(num => num * multiplier);
}
console.log(multiplyAll(2, 1, 2, 3)); // [2, 4, 6]
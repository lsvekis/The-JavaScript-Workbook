// Code:
function doubleArray(arr) {
let doubled = [];
for (let i = 0; i < arr.length; i++) {
doubled.push(arr[i] * 2);
}
return doubled;
}
console.log(doubleArray([1, 2, 3])); // [2, 4, 6]
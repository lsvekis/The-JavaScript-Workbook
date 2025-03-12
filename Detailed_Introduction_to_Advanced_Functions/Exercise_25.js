// Code:
function customMap(arr, transform) {
const output = [];
for (const item of arr) {
output.push(transform(item));
}
return output;
}
console.log(customMap([1, 2, 3], n => n * n)); // [1, 4, 9]
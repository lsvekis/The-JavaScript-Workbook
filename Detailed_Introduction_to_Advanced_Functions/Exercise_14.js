// Code:
function mapArray(arr, mapper) {
const result = [];
for (const item of arr) {
result.push(mapper(item));
}
return result;
}
console.log(mapArray([1, 2, 3], n => n * 3)); // [3, 6, 9]
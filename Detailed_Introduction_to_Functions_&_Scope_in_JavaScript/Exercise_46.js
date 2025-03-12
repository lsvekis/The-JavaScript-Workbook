// Code:
function mergeArrays(arr1, arr2, callback) {
return callback(arr1, arr2);
}
const mergeCallback = (a, b) => a.concat(b);
console.log(mergeArrays([1, 2], [3, 4], mergeCallback)); // [1, 2, 3, 4]
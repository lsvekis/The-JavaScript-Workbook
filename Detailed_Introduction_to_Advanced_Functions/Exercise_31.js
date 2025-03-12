// Code:
function flatten(arr) {
return arr.reduce((acc, val) => Array.isArray(val)
? acc.concat(flatten(val))
: acc.concat(val), []);
}
console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
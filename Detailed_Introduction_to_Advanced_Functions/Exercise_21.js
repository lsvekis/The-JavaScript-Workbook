// Code:
function recursiveMax(arr) {
if (arr.length === 1) return arr[0];
const subMax = recursiveMax(arr.slice(1));
return arr[0] > subMax ? arr[0] : subMax;
}
console.log(recursiveMax([4, 7, 2, 9, 5])); // 9
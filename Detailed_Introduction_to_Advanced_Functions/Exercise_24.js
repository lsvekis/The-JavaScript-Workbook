// Code:
function customFilter(arr, predicate) {
const output = [];
arr.forEach(item => {
if (predicate(item)) output.push(item);
});
return output;
}
console.log(customFilter([1, 2, 3, 4, 5], n => n > 3)); // [4, 5]
// Code:
function customForEach(arr, callback) {
for (let i = 0; i < arr.length; i++) {
callback(arr[i], i, arr);
}
}
customForEach([1, 2, 3], (item, index) => console.log(`Item ${index}: ${item}`));
// Code:
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
if (low > high) return -1;
const mid = Math.floor((low + high) / 2);
if (arr[mid] === target) return mid;
return arr[mid] > target
? binarySearch(arr, target, low, mid - 1)
: binarySearch(arr, target, mid + 1, high);
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5)); // 4
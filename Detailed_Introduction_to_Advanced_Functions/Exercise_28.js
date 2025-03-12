// Code:
function countOccurrences(arr, target) {
if (arr.length === 0) return 0;
return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}
console.log(countOccurrences([1, 2, 1, 3, 1, 4], 1)); // 3
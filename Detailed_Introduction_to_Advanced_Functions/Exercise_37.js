// Code:
function sortWithComparator(arr, comparator) {
return arr.sort(comparator);
}
const numbersArray = [4, 2, 7, 1, 5];
console.log(sortWithComparator(numbersArray, (a, b) => a - b)); // [1, 2, 4, 5, 7]
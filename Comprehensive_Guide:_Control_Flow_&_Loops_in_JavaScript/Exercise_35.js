// Code:
let arr = [5, 12, 8, 20, 3];
let filtered = [];
for (let i = 0; i < arr.length; i++) {
if (arr[i] > 10) {
filtered.push(arr[i]);
}
}
console.log("Filtered array:", filtered);
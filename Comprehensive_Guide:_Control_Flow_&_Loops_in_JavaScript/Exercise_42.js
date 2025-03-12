// Code:
let originalArray = [1, 2, 3, 4];
let reversedArray = [];
for (let i = originalArray.length - 1; i >= 0; i--) {
reversedArray.push(originalArray[i]);
}
console.log("Reversed array:", reversedArray);
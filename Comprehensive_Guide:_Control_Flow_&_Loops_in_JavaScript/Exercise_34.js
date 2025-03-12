// Code:
let numbersArray = [3, 7, 2, 9, 5];
let max = numbersArray[0];
for (let i = 1; i < numbersArray.length; i++) {
if (numbersArray[i] > max) {
max = numbersArray[i];
}
}
console.log("Maximum value:", max);
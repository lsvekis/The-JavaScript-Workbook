// Code:
let mixedNumbers = [4, 6, -2, 7, -5];
let negativeIndex = -1;
for (let i = 0; i < mixedNumbers.length; i++) {
if (mixedNumbers[i] < 0) {
negativeIndex = i;
break;
}
}
console.log("Index of first negative number:", negativeIndex);
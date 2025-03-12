// Code:
let itemsArray = [1, 2, 3, 2, 4, 2, 5];
let target = 2;
let countOccurrences = 0;
for (let i = 0; i < itemsArray.length; i++) {
if (itemsArray[i] === target) {
countOccurrences++;
}
}
console.log("Occurrences of", target + ":", countOccurrences);
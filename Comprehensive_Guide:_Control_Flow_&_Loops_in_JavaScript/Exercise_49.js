// Code:
let digitString = "12345";
let sumDigits = 0;
for (let i = 0; i < digitString.length; i++) {
sumDigits += Number(digitString[i]);
}
console.log("Sum of digits:", sumDigits);
// Code:
function checkNumber(num) {
if (num > 0) return "Positive";
if (num < 0) return "Negative";
return "Zero";
}
console.log(checkNumber(10));  // "Positive"
console.log(checkNumber(-5));  // "Negative"
console.log(checkNumber(0));   // "Zero"
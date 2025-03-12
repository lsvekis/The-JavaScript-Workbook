// Code:
let nums = [1, 2, 3, 4, 5, 6];
let evenSum = 0;
for (let i = 0; i < nums.length; i++) {
if (nums[i] % 2 === 0) {
evenSum += nums[i];
}
}
console.log("Sum of even numbers:", evenSum);
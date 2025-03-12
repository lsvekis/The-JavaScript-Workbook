// Code:
const multiplyCurried = a => b => c => a * b * c;
console.log(multiplyCurried(2)(3)(4)); // 24
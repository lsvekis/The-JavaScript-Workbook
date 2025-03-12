// Code:
let falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(function(value, index) {
if (!value) {
console.log(`Value at index ${index} (${value}) is falsy`);
}
});
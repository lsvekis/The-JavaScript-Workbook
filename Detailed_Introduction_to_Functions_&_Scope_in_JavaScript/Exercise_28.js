// Code:
function greaterThan(threshold) {
return function(num) {
return num > threshold;
};
}
const isGreaterThan10 = greaterThan(10);
console.log(isGreaterThan10(15)); // true
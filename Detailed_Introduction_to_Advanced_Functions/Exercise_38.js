// Code:
function accumulator() {
let total = 0;
return function(num) {
total += num;
return total;
};
}
const accumulate = accumulator();
console.log(accumulate(5)); // 5
console.log(accumulate(10)); // 15
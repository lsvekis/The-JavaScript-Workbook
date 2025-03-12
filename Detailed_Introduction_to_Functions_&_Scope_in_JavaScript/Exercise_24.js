// Code:
function makeAdder(x) {
return function(y) {
return x + y;
};
}
const addFive = makeAdder(5);
console.log(addFive(3)); // 8
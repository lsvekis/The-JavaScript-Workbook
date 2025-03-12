// Code:
function makeAdder(x) {
return function(y) {
return x + y;
};
}
const addTen = makeAdder(10);
console.log(addTen(5)); // 15
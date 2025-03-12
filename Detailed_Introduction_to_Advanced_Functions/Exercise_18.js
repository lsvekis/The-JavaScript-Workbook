// Code:
function add(a, b) {
return a + b;
}
function curryAdd(a) {
return function(b) {
return add(a, b);
};
}
const addTen = curryAdd(10);
console.log(addTen(5)); // 15
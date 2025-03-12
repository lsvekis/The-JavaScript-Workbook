// Code:
function addThenMultiply(a) {
return function(b) {
return function(c) {
return (a + b) * c;
};
};
}
console.log(addThenMultiply(2)(3)(4)); // (2+3)*4 = 20
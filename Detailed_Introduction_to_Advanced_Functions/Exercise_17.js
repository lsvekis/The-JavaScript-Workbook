// Code:
function curriedSum(a) {
return function(b) {
return function(c) {
return a + b + c;
};
};
}
console.log(curriedSum(1)(2)(3)); // 6
// Code:
function curriedAdd(a) {
return function(b) {
return a + b;
};
}
console.log(curriedAdd(4)(5)); // 9
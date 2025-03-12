// Code:
function curry(fn) {
return function curried(...args) {
if (args.length >= fn.length) {
return fn(...args);
} else {
return function(...nextArgs) {
return curried(...args, ...nextArgs);
};
}
};
}
function sumThree(a, b, c) {
return a + b + c;
}
const curriedSumThree = curry(sumThree);
console.log(curriedSumThree(1)(2)(3)); // 6
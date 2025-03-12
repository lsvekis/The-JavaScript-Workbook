// Code:
const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };
const mergedObj = { ...objA, ...objB };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
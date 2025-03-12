// Code:
function compose(f, g) {
return function(x) {
return f(g(x));
};
}
function addOne(n) { return n + 1; }
function square(n) { return n * n; }
const addOneThenSquare = compose(square, addOne);
console.log(addOneThenSquare(4)); // (4+1)² = 25
// Code:
try {
console.log(funcExpr(2, 3)); // This will throw an error because funcExpr is not hoisted
} catch (error) {
console.log("Error:", error.message);
}
var funcExpr = function(a, b) {
return a + b;
};
// Code:
function repeat(callback, times) {
for (let i = 0; i < times; i++) {
callback(i);
}
}
repeat(i => console.log("Iteration", i), 3);
// Expected output: Iteration 0, Iteration 1, Iteration 2
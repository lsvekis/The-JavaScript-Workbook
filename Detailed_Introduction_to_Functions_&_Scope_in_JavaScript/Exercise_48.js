// Code:
function callTwice(fn) {
fn();
fn();
}
callTwice(() => console.log("Called!"));
// Expected output: "Called!" printed twice
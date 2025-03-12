// Code:
try {
console.log(nonHoistedLet);
} catch (e) {
console.log("Error:", e.message); // ReferenceError
}
let nonHoistedLet = "Not hoisted";
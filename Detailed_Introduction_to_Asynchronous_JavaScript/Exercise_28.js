// Code:
async function errorPropagation() {
try {
await Promise.reject("Failed operation");
} catch (error) {
console.error("Caught error:", error);
}
}
errorPropagation();
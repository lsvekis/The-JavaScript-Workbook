// Code:
async function getAsyncError() {
try {
const result = await Promise.reject("Async error occurred");
console.log(result);
} catch (error) {
console.error("Error caught:", error);
}
}
getAsyncError();
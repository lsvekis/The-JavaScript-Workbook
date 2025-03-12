// Code:
async function fetchWithRetry(url) {
try {
return await fakeFetch(url);
} catch (error) {
console.error("First attempt failed, retrying...");
return await fakeFetch(url);
}
}
fetchWithRetry("https://example.com/api")
.then(result => console.log("Result:", result))
.catch(error => console.error("Final error:", error));
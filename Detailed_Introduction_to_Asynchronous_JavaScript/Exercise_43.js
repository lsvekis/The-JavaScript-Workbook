// Code:
async function processApiData() {
const data = await fakeFetch("https://api.example.com/data");
console.log("API Data:", data);
}
processApiData();
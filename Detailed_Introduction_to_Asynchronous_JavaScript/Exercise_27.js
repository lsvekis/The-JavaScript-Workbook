// Code:
function fakeFetch(url) {
return new Promise(resolve => {
setTimeout(() => {
resolve(`Fetched data from ${url}`);
}, 1000);
});
}
async function fetchData() {
const data = await fakeFetch("https://example.com/api");
console.log(data);
}
fetchData();
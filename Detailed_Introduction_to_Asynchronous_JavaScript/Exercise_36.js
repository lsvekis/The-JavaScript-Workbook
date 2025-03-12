// Code:
const urls = ["url1", "url2", "url3"];
async function fetchAll(urls) {
const results = await Promise.all(urls.map(url => fakeFetch(url)));
return results;
}
fetchAll(urls).then(results => console.log("Fetched URLs:", results));
// Code:
async function getUser() {
await sleep(500);
return { id: 1, name: "Alice" };
}
getUser().then(user => console.log("User:", user));
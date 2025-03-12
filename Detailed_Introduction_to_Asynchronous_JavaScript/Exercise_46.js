// Code:
async function dynamicCall(name) {
if (name === "Alice") {
return await getUser();
} else {
return await Promise.resolve({ id: 2, name: "Bob" });
}
}
dynamicCall("Alice").then(user => console.log("Dynamic call result:", user));
// Code:
async function dynamicPromise(num) {
return await new Promise(resolve => {
setTimeout(() => resolve(num * num), 500);
});
}
dynamicPromise(5).then(result => console.log("Squared:", result));
// Code:
function wait(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
wait(800).then(() => console.log("Waited for 800ms"));
// Code:
function delayedCallback(callback) {
setTimeout(() => {
callback("Data received");
}, 1500);
}
delayedCallback(result => console.log(result));
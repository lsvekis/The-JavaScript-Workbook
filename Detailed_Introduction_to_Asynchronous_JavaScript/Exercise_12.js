// Code:
function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
delay(1500).then(() => console.log("Delayed by 1.5 seconds"));
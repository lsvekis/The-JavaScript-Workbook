// Code:
class Timer {
start(delay, callback) {
setTimeout(callback, delay);
}
}
const timer = new Timer();
timer.start(1000, () => console.log("Timer finished"));
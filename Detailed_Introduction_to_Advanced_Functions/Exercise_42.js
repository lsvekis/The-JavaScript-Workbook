// Code:
function privateCounter() {
let count = 0;
return {
increment: () => ++count,
decrement: () => --count,
getCount: () => count
};
}
const myCounter = privateCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount()); // 2
myCounter.decrement();
console.log(myCounter.getCount()); // 1
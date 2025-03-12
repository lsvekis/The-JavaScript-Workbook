// Code:
function createAdvancedCounter() {
let count = 0;
return {
increment: () => ++count,
reset: () => (count = 0)
};
}
const advancedCounter = createAdvancedCounter();
console.log(advancedCounter.increment()); // 1
console.log(advancedCounter.increment()); // 2
advancedCounter.reset();
console.log(advancedCounter.increment()); // 1
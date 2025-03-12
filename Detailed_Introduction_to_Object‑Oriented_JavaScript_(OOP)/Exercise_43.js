// Code:
class InstanceCounter {
static count = 0;
constructor() {
InstanceCounter.count++;
}
static getCount() {
return InstanceCounter.count;
}
}
new InstanceCounter();
new InstanceCounter();
console.log(InstanceCounter.getCount()); // 2
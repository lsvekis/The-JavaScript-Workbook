// Code:
class ChainableCalculator {
constructor(value = 0) {
this.value = value;
}
add(num) {
this.value += num;
return this;
}
subtract(num) {
this.value -= num;
return this;
}
getResult() {
return this.value;
}
}
const calcChain = new ChainableCalculator(10);
console.log(calcChain.add(5).subtract(3).getResult()); // 12
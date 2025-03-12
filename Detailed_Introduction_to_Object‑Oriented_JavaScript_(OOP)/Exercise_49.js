// Code:
class NumberCollection {
constructor(numbers) {
this.numbers = numbers;
}
*getNumbers() {
for (const num of this.numbers) {
yield num;
}
}
}
const collection = new NumberCollection([10, 20, 30]);
for (const num of collection.getNumbers()) {
console.log(num);
}
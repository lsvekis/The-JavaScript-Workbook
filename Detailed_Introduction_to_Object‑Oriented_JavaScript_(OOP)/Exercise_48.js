// Code:
class DataProcessor {
constructor(data) {
this.data = data;
}
process(callback) {
return callback(this.data);
}
}
const processor = new DataProcessor([1, 2, 3]);
console.log(processor.process(arr => arr.map(n => n * 2))); // [2, 4, 6]
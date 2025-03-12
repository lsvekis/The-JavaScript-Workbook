// Code:
class CarClass {
constructor(make, model) {
this.make = make;
this.model = model;
}
getInfo() {
return `${this.make} ${this.model}`;
}
}
const car3 = new CarClass("Ford", "Focus");
console.log(car3.getInfo()); // "Ford Focus"
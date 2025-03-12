// Code:
Car.prototype.getInfo = function() {
return `${this.make} ${this.model}`;
};
console.log(car1.getInfo()); // "Toyota Corolla"
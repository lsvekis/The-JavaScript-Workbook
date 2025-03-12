// Code:
function Vehicle(type) {
this.type = type;
}
Vehicle.prototype.getType = function() {
return this.type;
};
function Motorcycle(brand, type) {
Vehicle.call(this, type);
this.brand = brand;
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;
Motorcycle.prototype.getBrand = function() {
return this.brand;
};
const bike = new Motorcycle("Harley", "Cruiser");
console.log(bike.getType());  // "Cruiser"
console.log(bike.getBrand()); // "Harley"
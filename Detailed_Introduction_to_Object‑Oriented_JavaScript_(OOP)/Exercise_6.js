// Code:
class ElectricCar extends CarClass {
constructor(make, model, batteryCapacity) {
super(make, model);
this.batteryCapacity = batteryCapacity;
}
getBatteryInfo() {
return `Battery: ${this.batteryCapacity} kWh`;
}
}
const tesla = new ElectricCar("Tesla", "Model 3", 75);
console.log(tesla.getInfo());         // "Tesla Model 3"
console.log(tesla.getBatteryInfo());    // "Battery: 75 kWh"
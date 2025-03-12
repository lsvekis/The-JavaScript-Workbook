// Code:
class Device {
constructor(name) {
this.name = name;
}
getDescription() {
return `This is a device: ${this.name}`;
}
}
class Smartphone extends Device {
constructor(name, os) {
super(name);
this.os = os;
}
getDescription() {
return `Smartphone: ${this.name}, OS: ${this.os}`;
}
}
const phone = new Smartphone("iPhone", "iOS");
console.log(phone.getDescription());
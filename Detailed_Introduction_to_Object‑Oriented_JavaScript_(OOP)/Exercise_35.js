// Code:
function Gadget(name, price = 99.99) {
this.name = name;
this.price = price;
}
const gadget = new Gadget("Smartphone");
console.log(gadget.price); // 99.99
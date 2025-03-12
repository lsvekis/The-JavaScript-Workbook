// Code:
class Rectangle {
constructor(width, height) {
this.width = width;
this.height = height;
}
get area() {
return this.width * this.height;
}
set area(value) {
// For demonstration: adjust width proportionally (not a real setter)
this.width = value / this.height;
}
}
const rect = new Rectangle(5, 4);
console.log(rect.area); // 20
rect.area = 40;
console.log(rect.width); // 10
// Code:
class RectanglePrivate {
#width;
#height;
constructor(width, height) {
this.#width = width;
this.#height = height;
}
getArea() {
return this.#width * this.#height;
}
}
const rectPrivate = new RectanglePrivate(5, 10);
console.log(rectPrivate.getArea()); // 50
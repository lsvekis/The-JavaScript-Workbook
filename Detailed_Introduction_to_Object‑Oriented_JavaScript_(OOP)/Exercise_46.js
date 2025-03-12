// Code:
class PizzaBuilder {
constructor() {
this.toppings = [];
}
addTopping(topping) {
this.toppings.push(topping);
return this;
}
build() {
return `Pizza with ${this.toppings.join(", ")}`;
}
}
const myPizza = new PizzaBuilder()
.addTopping("cheese")
.addTopping("pepperoni")
.build();
console.log(myPizza);
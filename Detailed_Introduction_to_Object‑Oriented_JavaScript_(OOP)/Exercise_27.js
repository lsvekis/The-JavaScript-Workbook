// Code:
const animal = {
speak() {
return "Some sound";
}
};
const dog = Object.create(animal);
dog.bark = function() {
return "Woof!";
};
console.log(dog.speak()); // "Some sound"
console.log(dog.bark());  // "Woof!"
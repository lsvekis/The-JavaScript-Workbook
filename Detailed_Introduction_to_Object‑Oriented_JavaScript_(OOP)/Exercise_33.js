// Code:
class Animal {
constructor(name) {
this.name = name;
}
speak() {
return `${this.name} makes a sound.`;
}
}
class Dog extends Animal {
speak() {
return `${this.name} barks.`;
}
}
class Cat extends Animal {
speak() {
return `${this.name} meows.`;
}
}
const dog = new Dog("Rex");
const cat = new Cat("Whiskers");
console.log(dog.speak()); // "Rex barks."
console.log(cat.speak()); // "Whiskers meows."
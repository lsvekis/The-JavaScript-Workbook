// Code:
function isAnimal(obj) {
return obj instanceof Animal;
}
console.log(isAnimal(dog)); // true
console.log(isAnimal({}));  // false
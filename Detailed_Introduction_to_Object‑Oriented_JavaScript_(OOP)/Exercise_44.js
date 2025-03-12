// Code:
const genericPerson = new Person("Generic", 40);
genericPerson.greet = function() {
return "I have a unique greeting!";
};
console.log(genericPerson.greet());
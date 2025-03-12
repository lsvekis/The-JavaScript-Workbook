// Code:
function createGreeter(greeting) {
return function(name) {
return greeting + ", " + name + "!";
};
}
const greetHello = createGreeter("Hello");
console.log(greetHello("Alice")); // "Hello, Alice!"
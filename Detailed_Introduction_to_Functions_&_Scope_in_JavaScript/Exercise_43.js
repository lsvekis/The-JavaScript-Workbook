// Code:
function createGreeting() {
return function(name) {
return "Greetings, " + name + "!";
};
}
const greetUser = createGreeting();
console.log(greetUser("Grace")); // "Greetings, Grace!"
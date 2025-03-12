// Code:
const personObj = {
name: "Eve",
greet: function() {
return "Hello, " + this.name;
}
};
console.log(personObj.greet()); // "Hello, Eve"
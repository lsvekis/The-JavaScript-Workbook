// Code:
function createPerson(name) {
return {
getName: () => name,
setName: newName => name = newName
};
}
const personObj = createPerson("Alice");
console.log(personObj.getName()); // "Alice"
personObj.setName("Bob");
console.log(personObj.getName()); // "Bob"
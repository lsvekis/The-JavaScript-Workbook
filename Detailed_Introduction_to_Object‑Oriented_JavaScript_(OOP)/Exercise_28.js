// Code:
const userOOP = {
name: "Sam",
getName() {
return this.name;
}
};
console.log(userOOP.getName()); // "Sam"
const getNameFunc = userOOP.getName;
console.log(getNameFunc());     // In non-strict mode, may log global name or undefined
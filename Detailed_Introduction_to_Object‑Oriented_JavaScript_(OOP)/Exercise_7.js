// Code:
function createUser(username, password) {
let _password = password; // private variable
return {
getUsername: () => username,
checkPassword: (input) => input === _password
};
}
const user = createUser("john_doe", "secret123");
console.log(user.getUsername());      // "john_doe"
console.log(user.checkPassword("secret123")); // true
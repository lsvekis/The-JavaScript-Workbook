// Code:
class SecureUser {
#password;
constructor(username, password) {
this.username = username;
this.#password = password;
}
checkPassword(input) {
return input === this.#password;
}
}
const secureUser = new SecureUser("jane_doe", "mypassword");
console.log(secureUser.username);      // "jane_doe"
console.log(secureUser.checkPassword("mypassword")); // true
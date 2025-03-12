// Code:
class ProtectedUser {
#email;
constructor(email) {
this.#email = email;
}
getEmail() {
return this.#email;
}
setEmail(newEmail) {
// You might add validation here
this.#email = newEmail;
}
}
const protectedUser = new ProtectedUser("user@example.com");
console.log(protectedUser.getEmail());
protectedUser.setEmail("new@example.com");
console.log(protectedUser.getEmail());
// Code:
function createUser(username, email) {
return {
username,
email,
describe() {
return `${this.username} (${this.email})`;
}
};
}
const user1 = createUser("sam", "sam@example.com");
console.log(user1.describe());
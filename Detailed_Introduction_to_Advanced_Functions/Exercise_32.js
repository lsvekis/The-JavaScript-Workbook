// Code:
function secretHolder(secret) {
return {
getSecret: () => secret,
setSecret: newSecret => secret = newSecret
};
}
const holder = secretHolder("initial secret");
console.log(holder.getSecret()); // "initial secret"
holder.setSecret("new secret");
console.log(holder.getSecret()); // "new secret"
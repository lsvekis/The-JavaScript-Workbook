// Code:
const privateData = new WeakMap();
class SecretAgent {
constructor(name) {
privateData.set(this, { codeName: name });
}
getCodeName() {
return privateData.get(this).codeName;
}
}
const agent = new SecretAgent("Bond");
console.log(agent.getCodeName()); // "Bond"
// Code:
class Account {
#balance = 0;
constructor(initialBalance = 0) {
this.#balance = initialBalance;
}
deposit(amount) {
this.#balance += amount;
}
withdraw(amount) {
if (amount <= this.#balance) {
this.#balance -= amount;
return amount;
}
return "Insufficient funds";
}
getBalance() {
return this.#balance;
}
}
const account = new Account(100);
account.deposit(50);
console.log(account.getBalance());   // 150
console.log(account.withdraw(70));   // 70
console.log(account.getBalance());   // 80
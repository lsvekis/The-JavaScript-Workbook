// Code:
class UniqueID {
static #counter = 0;
constructor() {
this.id = ++UniqueID.#counter;
}
}
const id1 = new UniqueID();
const id2 = new UniqueID();
console.log(id1.id, id2.id); // 1 2
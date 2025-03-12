// Code:
for (let key in book) {
if (book.hasOwnProperty(key)) {
console.log(`${key}: ${book[key]}`);
}
}
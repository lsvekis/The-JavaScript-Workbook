// Code:
Book.prototype.read = function() {
return `Reading "${this.title}" by ${this.author}`;
};
console.log(book1.read());
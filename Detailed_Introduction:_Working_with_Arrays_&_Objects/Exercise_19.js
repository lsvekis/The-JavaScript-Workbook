// Code:
book.getDescription = function() {
return `${this.title} by ${this.author}, ${this.pages} pages.`;
};
console.log(book.getDescription());
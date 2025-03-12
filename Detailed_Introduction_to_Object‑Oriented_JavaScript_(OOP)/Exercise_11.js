// Code:
function Book(title, author, pages = 100) {
this.title = title;
this.author = author;
this.pages = pages;
}
const book1 = new Book("1984", "George Orwell");
console.log(book1.pages); // 100 (default)
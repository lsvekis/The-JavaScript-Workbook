// Code:
class Book {
constructor(title, author) {
this.title = title;
this.author = author;
this.isBorrowed = false;
}
borrow() {
if (!this.isBorrowed) {
this.isBorrowed = true;
return true;
}
return false;
}
returnBook() {
this.isBorrowed = false;
}
}
class Member {
constructor(name) {
this.name = name;
this.borrowedBooks = [];
}
borrowBook(book) {
if (book.borrow()) {
this.borrowedBooks.push(book);
return `${this.name} borrowed "${book.title}"`;
}
return `"${book.title}" is not available`;
}
returnBook(book) {
const index = this.borrowedBooks.indexOf(book);
if (index !== -1) {
book.returnBook();
this.borrowedBooks.splice(index, 1);
return `${this.name} returned "${book.title}"`;
}
return `${this.name} did not borrow "${book.title}"`;
}
}
class Library {
constructor() {
this.books = [];
this.members = [];
}
addBook(book) {
this.books.push(book);
}
registerMember(member) {
this.members.push(member);
}
}
const library = new Library();
const bookA = new Book("1984", "George Orwell");
const bookB = new Book("Brave New World", "Aldous Huxley");
library.addBook(bookA);
library.addBook(bookB);
const member = new Member("John Doe");
library.registerMember(member);
console.log(member.borrowBook(bookA));
console.log(member.borrowBook(bookB));
console.log(member.returnBook(bookA));
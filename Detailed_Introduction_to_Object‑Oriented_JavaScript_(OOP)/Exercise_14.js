// Code:
class EBook extends Book {
constructor(title, author, pages, fileSize) {
super(title, author, pages);
this.fileSize = fileSize;
}
getFileSize() {
return `File size: ${this.fileSize} MB`;
}
}
const ebook = new EBook("Digital Fortress", "Dan Brown", 356, 2);
console.log(ebook.read());          // Inherited method
console.log(ebook.getFileSize());     // "File size: 2 MB"
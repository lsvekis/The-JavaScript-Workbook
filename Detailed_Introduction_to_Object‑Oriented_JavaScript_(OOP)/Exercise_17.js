// Code:
class EBookOverride extends Book {
constructor(title, author, pages, fileSize) {
super(title, author, pages);
this.fileSize = fileSize;
}
read() {
return `${super.read()} [File size: ${this.fileSize} MB]`;
}
}
const ebook2 = new EBookOverride("Inferno", "Dan Brown", 480, 3);
console.log(ebook2.read());
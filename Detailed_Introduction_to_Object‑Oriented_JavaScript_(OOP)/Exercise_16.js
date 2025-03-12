// Code:
Object.prototype.describe = function() {
return JSON.stringify(this);
};
console.log(book1.describe());
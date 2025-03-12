// Code:
class PersonOOP {
constructor(name, age) {
this.name = name;
this.age = age;
}
introduce() {
return `Hi, I am ${this.name}`;
}
}
class Student extends PersonOOP {
constructor(name, age, grade) {
super(name, age);
this.grade = grade;
}
study() {
return `${this.name} is studying.`;
}
}
const student1 = new Student("Emily", 20, "A");
console.log(student1.introduce());
console.log(student1.study());
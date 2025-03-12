// Code:
class Movie {
constructor(title, director) {
this.title = title;
this.director = director;
}
describe() {
return `${this.title} was directed by ${this.director}`;
}
}
const movie = new Movie("Inception", "Christopher Nolan");
console.log(movie.describe());
// Code:
class MovieWithFactory extends Movie {
static defaultMovie() {
return new Movie("The Matrix", "The Wachowskis");
}
}
const defaultMovie = MovieWithFactory.defaultMovie();
console.log(defaultMovie.describe());
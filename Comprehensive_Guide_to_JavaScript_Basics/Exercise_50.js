// Code:
function guessNumberGame(userGuess) {
const targetNumber = 7; // The correct number
if (userGuess == targetNumber) {
console.log("Congratulations! You guessed correctly.");
} else if (userGuess < targetNumber) {
console.log("Too low! Try again.");
} else if (userGuess > targetNumber) {
console.log("Too high! Try again.");
} else {
console.log("Invalid guess.");
}
debugger; // Use debugger to inspect values
}
// Simulate a user guess
guessNumberGame(5);
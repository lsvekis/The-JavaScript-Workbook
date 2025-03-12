// Code:
let userInput;
let tries = 0;
do {
userInput = (tries === 1) ? "yes" : "no"; // simulate input change
console.log("User input:", userInput);
tries++;
} while (userInput !== "yes" && tries < 3);
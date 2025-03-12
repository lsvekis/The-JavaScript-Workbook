// Code:
let simulatedResponse = "";
let attempts = 0;
do {
simulatedResponse = "yes"; // simulation of user input
console.log("User responded:", simulatedResponse);
attempts++;
} while (simulatedResponse !== "yes" && attempts < 3);
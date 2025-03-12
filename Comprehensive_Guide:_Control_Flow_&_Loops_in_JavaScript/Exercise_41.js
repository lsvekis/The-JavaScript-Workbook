// Code:
let option;
let attemptsMenu = 0;
do {
// Simulated menu selection
option = (attemptsMenu === 2) ? "exit" : "continue";
console.log("Selected option:", option);
attemptsMenu++;
} while (option !== "exit" && attemptsMenu < 5);
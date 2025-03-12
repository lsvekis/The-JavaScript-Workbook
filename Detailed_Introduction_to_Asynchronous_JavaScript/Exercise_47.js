// Code:
async function raceTask(name, delayTime) {
return new Promise(resolve => setTimeout(() => resolve(name), delayTime));
}
Promise.race([
raceTask("Winner", 700),
raceTask("Loser", 1200)
]).then(result => console.log("Race winner:", result));
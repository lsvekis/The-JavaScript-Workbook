// Code:
const countdownDiv = document.getElementById("countdown");
let countdownValue = 10;
const countdownInterval = setInterval(() => {
countdownDiv.textContent = countdownValue;
countdownValue--;
if (countdownValue < 0) clearInterval(countdownInterval);
}, 1000);
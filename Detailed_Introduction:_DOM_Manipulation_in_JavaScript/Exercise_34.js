// Code:
const animateBox = document.getElementById("animateBox");
let position = 0;
const interval = setInterval(() => {
position += 5;
animateBox.style.left = position + "px";
if (position >= 300) clearInterval(interval);
}, 50);
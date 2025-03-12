// Code:
const cloneMe = document.getElementById("cloneMe");
const clone = cloneMe.cloneNode(true);
clone.textContent = "I am a clone!";
cloneMe.parentNode.appendChild(clone);
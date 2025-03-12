// Code:
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
e.preventDefault();
const username = e.target.username.value;
console.log("Form submitted. Username:", username);
});
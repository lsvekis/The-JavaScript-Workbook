// Code:
const focusInput = document.getElementById("focusInput");
focusInput.addEventListener("focus", () => {
focusInput.style.borderColor = "green";
});
focusInput.addEventListener("blur", () => {
focusInput.style.borderColor = "";
});
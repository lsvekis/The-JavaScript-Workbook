// Code:
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
openModal.addEventListener("click", () => {
modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
modal.style.display = "none";
});
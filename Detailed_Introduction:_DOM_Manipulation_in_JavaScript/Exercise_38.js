// Code:
const lazyImage = document.getElementById("lazyImage");
window.addEventListener("scroll", () => {
const rect = lazyImage.getBoundingClientRect();
if (rect.top < window.innerHeight && rect.bottom >= 0) {
console.log("Image is in view.");
}
});
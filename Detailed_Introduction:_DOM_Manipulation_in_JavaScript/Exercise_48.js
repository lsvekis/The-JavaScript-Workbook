// Code:
const stickyHeader = document.getElementById("stickyHeader");
window.addEventListener("scroll", () => {
if (window.pageYOffset > 100) {
stickyHeader.style.position = "fixed";
stickyHeader.style.top = "0";
} else {
stickyHeader.style.position = "static";
}
});
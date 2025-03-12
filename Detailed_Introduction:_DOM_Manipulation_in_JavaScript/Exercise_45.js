// Code:
const hoverImage = document.getElementById("hoverImage");
hoverImage.addEventListener("mouseover", () => {
hoverImage.src = "img-hover.jpg";
});
hoverImage.addEventListener("mouseout", () => {
hoverImage.src = "img1.jpg";
});
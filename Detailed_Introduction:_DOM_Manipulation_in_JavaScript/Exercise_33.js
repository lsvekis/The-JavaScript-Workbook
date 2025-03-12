// Code:
const dynamicImage = document.getElementById("dynamicImage");
const changeImgBtn = document.getElementById("changeImgBtn");
changeImgBtn.addEventListener("click", () => {
dynamicImage.setAttribute("src", "img2.jpg");
});
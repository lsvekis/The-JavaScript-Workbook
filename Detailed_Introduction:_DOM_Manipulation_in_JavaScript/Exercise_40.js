// Code:
const fontSlider = document.getElementById("fontSlider");
const resizableText = document.getElementById("resizableText");
fontSlider.addEventListener("input", (e) => {
resizableText.style.fontSize = e.target.value + "px";
});
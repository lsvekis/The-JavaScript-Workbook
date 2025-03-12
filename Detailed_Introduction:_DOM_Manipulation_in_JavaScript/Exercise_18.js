// Code:
const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", () => {
hoverDiv.style.backgroundColor = "orange";
});
hoverDiv.addEventListener("mouseout", () => {
hoverDiv.style.backgroundColor = "lightblue";
});
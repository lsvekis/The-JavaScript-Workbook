// Code:
const tooltipTarget = document.getElementById("tooltipTarget");
const tooltip = document.getElementById("tooltip");
tooltipTarget.addEventListener("mouseover", () => {
tooltip.style.visibility = "visible";
});
tooltipTarget.addEventListener("mouseout", () => {
tooltip.style.visibility = "hidden";
});
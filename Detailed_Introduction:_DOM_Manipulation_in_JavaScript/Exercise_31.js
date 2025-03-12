// Code:
const tableData = [
["Name", "Age"],
["Alice", 30],
["Bob", 25]
];
const tableContainer = document.getElementById("tableContainer");
let tableHTML = "<table border='1'>";
tableData.forEach(row => {
tableHTML += "<tr>";
row.forEach(cell => {
tableHTML += `<td>${cell}</td>`;
});
tableHTML += "</tr>";
});
tableHTML += "</table>";
tableContainer.innerHTML = tableHTML;
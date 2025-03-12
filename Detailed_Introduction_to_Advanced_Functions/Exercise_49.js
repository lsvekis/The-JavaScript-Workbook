// Code:
const fileSystem = {
folder: {
file1: "data1",
subfolder: {
file2: "data2",
file3: "data3"
}
}
};
function traverse(fs, indent = "") {
for (const key in fs) {
if (typeof fs[key] === "object") {
console.log(indent + key + "/");
traverse(fs[key], indent + "  ");
} else {
console.log(indent + key);
}
}
}
traverse(fileSystem);
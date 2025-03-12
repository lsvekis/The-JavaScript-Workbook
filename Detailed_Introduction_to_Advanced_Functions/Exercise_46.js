// Code:
function stringBuilder() {
let str = "";
return {
add: (text) => { str += text; },
get: () => str
};
}
const builder = stringBuilder();
builder.add("Hello, ");
builder.add("World!");
console.log(builder.get()); // "Hello, World!"
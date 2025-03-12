// Code:
function debounce(fn, delay) {
let timeoutId;
return function(...args) {
clearTimeout(timeoutId);
timeoutId = setTimeout(() => fn.apply(this, args), delay);
};
}
const debouncedLog = debounce(msg => console.log(msg), 500);
debouncedLog("Hello");
debouncedLog("World"); // Only "World" logs after 500ms.
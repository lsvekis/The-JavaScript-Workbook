// Code:
function addTax(taxRate) {
return function(price) {
return price + price * taxRate;
};
}
const addVAT = addTax(0.2);
console.log(addVAT(100)); // 120
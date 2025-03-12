// Code:
function errorProneOperation() {
return new Promise((resolve, reject) => {
setTimeout(() => reject("Something went wrong"), 1000);
});
}
errorProneOperation()
.then(result => console.log(result))
.catch(error => console.error("Caught error:", error));
// Code:
function processData(data = [1, 2, 3], callback) {
return callback(data);
}
const sumData = data => data.reduce((acc, num) => acc + num, 0);
console.log(processData(undefined, sumData)); // 6
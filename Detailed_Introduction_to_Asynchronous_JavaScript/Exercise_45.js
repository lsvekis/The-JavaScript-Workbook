// Code:
async function toggleFlag(flag) {
await sleep(500);
return !flag;
}
toggleFlag(true).then(newFlag => console.log("New flag:", newFlag));
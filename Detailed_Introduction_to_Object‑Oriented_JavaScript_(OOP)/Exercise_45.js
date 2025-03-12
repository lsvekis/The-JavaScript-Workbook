// Code:
function Logger(Base) {
return class extends Base {
log(message) {
console.log(`[${this.constructor.name}] ${message}`);
}
};
}
class BaseClass {}
class AdvancedClass extends Logger(BaseClass) {}
const advancedInstance = new AdvancedClass();
advancedInstance.log("This is a log message.");
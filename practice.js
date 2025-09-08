const obj = {
    firstName: "Atul",
    lastName: "Rawat"
}

function printName(profession, age) {
    console.log(this.firstName, this.lastName, profession, age)
    return 2
}


Function.prototype.myBind = function (obj, ...args2) {
    let context = obj || globalThis;
    let that = this;    
    return function (...args) {
        let fun = Symbol();
        context[fun] = that;
        let result = context[fun](...args2);
        delete context[fun];
        return result;
    }
}


let newFun = printName.myBind(obj, "Engineer", 32)
console.log(newFun("Engineer", 32))

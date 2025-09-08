const obj = {
    firstName: "Atul",
    lastName: "Rawat"
}

function printName(profession, age) {
    console.log(this.firstName, this.lastName, profession, age)
}

Function.prototype.myCall = function(obj, ...args) {
    let context = obj || globalThis;
    let fun = Symbol();
    context[fun] = this;
    const result = context[fun](...args)
    delete context[fun];
    return result;
}

printName.myCall(obj, "Athelete", 34)


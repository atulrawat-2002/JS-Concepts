const obj = {
    firstName: "Atul",
    lastName: "Rawat"
}

function printName(profession, age) {
    console.log(this.firstName, this.lastName, profession, age);
    return 2;
}

Function.prototype.myApply = function(obj, args) {
    if(!Array.isArray(args)) throw new Error("Arguments must be an array list")
    let context = obj || globalThis;
    let fun = Symbol();
    context[fun] = this;
    let result = context[fun](...args)
    delete context[fun];
    return result;
}

console.log(printName.myApply(obj, ["Mechanic", 32]));
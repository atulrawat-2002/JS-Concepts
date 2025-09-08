const obj = {
    firstName: "EisenBerg",
    lastName: "Mark"
}

function printName(age) {
    console.log(this.firstName, this.lastName, age)
}

Function.prototype.Mycall = function(obj, ...args) {
    let context = obj;
    const fun = "func"
    context[fun] = this;
    // let fun = this.bind(obj)  
    context[fun](...args) 
    // fun(...args)
}

printName.Mycall(obj, 45);
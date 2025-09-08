const name1 = {
    firstName: "Christian",
    lastName: "Bale",
}

function printName(profession) {
    console.log(this.firstName, this.lastName, profession);
}

Function.prototype.myBind = function (obj) {
    let that = this;
    return function(...args) {
        console.log(this)
        that.call(obj, ...args)
    }
}
  
let newFun = printName.myBind(name1)

newFun("Athlete")
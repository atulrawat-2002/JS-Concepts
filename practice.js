let name1 = {
    firstName: "Atul",
    lastName: "Rawat",
}

const printFullName = function (homeTown, state) {
        console.log(this.firstName, this.lastName, "from",  homeTown, state);
        return 3;
    }

Function.prototype.myApply = function (obj, args) {
    let context = obj || globalThis;
    let fun = "abc"
    context[fun] = this;
    return context[fun](); 
}

let x = printFullName.myApply()

console.log(x)
let obj1 = {
    name: "Atul",
    printName() {
        console.log(this, this.name)
    }
}

// let obj2 = Object.create(obj1);
let obj2 = {
    // name: "Joe",
    printName: () => {
        // console.log(this)
    }

};
obj2.__proto__ = obj1;

// console.log(obj1, obj1.name);
// obj2.printName()
// obj1.printName()
// console.log(obj2);

// console.log(obj2.__proto__);


// let x = "Atul"

// console.log(x.__proto__.__proto__);

(function() {
    console.log( this === global === globalThis);
    
})()
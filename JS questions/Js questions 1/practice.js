// function getThis () {
//   // "use strict";
//   console.log(this);

//   return this;
// };

// // console.log(getThis());

// const obj1 = {
//   name: "obj1",
//   arrthis: () => {
//     console.log(this);
//   },
// };
// const obj2 = { name: "obj2" };

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// console.log(obj1.getThis());

// obj1.arrthis()

// const user = {
// a: 'atul',
// tags: ['a', 'b', 'c'],
// getName () {
//     this.tags.forEach(function (tag){
//         console.log(tag, this.a)
//     }, this)
// }
// }

// user.getName()



// function Hi(a, b) {
//     this.firstName = a
//     this.lastName = b
//     console.log(this);
// }

// new Hi('Atul', 'Rawat')

// class A {
//     constructor() {
//         this.firstName = 'Atul'
//     }

//     getName () {
//         console.log(this);
//         function hi() {
//             console.log(this);
            
//         }
//         hi()
//     }
// }


// obj = new A()
// obj.getName();

// // function intro(...args) {
//     console.log(typeof args, args)
//     // args.forEach((item) => {
//     //     console.log(`${item}`)
//     // })
// }

// const atul = {
//     name: 'Atul',
//     age: 23,
//     sayHello() {
//         console.log(`Hello I am ${this.name} and nothing much`)
//     }
// }

// intro.apply(atul, [atul.name, atul.age])



// let numbers = [9, 8, 6, 90, 78];



// // console.log(Math.max.apply(null, ...numbers))


// console.log(Math.max(...numbers))
// const atul = {
//   name: 'Atul',
//   age: 23,
//   sayHello(punctuation, fullStop) {
//     // console.log(args)
//     console.log(`Hello I am ${this.name} and nothing much${punctuation} ${fullStop}`);
//   },
//   friend: {
//     name: 'Jack',
//     age: 33
//   }
// };

// atul.sayHello.apply(atul.friend, ['!', '.']);
// // Hello I am Jack and nothing much

let printFullName = function (city, state) {
    console.log(`${this.fistName} ${this.lastName} ${city}, ${state}`);
}

const obj1 = {
    fistName: 'Atul',
    lastName: 'Rawat'
}

const obj2 = {
    fistName: 'Atul',
    lastName: 'Rawat'
}

// printFullName.call(obj1, 'Faridabad', 'Haryana')

// printFullName.apply(obj2, ['Faridabad', 'Haryana'])


let myName = printFullName.bind(obj1, );
// myName('Gujrat', 'Gandhinagar');

obj1.myName = printFullName;

obj1.myName('Faridabad', 'Haryana')
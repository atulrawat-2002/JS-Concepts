// const obj = {
//   firstName: "Atul",
//   lastName: "Rawat",
// };

// function greet(greeting) {
//   console.log(greeting, this.firstName, this.lastName);
// }

// function myBind(obj, ...args) {
//   if (args.length !== 0) {
//     return () => {
//       this.call(obj, ...args);
//     };
//   }

//   return (...args) => {
//     this.call(obj, ...args);
//   };
// }

// greet.myBind = myBind;

// let myGreet = greet.myBind(obj, );

// myGreet('Morning');

// const obj = {
//   firstName: "Atul",
//   lastName: "Rawat",
// };

// function greet(greeting, age) {
//   console.log(greeting, this.firstName, this.lastName, age);
// }

// function myBind(obj, ...args) {
//   if (args.length !== 0) {
//     return () => {
//       this.call(obj, ...args);
//     };
//   }

//   return (...args) => {
//     this.call(obj, ...args);
//   }
// }

// greet.myBind = myBind;

// let objGreet = greet.myBind(obj,);

// objGreet("Good Evening", 34);



const obj = {
  name: 'Atul',
  age: 23,
}

function intro(greeting, num) {
  console.log('Hi my name is', this.name, 'and I am', this.age, greeting, num, 'times')
}

// const newIntro = intro.bind(obj);
// newIntro('good morning', 34)



Function.prototype.myBind = function(...args) {
    const obj = args[0];
    const values = args.splice(1);
    if (values.length === 0)
    return (...args) => {
      this.call(obj, ...args);
    }
    else return () => {
      this.call(obj, ...values);
    }
}

const newIntro = intro.myBind(obj, 'good morning', 34);
newIntro()



// intro.call(obj, 'Good morning', 34)
// intro.apply(obj, ['Good morning', 34])


// Function.prototype.myApply = function myApply(obj, args) {
//   const fun = this.bind(obj, ...args);
//   fun();
// }

// intro.myApply(obj, ['Good morning', 34])

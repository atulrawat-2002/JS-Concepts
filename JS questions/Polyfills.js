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

const obj = {
  firstName: "Atul",
  lastName: "Rawat",
};

function greet(greeting, age) {
  console.log(greeting, this.firstName, this.lastName, age);
}

function myBind(obj, ...args) {
  if (args.length !== 0) {
    return () => {
      this.call(obj, ...args);
    };
  }

  return (...args) => {
    this.call(obj, ...args);
  }
}

greet.myBind = myBind;

let objGreet = greet.myBind(obj,);

objGreet("Good Evening", 34);

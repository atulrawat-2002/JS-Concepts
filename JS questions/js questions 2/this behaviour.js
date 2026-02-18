// function greet(greeting) {
//     // console.log(this);
//     console.log(greeting, this.name)
// }

// const gr = () => {
//     console.log(this.age)
// }


// const obj1 = {
//     name: 'Rohan',
//     age: 22,
// }
// const obj2 = {
//     name: 'Atul',
//     age: 23,
// }

// // obj1.greet = greet;
// obj1.greet = greet;
// // obj1.gr = gr;

// // obj1.gr();

// obj1.greet('Good morning')


// const user = {
//     name: 'Rahul',
//     profile: 'Developer',
//     gender: 'male',
//     age: 23,
//     skills: ['Reactjs', 'Nodejs'],
//     setAge() {

//         const calculate = () => {
//             this.skills.forEach((element) => {
//                 console.log(this)
//                 console.log(element)
//             });
//         }

//         calculate()
//     }
// }

// user.setAge()



// function Person(name, age) {
//     this.age = age,
//     this.name = name;
// }

// Person.printAge = async function() {
//     console.log(this.age)
// }

// console.log(Person.printAge())

// // const me = new Person('Atul', 23)
// // const you = new Person('Atul', 24)
// // me.printAge()
// // you.printAge()
// // console.log(me, you)






document.querySelector('.parent').addEventListener("click", function (event) {
    console.log(event.target, event.currentTarget)
})
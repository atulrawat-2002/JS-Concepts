// const obj1 = {
//     name: 'Atul',
//     age: 23,
//     gender: 'male'
// }


// const obj2 = {
//     ...obj1
// }

// obj1.name = 'Rahul'

// obj2.class = 12;

// console.log("Object 1: ", obj1);
// console.log("Object 2: ", obj2);


const complexObj1 = {
    name: 'Atul',
    address: {
        city: 'Faridabad',
        gali: 12,
        Country: 'India'
    },
    skills: ['Javascript', 'Reactjs']
}


// const copy = {
//     ...complexObj1,
//     address: {...complexObj1.address},
//     skills: [...complexObj1.skills],
// }

const copy = structuredClone(complexObj1)


copy.address.Country = 'US';
copy.skills.length = 0;

console.log(complexObj1)
console.log(copy)


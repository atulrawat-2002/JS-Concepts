"use strict"    


// forEach is an array method which takes a callback and iterate over each element of the array and the callback method can take upto three elements value, index and the arr itself

// arr.forEach((number, index, arr) => {
    //     console.log(number, index, arr)
    // })  



// function filterCopy (callback) {
//     let arr = [];

//     this.forEach(element => {
//         if(callback(element)) arr.push(element)
//     });

//     return arr;
// }


// Array.prototype.filterCopy = filterCopy;

// const arr = [90, 8, 'Atul', 7]


// const a = arr.filterCopy((num) => {
//     return num > 5
// })

// console.log(a)

// let sum = arr.reduce((accumulator, currentValue) => {
//     console.log(accumulator)
//     if(currentValue > 3)
//     return accumulator + currentValue;
//     else
//     return accumulator
// })

// console.log(sum);


// arr = [1,2,3,4,5];

// function reduceCopy(callback) {
//     this.forEach(element => {
//         return callback(accumulator, element);
//     });
// }

// arr.reduceCopy = reduceCopy;

// arr.reduceCopy((accumulator, element) => {
//     return accumulator + element
// })


// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i]);
//   }

//   return accumulator;
// };


// const arr = [1, 2, 3, 4];

// const sum = arr.myReduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10



// function copy(callback, initialValue) {
//     let accumulator = initialValue;
//     for (let i of this){
//         accumulator = callback(accumulator, i);
//     }
//     return accumulator
// }


// let email = ["atul", 'atul', 'atul', 'rawat'];
// let uniq = new Set(email)

// for (let val of uniq) {
//     console.log(uniq.has(val))
// }


let m = new Map([
    ['Atul', 23],
    [23, 'Atul'],
    [[2,3,4], "Array"],
    [{age: 23, name: 'Atul'}, 'object']
])


console.log(m)

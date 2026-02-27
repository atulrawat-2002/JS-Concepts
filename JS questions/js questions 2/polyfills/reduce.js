// let result = arr.reduce((acc, curr, index, array) => {
//     return acc + curr
// }, 0);

// console.log(result)

// const myReduce = function (callback, init) {
//     let result = init || 0;
//     this.forEach((ele, index, array) => {
//         result = callback(result, ele, index, array);
//     });
//     return result;
// }

// Array.prototype.myReduce = myReduce;

// function callback(acc, curr ) {
//     return acc + curr;
// }

// result = arr.myReduce(callback, 0);

// console.log(result);

// arr = arr.map((element, index, array) => {
//     return element + 2;
// })

// console.log(arr)

// let myMap = function (callback) {
//     if (typeof this != Array) throw new Error ("not supported")
//     let result = [];
//     this.forEach((element, index, array) => {
//         result.push(callback(element, index, array));
//     });
//     return result;
// }

// Array.prototype.myMap = myMap;

// arr = 'Atul'

// String.prototype.myMap = myMap;

// arr = arr.myMap((element, index, array) => {
//     return element * 1000;
// })

// console.log(arr)



let arr = [2, 3, 4, 6, 7];



// arr = arr.filter((element, index, array) => element % 2 === 0)

// console.log(arr)


const myFilter = function(callback) {
    let result = [];
    this.forEach((element, index, array) => {
        if (callback(element)) result.push(element);
    });
    return result;
}

Array.prototype.myFilter = myFilter;

arr = arr.myFilter((element, index, array) => element % 2 !== 0)

console.log(arr);
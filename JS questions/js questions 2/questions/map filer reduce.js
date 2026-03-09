// arr = [2, 4, 5, 6, 8, 33]


// // let newArr = arr.map(item => item + 1000)

// // console.log(newArr)

// const myMap  = function (callback) {
//     let result = []
//     this.forEach((element, index, array) => {
//         result.push(callback(element, index, array));
//     });
//     return result;
// }

// Array.prototype.myMap = myMap;

// let newArr = arr.myMap((element, index, array) => element + 1000)

// console.log(newArr)


let arr = [3, 4, 5, 2, 8, 9, 10]


// arr = arr.filter((element, index, array) => element < 5)

// console.log(arr)

// const myFilter = function (callback) {
//     let result = []
//     this.forEach((element, index, array) => {
//         if(callback(element)) {
//             result.push(element);
//         }
//     })
//     return result;
// }

// function callback (element) {
//     return element >= 10;
// }

// Array.prototype.myFilter = myFilter;

// arr = arr.myFilter(callback)

// console.log(arr);

// const result = arr.reduce( (accumulator, currentValue, index, array) => {
//     return accumulator + currentValue
// }, 1000 )

// console.log(result)


const myReduce = function (callback, initialValue) {
    let result = 0;

    this.forEach((element, index, array) => callback(result=0, element, index, array));

    return result;
}

Array.prototype.myReduce = myReduce

let result = arr.myReduce((acc, val, index, array) => acc + val)

console.log(result)
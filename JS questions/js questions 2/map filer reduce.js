arr = [2, 4, 5, 6, 8, 33]


// let newArr = arr.map(item => item + 1000)

// console.log(newArr)

const myMap  = function (callback) {
    let result = []
    this.forEach((element, index, array) => {
        result.push(callback(element, index, array));
    });
    return result;
}

Array.prototype.myMap = myMap;

let newArr = arr.myMap((element, index, array) => element + 1000)

console.log(newArr)
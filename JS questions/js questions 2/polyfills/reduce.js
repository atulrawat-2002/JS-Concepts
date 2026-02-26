



let arr = [2, 3, 4, 6, 7];



let result = arr.reduce((acc, curr, index, array) => {
    return acc + curr
}, 0);

console.log(result)

const myReduce = function (callback, init) {
    let result = init || 0;
    this.forEach((ele, index, array) => {
        result = callback(result, ele, index, array);
    });
    return result;
}

Array.prototype.myReduce = myReduce;

function callback(acc, curr ) {
    return acc + curr;
}

result = arr.myReduce(callback, 0);


console.log(result);
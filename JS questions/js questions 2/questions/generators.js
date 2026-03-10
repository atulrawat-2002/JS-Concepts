// function makeIterator(start = 0, end = Infinity, steps = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;

//     const rangeIterator =  {
//         next() {
//             let result;
//             if (nextIndex < end) {
//                 result = {value: nextIndex, done: false};
//                 nextIndex += steps;
//                 iterationCount++;
//                 return result;
//             }
//             return {value: iterationCount, done: true};
//         }
//     }
//     return rangeIterator;
// }

// let myIteraort = makeIterator(0, 3, 1);

// console.log(myIteraort.next())
// console.log(myIteraort.next())
// console.log(myIteraort.next())
// console.log(myIteraort.next())

function *makeGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const myGenerator = makeGenerator();

for (const val of myGenerator) {
    console.log(val)
}
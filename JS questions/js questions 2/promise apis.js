// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('first')
//     }, 500);
// })



// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('second');
//     }, 1000);
// })


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("fullfilled")
        resolve('third')
    }, 2000);
})


// async function main() {
    const response = await p3
// } 
// main()
console.log('script ended')

// const pArray = await Promise.allSettled([p1, p2, p3]);
// console.log(pArray)


// let result = await Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
// console.log(result)
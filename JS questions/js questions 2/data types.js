// function account() {
//     let balance = 0;
//     return {
//         setCount(amount) {
//             balance += amount;
//             return balance;
//         },
//         getCount() {
//             return balance;
//         }
//     }
// }

// const me = account();

// // me.balance = 'Atul'

// console.log(me.setCount(4000))

// console.log(me.getCount())

// console.log(me.balance)




// (async function() {
// await mongoose.connect('uri')
// })()



const text = document.getElementById('text')

text.addEventListener('change', (e) => {
    console.log(e.target.value)
})

const button = document.getElementById('search');

button.onclick = function () {
    
}
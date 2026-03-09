// function account(n, b) {

//     let name = n;
//     let balance = b;

//     return {
//         addBalance(amount) {
//             balance += amount;
//             return balance;
//         },
//         withdraw(amount) {
//             if (amount > balance) {
//                 return "INsuffecient balance"
//             }

//             balance -= amount;
//             return amount;
//         }
//     }
// }

// const myAccount = account('Atul', 0);
// const yourAccount = account('John', 10000);

// console.log(myAccount.addBalance == yourAccount.addBalance)
// console.log(yourAccount)

// console.log(myAccount.addBalance(3000))
// console.log(myAccount.withdraw(100))

// console.log(yourAccount.addBalance(3000))
// console.log(yourAccount.withdraw(100))




function Account(name, balance) {
    let _age = 23;
    this.name = name;
    this.balance = balance;

    this.addBalance = function (amount) {
        this.balance += amount
        return this.balance
    }

    this.withdraw = function (amount) {
        this.balance -= amount;
        return this.balance
    }

}

let my = new Account('Atul', 0);

Account.prototype.printBalance = function () {
    console.log(this.balance)
}

console.log(my.addBalance(2000))
// console.log(my.withdraw(2000))
my.printBalance();
/**********************  A simple class  ******************* */


// class Car {
//     constructor(make, modal) {
//         this.make = make;
//         this.modal = modal;
//     }

//     displayInfo () {
//         console.log(`Make: ${this.make}, Modal: ${this.modal}`);
//     }

// }

// const myCar = new Car('Toyota', "Camry");
// myCar.displayInfo();



/**********************  Inheritance  ******************* */

// class Vehical {
//     constructor(make, modal) {
//         this.make = make;
//         this.modal = modal;
//     }

//     displayInfo() {
//         console.log(`Make: ${this.make}, Modal: ${this.modal}`);
//     }
// }

// class Car extends Vehical {
//     constructor(make , modal) {
//         super(make, modal);
//     }
// }

// const myCar = new Car('Toyota', 'Camry');

// myCar.displayInfo();



/**********************  Encapsulatio and Private field  ******************* */


function counter() {
    let count = 0;
    return {
        increment(x){
            count += x;
        },
        decrement() {
            count--;
        },
        getCount () {
            return count;
        }
    }
}

counter().increment(5)
const count = counter().getCount();

const c = counter();
c.increment(5);
console.log(c.getCount());

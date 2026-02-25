// function placeOrder(callback) {
//     console.log("Your order has been placed and you will be redirected to payment")
//     setTimeout(() => {
//         callback()
//     }, 1000);
// }

// function payment(callback) {
//     console.log("your payment is successful we are preparing the order for delery");
//     setTimeout(() => {
//         callback()
//     }, 1000);
// }

// function prepared(callback) {
//     console.log("Your order has been prepared and soon will be out for delivery");
//     setTimeout(() => {
//         callback()
//     }, 1000);
// }

// function outForDelevery(callback) {
//     console.log("Your order is out for deleivery");
//     setTimeout(() => {
//         callback()
//     }, 1000);
// }

// function delievered() {
//     console.log("Your orde has been delieverd please rate us")
// }

// placeOrder(() => {
//     payment(() => {
//         prepared(() => {
//             outForDelevery(delievered)
//         })
//     })
// })

const order = {

}

function placeOrder(callback) {
  console.log(
    "Your order has been placed and you will be redirected to payment",
  );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        order.name = "Atul"
      reject(false);
    }, 1000);
  });
}

function payment(callback) {
  console.log(
    "your payment is successful we are preparing the order for delery",
  );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        order.price = 999
      reject();
    }, 1000);
  });
}

function prepared(callback) {
  console.log("Your order has been prepared and soon will be out for delivery");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        order.item = ['Pizza', 'coke']
      reject();
    }, 1000);
  });
}

function outForDelevery(callback) {
  console.log("Your order is out for deleivery");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        order.address = {
            city: 'faridabad',
            house: 871
        }
      reject('Reject');
    }, 1000);
  });
}

function delievered() {
  console.log("Your orde has been delieverd please rate us", order);
  return new Promise((resolve, reject ) => {
    setTimeout(() => {
        reject(true)
    }, 2000);
  })
  
}


const functionArray = [placeOrder, payment, prepared, outForDelevery, delievered];
const promiseArray = functionArray.map(fun => fun());

const result = await Promise.allSettled(promiseArray);

console.log(result);




// async function main() {
//   let response = await placeOrder();
//   response = await payment();
//   response = await prepared();
//   response = await outForDelevery();
//   response = await delievered()
    

//     return "Thanks for using our service";
// }
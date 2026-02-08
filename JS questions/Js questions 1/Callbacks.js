const orderDetails = {
  user: "Atul"
}


function placeOrder(orderDetails) {
  console.log("Order is being placed")
  return new Promise((resolve) => {
    setTimeout(() => {
      orderDetails.location = 'Delhi'
      resolve(orderDetails)
    }, 1000);
  })
}


function payment( orderDetails ) {
  console.log("Your payment is done")
  return new Promise((resolve) => {
    setTimeout(() => {
      orderDetails.paid = true;
      resolve(orderDetails)
    }, 1000);
  })
}

function preparingFood(orderDetails) {
  console.log("Preparing your order");
  return new Promise((resolve) => {
    setTimeout(() => {
      orderDetails.item = ['Pizza', 'Coke']
      resolve(orderDetails)
    }, 1000);
  })
}

function outForDelivery(orderDetails) {
  console.log("Your order is out for delivery");
  return new Promise((resolve) => {
    setTimeout(() => {
      orderDetails.id = 123;
      resolve(orderDetails)
    }, 1000);
  })
}

function delivered(orderDetails) {
  console.log('Order has been delivered');
  return new Promise((resolve) => {
    setTimeout(() => {
      orderDetails.delivered = true
      resolve(orderDetails)
    }, 1000);
  })
}

function review(orderDetails) {
  console.log("Please review us!", orderDetails)
}

/************** Call the function explicitly and can pass more than one argument or perfomt side effects in between *****************88 */

placeOrder(orderDetails)
.then((res) => payment(res))
.then((res) => preparingFood(res))
.then((res) => outForDelivery(res))
.then((res) => delivered(res))
.then((res) => review(res))
.catch((err) => console.log(err));


/***************** Only when the callback funciton takes only one arguments which is the resolved value and do not have any this binding with it ********************* */

// placeOrder(orderDetails)
// .then(payment)
// .then(preparingFood)
// .then(outForDelivery)
// .then(delivered)
// .then(review).catch(err => console.log(err));


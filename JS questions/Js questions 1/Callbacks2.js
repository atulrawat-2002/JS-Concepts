const orderObj = {
    id: 123
}

function placeOrder(orderObj) {
  console.log("Order has been placed proceed to payment");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        orderObj.customer = "Atul"
      resolve(orderObj);
    }, 2000);
  });
}

function payment(orderObj) {
  console.log("Payment completed preparing food");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        orderObj.cost = 300
      resolve(orderObj);
    }, 1000);
  });
}

function preparingFood(orderObj) {
  console.log("Your order is prepared and out for delievery");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        orderObj.items = ['pizza', 'coke']
      resolve(orderObj);
    }, 1000);
  });
}

function outForDelievery(orderObj) {
  console.log("you order has been delievered");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        orderObj.location = 'Delhi'
      resolve(orderObj);
    }, 1000);
  });
}


function review(orderObj) {
  console.log("Please review us!", orderObj);
}

// placeOrder(orderObj)
// .then((response) => payment(response))
// .then((response) => preparingFood(response))
// .then((response) => outForDelievery(response))
// .then((response) => review(response))
// .catch(err => console.log(err))

// async function processOrder(orderObj) {
const customer = await placeOrder(orderObj);
const cost = await payment(customer);
const items = await preparingFood(cost);
const location = await outForDelievery(items);
review(location);
// }

// processOrder(orderObj)
console.log("Please move to the next order ");

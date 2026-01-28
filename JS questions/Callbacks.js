function placeOrder(callBack) {
  console.log("Precessing the payment");
  setTimeout(() => {
    callBack();
  }, 2000);
}

function payment(callBack) {
  console.log("Payment is complete");
  setTimeout(() => {
    callBack();
  }, 2000);
}

function preparingOrder(callBack) {
  console.log("Preparing the order");
  setTimeout(() => {
    callBack();
  }, 2000);
}

function outForDelivery(callBack) {
  console.log("Out for delivery");
  setTimeout(() => {
    callBack();
  }, 2000);
}

function orderDelivered(callBack) {
  console.log("Order has been delivered");
  setTimeout(() => {
    callBack();
  }, 2000);
}

function review() {
  console.log("plese review us!");
}

placeOrder(() => {
  payment(() => {
    preparingOrder(() => {
      outForDelivery(() => {
        orderDelivered(review);
      });
    });
  });
});

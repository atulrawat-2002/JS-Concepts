function placeOrder() {

    return new Promise((resolve) => {
        setTimeout(() => {
        console.log('your order has been place and proceeding to payment');
        resolve(true)
    }, 1000);
    })

}

function payment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('Payment has been recieved preparing Items');
        resolve('Payment failed');
    }, 1000);
    })
}

function delievery() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("you order is out for delievery");
        resolve(true);
    }, 1000);
    })
}

function delievered() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Order has been reached please pick up');
        reject('Nobody recieved the order');
    }, 1000);
    })
}

function feedback() {
    console.log('Please rate us!')
}


async function newOrder() {
    try {
    await placeOrder()
    await payment()
    await delievery()
    await delievered()
    feedback();
} catch(error) {
    console.log(error)
}
}
 

await newOrder()
class node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

let arr = [];

for(let i = 10; i > 0; i--) {
    arr.push(i)
}
// console.log(arr);
let head, temp = null;
arr.forEach((value) => {
    let x = new node(value);
    head = x;
    head.next = temp;
    temp = x;
})

let point = head;
while(point) {
    console.log(point.data)
    point = point.next;
}

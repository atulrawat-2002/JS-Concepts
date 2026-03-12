function greet () {
  Object.keys(this).map(item => console.log(item));
}


let obj = {
  name: 'Atul',
  greet: 'Good Morning'
}



const myBind = function(context, ...args) {
    return () => {
      let fun = Symbol();
      context[fun] = this;
      context[fun](...args);
    }
}

Function.prototype.myBind = myBind;

let copy = greet.myBind(obj);
copy()
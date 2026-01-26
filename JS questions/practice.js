function getThis () {
  // "use strict";
  console.log(this);
  
  return this;
};

// console.log(getThis());

const obj1 = {
  name: "obj1",
  arrthis: () => {
    console.log(this);
  },
};
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis());


obj1.arrthis()

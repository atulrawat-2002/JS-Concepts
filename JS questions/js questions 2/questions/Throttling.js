function *generatorFun() {
  let res = yield new Promise(res => {
    setTimeout(() => {
      res(true)
    }, 1000);
  });

  return res;
}


const gen = generatorFun();


console.log(gen.next())
console.log(gen.next('hello'))
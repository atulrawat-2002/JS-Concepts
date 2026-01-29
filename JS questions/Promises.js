function mock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(404)
    }, 2000);
  });
}

const p = mock()

console.log(p);

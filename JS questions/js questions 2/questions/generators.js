function *fibonacciGenerator() {
    const [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }

}
const gen = fibonacciGenerator();

for(let i = 0; i < 10; i++) {
    console.log(gen.next())
}
let count = 0;

function fechtData() {
    console.log("Making network call...", count++)
}

let btn = document.getElementsByTagName('button')[0];
let timer = null

function debouncedFetch(delay) {
    if(timer) {
        clearTimeout(timer)
    } setTimeout(() => {
        fechtData();
        timer = null;
    }, 1000);
}


function throttledFetch() {
    if(timer) return;
    fechtData();
    timer = setTimeout(() => {
        timer = null;
    }, 2000);
}

btn.addEventListener('click', () => throttledFetch(1000))

const first = document.getElementsByTagName('div')[0]
const second = document.getElementsByTagName('div')[1]
const third = document.getElementsByTagName('div')[2]



first.addEventListener('click' , (e) => {
    console.log("INside firstt")
    console.log("target: ", e.target, "curent target", e.currentTarget)
}, {
    capture: true
})

second.addEventListener('click' , (e) => {
    console.log("INside second")
    console.log("target: ", e.target, "curent target", e.currentTarget)
})

third.addEventListener('click' , (e) => {
    console.log("INside third")
    console.log("target: ", e.target, "curent target", e.currentTarget)
}, {
    capture: true
})
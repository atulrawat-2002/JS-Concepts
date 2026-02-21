import express from "express";
import http from "node:http"


const app = express();
const server = http.createServer(app)


app.get('/', (req, res) => {
    res.json({
        message: "Server is up"
    })
})

app.get('/user', (req, res) => {
    res.json({
        message: "no user found!"
    })
})



server.on('upgrade', () => {

})


server.listen('8000', () => {
    console.log('Appp is listening to port number 800')
})
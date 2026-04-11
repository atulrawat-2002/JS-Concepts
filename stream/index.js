import express from "express";
import fs from "fs";


const app = express();

app.get("/", (req, res) => {
    fs.readFile("./sample.txt", (err, data) => {
        res.end(data)
    })
})


app.listen(8000, () => {
    console.log('App is listening on 8000')
})
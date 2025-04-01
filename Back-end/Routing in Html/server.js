const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.join(__dirname, "public")

app.set("view engine", "ejs")

app.get('/', (request, response) => {
    response.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (request, response) => {
    response.sendFile(`${publicPath}/about.html`)
})

app.get('/news', (request, response) => {
    let newObj = [
        {
            'newsTitle': 'ws',
            'newsDesc': 'hello world',
        },
        {
            'newsTitle': 'IIP',
            'newsDesc': 'hello IIP',
        }
    ]
    response.send(newObj)
})

app.get("/profile", (request, response) => {
    let Obj ={
        'name' : 'ws',
        'email':'ws@gmail.com',
        'course':["Js","NodeJs","ReactJs"]
    }
    response.render('profile',Obj)
})

app.get("*", (request, response) => {
    response.sendFile(`${publicPath}/page404.html`)
})



app.listen("8000")
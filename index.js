const express = require('express')
const app = express()
const port = 8080;
app.set("view engine", "ejs")


app.get('/', (req,res) =>{
    res.send('welcome from home page')
})

app.get('/about', (req,res) => {
    res.send('welcome from about page')
})

app.get('/contact',(req,res) =>{
    res.send('welcome from contact page')
})

app.get('*',(req,res) => {
    res.send('welcome from error page')
})
app.listen(port)
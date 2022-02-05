const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.send("hello world!")
})

app.listen(5000)
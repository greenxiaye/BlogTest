const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.use("/articles", articleRouter)

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', { text: 'articles' })
})

app.listen(5000)
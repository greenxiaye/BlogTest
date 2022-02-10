const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.use("/articles", articleRouter)

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Article Description'
    }, {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Article Description 2'
    }]
    res.render('index', { articles: articles })
})

app.listen(5000)
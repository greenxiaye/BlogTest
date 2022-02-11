const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://127.0.0.1/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
console.log(1234)
mongoose.connection.on('error', () => {
    console.log('数据库失败')
})
mongoose.connection.once('open', () => {
    console.log('数据库连接成功……')
})

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
    res.render('articles/index', { articles: articles })
})
app.use("/articles", articleRouter)
app.listen(5000)
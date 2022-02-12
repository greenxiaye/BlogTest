const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
})

router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit', { article: article })
})

router.get('/:slug', async (req, res) => {
    console.log("id")
    const article = await Article.findOne({ slug: req.params.slug })
    if (article == null) {
        res.redirect('/')
    }
    res.render('articles/show', { article: article })
})

router.post('/', async (req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        article = await article.save()
        console.log("id-article")
        res.redirect(`/articles/${article.slug}`)
    } catch (e) {
        console.log("id-err")
        console.log(e)
        res.render('articles/new', { article: article })
    }
})

router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})
module.exports = router
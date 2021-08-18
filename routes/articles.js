const express = require('express')
const router = express.Router()
const Article = require('../models/articles')

router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        descritption: req.body.description,
        markdown: req.body.markdown
    })
    try {
        const article = await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch (error) {
        
    }
})

module.exports = router
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const articleRouter = require('./routes/articles')
const Article = require('./models/articles')

mongoose.connect('mongodb://127.0.0.1:27017/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/index', {articles})
})

app.use('/articles', articleRouter)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})

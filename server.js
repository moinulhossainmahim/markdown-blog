const express = require('express')
const app = express()
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')

mongoose.connect('mongodb://127.0.0.1:27017/blog', {
  useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs')
app.use('/articles', articleRouter)
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    const articles = [
      {
        title: 'Test title',
        createdAt: new Date(),
        description: 'Test description',
      },
      {
        title: 'Test title',
        createdAt: new Date(),
        description: 'Test description',
      },
    ]
    res.render('articles/index', {articles: articles})
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})

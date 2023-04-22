const express = require("express")
const app = express()
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
require('./config/mongoose')

// method-override
app.use(methodOverride('_method'))

// dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/', (req, res) => {
  // 抓取bodyParser資料
  console.log('req.body', req.body)
  res.render('index')
})

// template engine 模板引擎 handlebars
app.engine('hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3500, () => {
  console.log('app is running on port 3500')
})

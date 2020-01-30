require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const indexRouter = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')
const mongoose = require('mongoose')
const app = express()

// const cronJob = require('./helpers/cron')
// cronJob()

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('mongo has connected')
  })
  .catch(err => {
    console.log('error in mongo connection')
    console.log(err)
  })

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use(errorHandler)

module.exports = app

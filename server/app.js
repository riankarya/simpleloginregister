const express = require('express')
const app = express()
const User = require('./routes/routeUser')
const errorHandler = require('./middlewares/errorHandler')
const port = 3000
require('dotenv').config()

app.use(express.urlencoded({ extended: false }))
app.use('/', User)
app.use(errorHandler)
app.listen(port, _=> console.log(`I love you ${port}`))

module.exports = app
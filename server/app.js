const express = require('express')
const app = express()
const User = require('./routes/routeUser')
const errorHandler = require('./middlewares/errorHandler')
const port = 3000
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use('/', User)
app.use(errorHandler)
app.listen(port, _=> console.log(`I love you ${port}`))

module.exports = app
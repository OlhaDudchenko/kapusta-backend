const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/users/usersRoutes')
// const transactionRouter = require('./routes/transactions')
const { errorHandler } = require('./helpers/apiHelpers')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use(express.static('public'))

app.use('/users', authRouter)
// app.use('/transactions', transactionRouter)

app.use(errorHandler)
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

module.exports = app
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/users/usersRoutes')
// const transactionsRouter = require('./routes/transactions')
const { errorHandler } = require('./helpers/apiHelpers')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/users', authRouter)
// app.use('/transactions', transactionsRouter)

app.use(errorHandler)
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

module.exports = app
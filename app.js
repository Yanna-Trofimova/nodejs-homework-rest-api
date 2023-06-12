const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config()
// const bcrypt = require("bcryptjs");


const contactsRouter = require('./routes/api/contacts')
const authRouter = require('./routes/api/auth-routes')

// const hashPassword = async (password) => {
//   const result = await bcrypt.hash(password, 10);
//   // console.log(result)
//   const compareResalt1 = await bcrypt.compare(password, result);
//   console.log(compareResalt1)
//   const compareResalt2 = await bcrypt.compare("1299834560", result);
//     console.log(compareResalt2)
// }

// hashPassword("1299834567")

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter) 
app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})




module.exports = app
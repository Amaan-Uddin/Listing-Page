require('dotenv').config()
const express = require('express')
const app = express()

require('./config/mongodb.config')() // trigger the connectToMongo() function
const cors = require('cors')
const apiRouter = require('./routes/api')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
	cors({
		origin: process.env.CLIENT,
	})
)

app.use('/api', apiRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
	console.log('Server running on port:', PORT)
})

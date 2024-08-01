const mongoose = require('mongoose')
const { mongoURI } = require('./env.config')

module.exports = async function connectToMongo() {
	try {
		await mongoose.connect(mongoURI)
		console.log('connected to Mongodb')
	} catch (error) {
		console.error('Mongodb connection error :: ', error)
		process.exit(1)
	}
}

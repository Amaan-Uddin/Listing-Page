const cloudinary = require('../../config/cloudinary.config')
const bufferToStream = require('./bufferToStream')

module.exports = function uploadStream(buffer, options) {
	return new Promise((resolve, reject) => {
		const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
			if (error) return reject(error)
			resolve(result)
		})
		bufferToStream(buffer).pipe(stream)
	})
}

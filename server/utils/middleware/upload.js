const multer = require('multer')

const storage = multer.memoryStorage()

const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		const allowedImageExtensions = /jpeg|jpg|png/
		const allowedVideoExtensions = /mp4|avi|mpg/
		const extname =
			allowedImageExtensions.test(file.originalname.toLowerCase()) ||
			allowedVideoExtensions.test(file.originalname.toLowerCase())
		const mimetype = allowedImageExtensions.test(file.mimetype) || allowedVideoExtensions.test(file.mimetype)

		if (extname && mimetype) {
			cb(null, true)
		} else {
			cb(new Error('Error: File type not supported!'))
		}
	},
})

module.exports = {
	uploadFiles: upload.fields([
		{ name: 'thumbnail', maxCount: 1 },
		{ name: 'video', maxCount: 1 },
	]),
}

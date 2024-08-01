const Posts = require('../models/post')
module.exports = async function getAllPosts(req, res) {
	try {
		const allPosts = await Posts.find()
			.sort({ createdAt: -1 })
			.select(
				'title description thumbnail.public_id thumbnail.secure_url video.public_id video.secure_url createdAt'
			)
		if (!allPosts) return res.status(404).json({ error: 'Not Found, no post were found' })
		res.status(200).json(allPosts)
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Internal Server Error' })
	}
}

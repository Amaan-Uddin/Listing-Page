const Post = require('../models/post')
module.exports = async function getPost(req, res) {
	try {
		const { id } = req.params
		if (!id) return res.status(400).json({ error: 'Bad request' })
		const findPost = await Post.findById(id).select('title description createdAt video.secure_url')
		if (!findPost) return res.status(404).json({ error: 'Not Found, could not find post' })
		res.status(200).json(findPost)
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Internal Server Error' })
	}
}

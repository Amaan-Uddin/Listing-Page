const sharp = require('sharp')
const uploadStream = require('../utils/functions/uploadStream')
const Post = require('../models/post')

module.exports = async function postController(req, res) {
	try {
		const { title, description } = req.body

		const thumbnailBuffer = await sharp(req.files.thumbnail[0].buffer).webp({ quality: 20 }).toBuffer()
		const videoBuffer = req.files.video[0].buffer

		const uploadPromises = []

		const thumbnailStream = uploadStream(thumbnailBuffer, { folder: 'Neonflake/thumbnails', resource_type: 'auto' })
		uploadPromises.push(thumbnailStream)

		const videoStream = uploadStream(videoBuffer, { folder: 'Neonflake/videos', resource_type: 'auto' })
		uploadPromises.push(videoStream)

		const result = await Promise.all(uploadPromises)
		if (!result) throw new Error('Something went wrong')
		const thumbnail = result[0]
		const video = result[1]
		const createPost = await Post.create({
			title: title,
			description: description,
			thumbnail: {
				asset_id: thumbnail.asset_id,
				public_id: thumbnail.public_id,
				resource_type: thumbnail.resource_type,
				format: thumbnail.format,
				created_at: thumbnail.created_at,
				url: thumbnail.url,
				secure_url: thumbnail.secure_url,
				bytes: thumbnail.bytes,
			},
			video: {
				asset_id: video.asset_id,
				public_id: video.public_id,
				resource_type: video.resource_type,
				format: video.format,
				created_at: video.created_at,
				url: video.url,
				secure_url: video.secure_url,
				bytes: video.bytes,
			},
		})
		console.log(createPost)
		res.status(201).json({ message: 'Upload successful!' })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Internal Server Error' })
	}
}

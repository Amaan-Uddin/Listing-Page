const mongoose = require('mongoose')

const MediaSchema = new mongoose.Schema({
	asset_id: {
		type: String,
		required: true,
	},
	public_id: {
		type: String,
		required: true,
	},
	resource_type: String,
	format: String,
	created_at: Date,
	url: String,
	secure_url: {
		type: String,
		required: true,
	},
	bytes: Number,
})

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		thumbnail: MediaSchema,
		video: MediaSchema,
	},
	{ timestamps: true }
)

module.exports = mongoose.model('posts', PostSchema)

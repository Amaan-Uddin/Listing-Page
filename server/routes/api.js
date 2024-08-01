const express = require('express')
const router = express.Router()

const { uploadFiles } = require('../utils/middleware/upload')
const postController = require('../controllers/post.controller')
const getAllPosts = require('../controllers/allPost.controller')
const getPost = require('../controllers/getPost.controller')

router.post('/upload', uploadFiles, postController)
router.get('/all-posts', getAllPosts)
router.get('/post/:id', getPost)

module.exports = router

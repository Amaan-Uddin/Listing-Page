import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DisplayMedia from '../utils/DisplayMedia'
import SkeletonDisplay from '../utils/SkeletonDisplay'
import apiServices from '@/services/apiServices'

function MediaPlayer() {
	const { id } = useParams()
	const [post, setPost] = useState(null)
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		async function fetchPost() {
			try {
				setLoading(true)
				const response = await apiServices.getPost(id)
				setPost(response)
			} catch (error) {
				console.log(error)
			} finally {
				setTimeout(() => {
					setLoading(false)
				}, 700)
			}
		}
		fetchPost()
	}, [])
	return <div>{loading ? <SkeletonDisplay /> : post ? <DisplayMedia post={post} /> : ''}</div>
}
export default MediaPlayer

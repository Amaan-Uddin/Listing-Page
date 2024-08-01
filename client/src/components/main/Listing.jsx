import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import TooltipComp from '../utils/TooltipComp'
import SkeletonBody from '../utils/Skeleton'
import Post from '../utils/Post'

import apiServices from '@/services/apiServices'

export default function Listing() {
	const [allPosts, setAllPosts] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		async function fetchPosts() {
			try {
				setLoading(true)
				const response = await apiServices.getAllPosts()
				console.log(response)
				setAllPosts(response)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		fetchPosts()
	}, [])

	return (
		<div className="w-full flex justify-evenly h-full mt-6">
			<div className="w-1/8"></div>
			<div className="w-6/4">
				<div className="flex gap-y-5 gap-x-4 max-w-4xl w-full flex-wrap items-center justify-start">
					{loading
						? Array(9)
								.fill()
								.map((items, index) => <SkeletonBody key={index} />)
						: allPosts.map((post) => (
								<Post
									key={post._id}
									id={post._id}
									img={post.thumbnail.secure_url}
									title={post.title}
									createdAt={post.createdAt}
								/>
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))}
				</div>
			</div>
			<div className="w-1/8">
				<div className="w-full fixed bottom-10">
					<TooltipComp label="Upload">
						<Link to="/add-post">
							<Button className="rounded-full h-14 scale-90">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
								</svg>
							</Button>
						</Link>
					</TooltipComp>
				</div>
			</div>
		</div>
	)
}

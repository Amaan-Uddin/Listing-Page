import { format } from 'date-fns'
function DisplayMedia({ post }) {
	return (
		<div className="w-full flex justify-center h-screen items-start container">
			<div className="w-full flex gap-10 justify-between my-20 mx-32">
				<div className="flex flex-col">
					<h1 className="text-3xl font-bold my-3">{post.title}</h1>
					<h3 className="text-xl font-normal">{post.description}</h3>
					<p className="text-gray-500 mt-1">{format(new Date(post.createdAt), 'd MMM, yyyy')}</p>
				</div>
				<div>
					<iframe
						src={post.video.secure_url}
						width={'575px'}
						height={'325px'}
						className="border shadow-md rounded-lg bg-gray-100"
						loading="lazy"
						allowFullScreen
						allow="autoplay"
					></iframe>
				</div>
			</div>
		</div>
	)
}
export default DisplayMedia

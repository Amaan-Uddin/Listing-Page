import Image from './Image'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

function Post({ id, img, title, createdAt }) {
	return (
		<div className="flex flex-col space-y-2 max-w-72">
			<Link to={`/play-video/${id}`}>
				<Image src={img} />
				<div className="flex items-baseline justify-between ">
					<h3 className="text-xl font-semibold cursor-pointer">{title}</h3>
					<p className="text-sm text-gray-400 min-w-20">{format(new Date(createdAt), 'd MMM , yyyy')}</p>
				</div>
			</Link>
		</div>
	)
}
export default Post

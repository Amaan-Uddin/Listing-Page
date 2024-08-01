import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
function NotFound() {
	return (
		<div className="w-full h-screen flex items-center justify-center flex-col gap-12">
			<h1 className="text-6xl font-bold">404: Not Found</h1>
			<Link to="/">
				<Button type="button" className="scale-110">
					Go back
				</Button>
			</Link>
		</div>
	)
}
export default NotFound

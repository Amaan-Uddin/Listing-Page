import { Skeleton } from '../ui/skeleton'
function SkeletonDisplay() {
	return (
		<div className="w-full flex justify-center h-screen items-start container">
			<div className="w-full flex gap-10 justify-between my-20 mx-32">
				<div className="flex flex-col space-y-3">
					<Skeleton className="h-4 w-[250px]" />
					<Skeleton className="h-4 w-[200px]" />
					<Skeleton className="h-4 w-[100px]" />
				</div>
				<div>
					<Skeleton className="h-[324px] w-[574px] rounded-lg" />
				</div>
			</div>
		</div>
	)
}
export default SkeletonDisplay

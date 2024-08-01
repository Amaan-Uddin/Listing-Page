import { Skeleton } from '@/components/ui/skeleton'

function SkeletonBody() {
	return (
		<div className="flex flex-col space-y-3">
			<Skeleton className="h-[176px] w-[288px] rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	)
}
export default SkeletonBody

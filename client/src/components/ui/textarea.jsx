import * as React from 'react'

import { cn } from '@/lib/utils'

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
	const id = React.useId()
	return (
		<textarea
			className={cn(
				'flex min-h-[60px] w-full rounded-md my-1 border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			ref={ref}
			id={id}
			{...props}
		/>
	)
})
Textarea.displayName = 'Textarea'

export { Textarea }

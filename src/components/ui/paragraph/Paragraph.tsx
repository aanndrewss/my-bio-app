import { cva } from 'class-variance-authority'
import React from 'react'

import { ParagraphProps } from './Paragraph.props'
import { cn } from '@/lib/utils/tw-merge'

export const paragraphVariants = cva(
	'max-w-prose text-slate-700 dark:text-slate-300 mb-2',
	{
		variants: {
			size: {
				default: 'text-base sm:text-lg',
				sm: 'text-sm sm:text-base'
			}
		},
		defaultVariants: {
			size: 'default'
		}
	}
)

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
	({ className, size, children, ...props }, ref) => {
		return (
			<p
				ref={ref}
				{...props}
				className={cn(paragraphVariants({ size, className }))}
			>
				{children}
			</p>
		)
	}
)

Paragraph.displayName = 'Paragraph'

export default Paragraph

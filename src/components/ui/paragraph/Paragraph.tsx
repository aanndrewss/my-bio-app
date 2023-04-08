import { cva } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils/tw-merge'
import { ParagraphProps } from './Paragraph.props'

export const paragraphVariants = cva(
	'max-w-prose text-slate-700 dark:text-slate-300 mb-2',
	{
		variants: {
			size: {
				default: 'text-lg sm:text-base',
				sm: 'text-base sm:text-sm'
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

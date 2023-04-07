import { VariantProps } from 'class-variance-authority'

import { paragraphVariants } from './Paragraph'

export interface ParagraphProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof paragraphVariants> {}

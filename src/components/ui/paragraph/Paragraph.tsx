import cn from 'clsx'

import styles from './Paragraph.module.scss'
import { ParagraphProps } from './Paragraph.props'

export const Paragraph = ({
	size = 'm',
	children,
	className,
	...props
}: ParagraphProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, styles[`${size}`])} {...props}>
			{children}
		</p>
	)
}

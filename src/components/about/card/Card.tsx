import { motion } from 'framer-motion'
import { FC } from 'react'
import Tilt from 'react-parallax-tilt'

import { Htag } from '@/components/ui'

import { fadeIn } from '@/utils/motion/motion'

import styles from './Card.module.scss'
import { CardProps } from './Card.props'

const Card: FC<CardProps> = ({ title, index, image }) => {
	return (
		<Tilt className={styles.cardTilt}>
			<motion.div
				viewport={{ once: true }}
				initial='hidden'
				whileInView='show'
				variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
				className={styles.card}
			>
				<img src={image.url} alt={image.alt} width={55} height={55} />
				<Htag tag='h4' className={styles.title}>
					{title}
				</Htag>
			</motion.div>
		</Tilt>
	)
}

export default Card

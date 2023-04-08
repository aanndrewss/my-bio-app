import { motion } from 'framer-motion'
import { FC } from 'react'
import Tilt from 'react-parallax-tilt'

import { fadeIn } from '@/utils/motion/motion'

import { CardProps } from './Card.props'

const Card: FC<CardProps> = ({ title, index, image }) => {
	return (
		<Tilt className='w-full max-w-[250px]'>
			<motion.div
				viewport={{ once: true }}
				initial='hidden'
				whileInView='show'
				variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
				className='flex min-h-[250px] max-w-[250px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5 shadow-cardWhite ring-1 ring-slate-200 dark:shadow-cardDark dark:ring-0 md:min-h-[230px] md:px-10 md:py-4 sm:min-h-[200px] sm:px-8 sm:py-3'
			>
				<img src={image.url} alt={image.alt} width={55} height={55} />
				<h4 className='text-xl font-semibold text-center'>{title}</h4>
			</motion.div>
		</Tilt>
	)
}

export default Card

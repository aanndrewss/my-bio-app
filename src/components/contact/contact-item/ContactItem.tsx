import { motion } from 'framer-motion'
import { FC } from 'react'

import { fadeIn } from '@/utils/motion/motion'

import { IContact } from '@/interfaces/contact.interface'

const ContactItem: FC<IContact> = ({ id, Icon, info, title, link }) => {
	return (
		<motion.div
			className='flex flex-row gap-4 items-center'
			viewport={{ once: true }}
			initial='hidden'
			whileInView='show'
			variants={fadeIn('right', 'spring', id * 0.5, 0.75)}
		>
			<div className='p-5 rounded-full shadow-xl ring-1 ring-secondary dark:ring-primary dark:shadow-primary'>
				<Icon className='text-4xl' />
			</div>
			<div className='flex flex-col gap-1'>
				<h4 text-xl className='text-xl font-semibold text-primary dark:text-textWhite'>
					{title}
				</h4>
				<a
					rel={'noreferrer'}
					className='text-sky-400 transition-all hover:text-sky-600'
					target={'_blank'}
					href={link}
				>
					{info}
				</a>
			</div>
		</motion.div>
	)
}

export default ContactItem

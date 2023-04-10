'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { textVariant } from '@/utils/motion/motion'

import ContactItem from './contact-item/ContactItem'
import { contact } from './data/contact.data'
import { IContact } from '@/interfaces/contact.interface'

const Contact: FC = () => {
	return (
		<section id='contact' className='flex h-screen justify-center py-28 md:h-auto'>
			<div className='flex w-full flex-col justify-evenly md:items-center'>
				<motion.div
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
					variants={textVariant()}
				>
					<h4 className='text-xl font-semibold text-secondary md:text-center mb-4 dark:text-textWhite'>
						GET IN TOUCH
					</h4>
					<h1 className='text-6xl font-bold mb-6'>Contact.</h1>
				</motion.div>
				<div className='flex flex-wrap items-center gap-10 justify-between mt-12 md:grid-cols-1'>
					{contact.map((c: IContact) => (
						<ContactItem key={c.id} {...c} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Contact

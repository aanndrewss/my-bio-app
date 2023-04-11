'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { fadeIn, textVariant } from '@/utils/motion/motion'

import Paragraph from '../ui/paragraph/Paragraph'

import Card from './card/Card'
import { projects } from './data/projects.data'
import { IProject } from '@/interfaces/projects.interface'

const Projects: FC = () => {
	return (
		<section id='projects' className='flex justify-center py-24'>
			<div className='flex w-full flex-col justify-center md:items-center'>
				<motion.div
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
					variants={textVariant()}
				>
					<h4 className='text-xl font-semibold text-secondary md:text-center mb-4 dark:text-textWhite'>
						MY WORK
					</h4>
					<h1 className='text-6xl font-bold mb-6'>Projects.</h1>
				</motion.div>
				<motion.div
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
					variants={fadeIn('', '', 0.1, 1)}
				>
					<Paragraph className='md:text-center'>
						Following projects showcases my skills and experience through real-world examples of my
						work. Each project is briefly described with links to code repositories and live demos
						in it. It reflects my ability to solve complex problems, work with different
						technologies, and manage projects effectively.
					</Paragraph>
				</motion.div>
				<div className='mt-16 grid grid-cols-3 gap-10 md:grid-cols-2 sm:flex sm:flex-col'>
					{projects.map((p: IProject) => (
						<Card key={p.id} {...p} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects

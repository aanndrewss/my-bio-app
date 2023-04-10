'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { fadeIn, textVariant } from '@/utils/motion/motion'

import Paragraph from '../ui/paragraph/Paragraph'

import Card from './card/Card'
import { services } from './data/services.data'
import { IServices } from '@/interfaces/services.interface'

const About: FC = () => {
	return (
		<section id='about' className='flex h-screen justify-center py-24 md:h-auto'>
			<div className='flex w-full flex-col justify-center md:items-center'>
				<motion.div
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
					variants={textVariant()}
				>
					<h4 className='text-xl font-semibold text-secondary md:text-center mb-4 dark:text-textWhite'>
						INTRODUCTION
					</h4>
					<h1 className='text-6xl font-bold mb-6'>Overview.</h1>
				</motion.div>
				<motion.div
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
					variants={fadeIn('', '', 0.1, 1)}
				>
					<Paragraph className='md:text-center'>
						I'm a skilled software developer with experience in TypeScript and JavaScript, and
						expertise in frameworks like React and Next.js I also have a little experience in
						frameworks such as Nest.js. I'm a quick learner and a team player who wants to bring my
						ideas to projects and develop outstanding web applications.
					</Paragraph>
				</motion.div>
				<div className='mt-16 grid grid-cols-3 gap-10 justify-center md:grid-cols-2 sm:flex sm:flex-col'>
					{services.map((s: IServices, index) => (
						<Card key={s.title} {...s} index={index} />
					))}
				</div>
			</div>
		</section>
	)
}

export default About

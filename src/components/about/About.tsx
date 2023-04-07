'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'

import { fadeIn, textVariant } from '@/utils/motion/motion'

import { Htag, Paragraph } from '../ui'

import styles from './About.module.scss'
import Card from './card/Card'
import { services } from './data/services.data'
import { IServices } from '@/interfaces/services.interface'

const About: FC = () => {
	return (
		<section id='about' className={styles.wrapper}>
			<div className={styles.content}>
				<motion.div
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
					variants={textVariant()}
				>
					<Htag tag='h4' className={styles.subtitle}>
						INTRODUCTION
					</Htag>
					<Htag tag='h1' className={styles.title}>
						Overview.
					</Htag>
				</motion.div>
				<motion.div
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
					variants={fadeIn('', '', 0.1, 1)}
				>
					<Paragraph className={styles.p}>
						I'm a skilled software developer with experience in TypeScript and
						JavaScript, and expertise in frameworks like React and Next.js I
						also have a little experience in frameworks such as Nest.js. I'm a
						quick learner and a team player who wants to bring my ideas to
						projects and develop outstanding web applications.
					</Paragraph>
				</motion.div>
				<div className={styles.cardList}>
					{services.map((s: IServices, index) => (
						<Card key={s.title} {...s} index={index} />
					))}
				</div>
			</div>
		</section>
	)
}

export default About

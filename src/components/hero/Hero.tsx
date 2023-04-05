'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { slideIn } from '../../utils/motion/motion.js'
import { Htag, Paragraph } from '../ui'

import styles from './Hero.module.scss'
import { socials, tech } from './data'
import { ISocials } from '@/interfaces/socials.interface'

const Hero: FC = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.info}>
					<motion.div
						viewport={{ once: true }}
						initial='hidden'
						whileInView='show'
						variants={slideIn('left', 'spring', 0.3, 0.75)}
						className={styles.desc}
					>
						<Htag tag='h1'>Andrey Shihalev</Htag>
						<Htag tag='h3' className={styles.subtitle}>
							Front-End React Developer.
						</Htag>
						<Paragraph className={styles.paragraph}>
							Freelancer and student. I am developing user interfaces. Based in
							Kazan, Russia. 📍
						</Paragraph>
						<ul className={styles.socialsList}>
							{socials.map((s: ISocials) => (
								<li className={styles.socialsItem} key={s.id}>
									<a href={s.link} rel={'noreferrer'} target={'_blank'}>
										<s.Icon />
									</a>
								</li>
							))}
						</ul>
					</motion.div>
					<Image
						className={styles.avatar}
						src='/images/avatar.jpg'
						alt='Avatar'
						quality={100}
						width={250}
						height={250}
					/>
				</div>
				<motion.div
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
					variants={slideIn('up', 'spring', 0.3, 0.75)}
					className={styles.techStack}
				>
					<Htag tag='h4'>
						Tech stack <span className='ml-4'>|</span>
					</Htag>
					<ul className={styles.techList}>
						{tech.map((t: ISocials) => (
							<li className={styles.techItem} key={t.id}>
								<a href={t.link} rel={'noreferrer'} target={'_blank'}>
									<t.Icon />
								</a>
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero

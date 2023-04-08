'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { slideIn } from '../../utils/motion/motion.js'
import Paragraph from '../ui/paragraph/Paragraph'

import { ISocials } from '@/interfaces/socials.interface'
import { ITech } from '@/interfaces/tech.interface.js'
import { socials, tech } from './data'

const Hero: FC = () => {
	return (
		<section id='home' className='flex h-screen justify-center py-28 md:h-auto'>
			<div className='flex flex-col justify-center'>
				<div className='relative mb-32 flex flex-row gap-32 md:mb-10 md:flex-col-reverse md:justify-center md:items-center md:gap-4'>
					<motion.div
						viewport={{ once: true }}
						initial='hidden'
						whileInView='show'
						variants={slideIn('left', 'spring', 0.3, 0.75)}
						className='flex flex-col gap-4 md:items-center'
					>
						<h1 className='text-6xl font-bold mb-4 md:text-center'>
							Andrey Shihalev
						</h1>
						<h3 className='text-4xl font-semibold mb-2 md:text-center'>
							Front-End React Developer.
						</h3>
						<Paragraph className='mb-2 md:text-center'>
							Freelancer and student. I am developing user interfaces. Based in
							Kazan, Russia. 📍
						</Paragraph>
						<ul className='flex flex-row gap-6'>
							{socials.map((s: ISocials) => (
								<li
									className='cursor-pointer text-3xl transition-all duration-300 hover:text-secondary'
									key={s.id}
								>
									<a href={s.link} rel={'noreferrer'} target={'_blank'}>
										<s.Icon />
									</a>
								</li>
							))}
						</ul>
					</motion.div>
					<Image
						className='relative mt-[-10px] h-[250px] w-[250px] animate-levitate rounded-full object-contain md:h-[230px] md:w-[230px] sm:w-[200px] sm:h-[200px]'
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
					className='flex flex-row items-center justify-start gap-20 md:flex-col md:gap-8'
				>
					<h4 className='text-xl font-semibold md:border-b-2 md:border-r-0 md:pr-0 border-r-2 border-solid border-secondary dark:border-textWhite pr-2'>
						Tech stack
					</h4>
					<ul className='flex flex-row flex-wrap justify-center gap-10 md:gap-6'>
						{tech.map((t: ITech) => (
							<li
								className='cursor-pointer text-4xl'
								style={{ color: `${t.color}` }}
								key={t.id}
							>
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

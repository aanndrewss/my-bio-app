import Image from 'next/image'
import { FC } from 'react'

import { Htag, Paragraph } from '../ui'

import styles from './Hero.module.scss'
import { socials, tech } from './data'
import { ISocials } from '@/interfaces/socials.interface'

const Hero: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.info}>
					<div className='flex flex-col'>
						<Htag tag='h1' className='mb-4'>
							Andrey Shihalev
						</Htag>
						<Htag tag='h3' className='mb-6'>
							Front-End React Developer.
						</Htag>
						<Paragraph className='text-left mb-6'>
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
					</div>
					<Image
						className={styles.avatar}
						src='/images/avatar.jpg'
						alt='Avatar'
						quality={100}
						width={250}
						height={250}
					/>
				</div>
				<div className={styles.techStack}>
					<Htag tag='h4'>
						Tech stack <span className='ml-4'>|</span>
					</Htag>
					<ul className={styles.techList}>
						{tech.map((t: ISocials) => (
							<li className={styles.techItem} key={t.id}>
								<t.Icon />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Hero

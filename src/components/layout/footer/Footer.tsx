import { FC } from 'react'

import { socials } from '@/components/hero/data'

import { ISocials } from '@/interfaces/socials.interface'

const Footer: FC = () => {
	return (
		<footer className='w-full ring-1 ring-slate-300 bg-white dark:bg-bgBlack dark:ring-0'>
			<div className='py-14 m-auto min-w-[320px] max-w-[900px] px-10 md:max-w-[480px]'>
				<div className='flex flex-row justify-between items-center'>
					<h3>Copyright © 2023. All rights are reserved</h3>
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
				</div>
			</div>
		</footer>
	)
}

export default Footer

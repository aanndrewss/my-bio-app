import { Pacifico } from '@next/font/google'
import { FC } from 'react'
import { FiMenu } from 'react-icons/fi'

import ThemeToggle from '@/components/theme-toggle/ThemeToggle'

import { ILinks } from '@/interfaces/links.interface'
import { cn } from '@/lib/utils/tw-merge'
import { HeaderProps } from './Header.props'

const pacifico = Pacifico({
	weight: '400',
	subsets: ['latin']
})

const Header: FC<HeaderProps> = ({ links }) => {
	return (
		<header className='fixed z-10 w-full bg-white shadow-lg dark:bg-bgBlack'>
			<div className=' flex flex-row items-center justify-between px-10 py-5'>
				<span className={cn(pacifico.className, 'text-4xl font-bold')}>
					andrews
				</span>
				<nav className='flex flex-row items-center gap-10'>
					<ThemeToggle />
					<ul className='flex flex-row gap-4 text-lg font-medium md:hidden'>
						{links.map((l: ILinks) => (
							<li className='cursor-pointer text-xl font-semibold' key={l.id}>
								<a href={`#${l.slug}`}>{l.title}</a>
							</li>
						))}
					</ul>
					<FiMenu className='hidden cursor-pointer text-3xl md:block' />
				</nav>
			</div>
		</header>
	)
}

export default Header

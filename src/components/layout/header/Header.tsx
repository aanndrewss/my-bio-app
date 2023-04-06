import { Pacifico } from '@next/font/google'
import { FC } from 'react'
import { FiMenu } from 'react-icons/fi'

import { Htag } from '@/components/ui'

import styles from './Header.module.scss'
import { HeaderProps } from './Header.props'
import { ILinks } from '@/interfaces/links.interface'

const pacifico = Pacifico({
	weight: '400',
	subsets: ['latin']
})

const Header: FC<HeaderProps> = ({ links }) => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.content}>
				<Htag tag='h2' className={pacifico.className}>
					andrews
				</Htag>
				<nav>
					<ul className={styles.navList}>
						{links.map((l: ILinks) => (
							<li className={styles.navItem} key={l.id}>
								<a href={`#${l.slug}`}>{l.title}</a>
							</li>
						))}
					</ul>
					<FiMenu className={styles.menu} />
				</nav>
			</div>
		</header>
	)
}

export default Header

import { FC } from 'react'

import { Htag } from '@/components/ui'

import styles from './Header.module.scss'
import { HeaderProps } from './Header.props'
import { ILinks } from '@/interfaces/links.interface'

const Header: FC<HeaderProps> = ({ links }) => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.content}>
				<Htag tag='h1'>A</Htag>
				<nav>
					<ul className={styles.navList}>
						{links.map((l: ILinks) => (
							<li key={l.id}>{l.title}</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header

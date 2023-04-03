import { FC } from 'react'

import About from '@/components/about/About'
import Hero from '@/components/hero/Hero'

import styles from './Home.module.scss'

const HomePage: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Hero />
			<About />
		</div>
	)
}

export default HomePage

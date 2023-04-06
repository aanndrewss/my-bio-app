import { FC } from 'react'

import styles from './About.module.scss'

const About: FC = () => {
	return (
		<section id='about' className={styles.wrapper}>
			<div className={styles.content}>About</div>
		</section>
	)
}

export default About

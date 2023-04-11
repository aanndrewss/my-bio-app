import { FC } from 'react'

import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Hero from '@/components/hero/Hero'
import Projects from '@/components/projects/Projects'

const HomePage: FC = () => {
	return (
		<div className='m-auto w-full min-w-[320px] max-w-[900px] px-10 md:max-w-[480px]'>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</div>
	)
}

export default HomePage

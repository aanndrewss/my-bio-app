import { FC } from 'react'

import About from '@/components/about/About'
import Hero from '@/components/hero/Hero'

const HomePage: FC = () => {
	return (
		<div className='m-auto h-screen w-full min-w-[320px] max-w-[900px] px-10 md:max-w-[480px]'>
			<Hero />
			<About />
		</div>
	)
}

export default HomePage

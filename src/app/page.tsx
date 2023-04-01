import { Metadata } from 'next'

import HomePage from '@/pages/home/Home'

export const metadata: Metadata = {
	title: 'Andrew | Front-End React developer',
	description: 'The best developer you can hire!'
}

export default function Home() {
	return <HomePage />
}

import { Urbanist } from '@next/font/google'
import axios, { AxiosResponse } from 'axios'

import Header from '@/components/layout/header/Header'
import Providers from '@/components/providers/Providers'

import { ILinks } from '@/interfaces/links.interface'
import { cn } from '@/lib/utils/tw-merge'
import '@/styles/globals.scss'

const urbanist = Urbanist({
	subsets: ['latin']
})

const loadLinks = async () => {
	try {
		const res: AxiosResponse<ILinks[]> = await axios.get(
			`${process.env.APP_API_URL}/links`
		)
		return res.data
	} catch (e) {
		console.error(e)
	}
}

export default async function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	const links = await loadLinks()
	if (!links) {
		return null
	}
	return (
		<html lang='en' className={cn('scroll-smooth', urbanist.className)}>
			<body className='m-0 overflow-x-hidden min-h-screen bg-white p-0 text-primary antialiased dark:bg-[#0f0f0f] dark:text-white'>
				<Providers>
					<Header links={links} />
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	)
}

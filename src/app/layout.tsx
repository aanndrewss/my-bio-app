import { Urbanist } from '@next/font/google'
import axios, { AxiosResponse } from 'axios'

import Header from '@/components/layout/header/Header'

import { ILinks } from '@/interfaces/links.interface'
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
		<html lang='en' className={urbanist.className}>
			<body>
				<Header links={links} />
				<main>{children}</main>
			</body>
		</html>
	)
}

import { Urbanist } from '@next/font/google'

import Header from '@/components/layout/header/Header'

import '@/styles/globals.scss'

const urbanist = Urbanist({
	subsets: ['latin']
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={urbanist.className}>
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}

'use client'

import { ThemeProvider } from 'next-themes'
import type { FC, ReactNode } from 'react'

interface ProvidersProps {
	children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
			{/* <I18NProvider i18n={i18n}> */}
			{children}
			{/* </I18NProvider> */}
		</ThemeProvider>
	)
}

export default Providers

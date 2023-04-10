'use client'

import { I18NProvider } from '@ayub-begimkulov/i18n'
import { ThemeProvider } from 'next-themes'
import type { FC, ReactNode } from 'react'

import { i18n } from '@/lib/i18n'

interface ProvidersProps {
	children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<I18NProvider i18n={i18n}>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
				{children}
			</ThemeProvider>
		</I18NProvider>
	)
}

export default Providers

'use client'

import { FC } from 'react'

import { useI18N } from '@/lib/i18n'

const languagesList = [
	{ value: 'ru', title: 'Русский' },
	{ value: 'en', title: 'English' }
]

const SelectLang: FC = () => {
	const i18n = useI18N()
	const updateLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
		i18n.setLang(e.target.value as 'en' | 'ru')
	}
	return (
		<div>
			<select value={i18n.lang} onChange={updateLang}>
				{languagesList.map(lang => (
					<option key={lang.value} value={lang.value}>
						{lang.title}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectLang

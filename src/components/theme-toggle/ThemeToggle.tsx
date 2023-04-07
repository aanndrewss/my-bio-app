'use client'

import { useTheme } from 'next-themes'
import { FC } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeToggle: FC = () => {
	const { setTheme } = useTheme()
	return (
		<div className='inline-flex items-center justify-center'>
			<FiMoon
				className='cursor-pointer rotate-0 text-xl scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100'
				onClick={() => setTheme('dark')}
			/>
			<FiSun
				className='cursor-pointer text-xl absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100'
				onClick={() => setTheme('white')}
			/>
		</div>
	)
}

export default ThemeToggle

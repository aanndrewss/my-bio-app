// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			screens: {
				sm: { max: '480px' },
				md: { max: '768px' }
			},
			fontFamily: {
				sans: ['var(--urbanist)', ...fontFamily.sans]
			},
			colors: {
				...colors,
				primary: '#1d1d1d',
				secondary: '#475569',
				textWhite: '#d8d8d8',
				bgBlack: '#0f0f0f'
			},
			keyframes: {
				levitate: {
					to: {
						transform: 'translateY(10px)'
					}
				}
			},
			animation: {
				levitate: 'levitate 1.5s infinite ease alternate'
			}
		}
	},
	plugins: []
}

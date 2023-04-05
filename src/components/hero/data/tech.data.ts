import {
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiReact,
	SiRedux,
	SiSass,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si'

import { ITech } from '@/interfaces/tech.interface'

export const tech: ITech[] = [
	{
		id: 1,
		title: 'HTML',
		link: 'https://ru.wikipedia.org/wiki/HTML',
		color: '#E34F26',
		Icon: SiHtml5
	},
	{
		id: 2,
		title: 'CSS',
		link: 'https://ru.wikipedia.org/wiki/CSS',
		color: '#1572B6',
		Icon: SiCss3
	},
	{
		id: 3,
		title: 'JavaScript',
		link: 'https://ru.wikipedia.org/wiki/JavaScript',
		color: '#F7DF1E',
		Icon: SiJavascript
	},
	{
		id: 4,
		title: 'TypeScript',
		link: 'https://www.typescriptlang.org/',
		color: '#007ACC',
		Icon: SiTypescript
	},
	{
		id: 5,
		title: 'React',
		link: 'https://react.dev/',
		color: '#61DAFB',
		Icon: SiReact
	},
	{
		id: 6,
		title: 'Redux',
		link: 'https://ru.wikipedia.org/wiki/JavaScript',
		color: '#764ABC',
		Icon: SiRedux
	},
	{
		id: 7,
		title: 'SASS',
		link: 'https://sass-lang.com/',
		color: '#CC6699',
		Icon: SiSass
	},
	{
		id: 8,
		title: 'TailwindCSS',
		link: 'https://tailwindcss.com/',
		color: '#38B2AC',
		Icon: SiTailwindcss
	}
]

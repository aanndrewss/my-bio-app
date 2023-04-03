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

import { ISocials } from '@/interfaces/socials.interface'

export const tech: ISocials[] = [
	{
		id: 1,
		title: 'HTML',
		link: 'https://ru.wikipedia.org/wiki/HTML',
		Icon: SiHtml5
	},
	{
		id: 2,
		title: 'CSS',
		link: 'https://ru.wikipedia.org/wiki/CSS',
		Icon: SiCss3
	},
	{
		id: 3,
		title: 'JavaScript',
		link: 'https://ru.wikipedia.org/wiki/JavaScript',
		Icon: SiJavascript
	},
	{
		id: 4,
		title: 'TypeScript',
		link: 'https://www.typescriptlang.org/',
		Icon: SiTypescript
	},
	{
		id: 5,
		title: 'React',
		link: 'https://react.dev/',
		Icon: SiReact
	},
	{
		id: 6,
		title: 'Redux',
		link: 'https://ru.wikipedia.org/wiki/JavaScript',
		Icon: SiRedux
	},
	{
		id: 7,
		title: 'SASS',
		link: 'https://sass-lang.com/',
		Icon: SiSass
	},
	{
		id: 8,
		title: 'TailwindCSS',
		link: 'https://tailwindcss.com/',
		Icon: SiTailwindcss
	}
]

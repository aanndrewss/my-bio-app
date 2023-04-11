import { IProject } from '@/interfaces/projects.interface'

export const projects: IProject[] = [
	{
		id: 1,
		title: 'Restaurant',
		github: 'https://github.com/aanndrewss/new_version_restaurant',
		description: 'Fullstack web application.',
		tech: [
			{ id: 1, title: 'NextJS12' },
			{ id: 2, title: 'NestJS' },
			{ id: 3, title: 'RTK' }
		],
		img: {
			url: '/images/restaurant.jpg',
			alt: 'Restaurant'
		}
	},
	{
		id: 2,
		title: 'Rating of courses',
		github: 'https://github.com/aanndrewss/rating-app',
		description: 'Web application with connection to rest api.',
		tech: [
			{ id: 1, title: 'NextJS12' },
			{ id: 2, title: 'Docker' },
			{ id: 3, title: 'CSS' }
		],
		img: {
			url: '/images/rating-of-courses.jpg',
			alt: 'Course rate'
		}
	},
	{
		id: 3,
		title: 'Webtronics | Landing',
		github: 'https://github.com/aanndrewss/webtronics',
		deploy: 'https://webtronics-ten.vercel.app/',
		description: 'Landing for company.',
		tech: [
			{ id: 1, title: 'NextJS12' },
			{ id: 2, title: 'Typescript' },
			{ id: 3, title: 'TailwindCSS' }
		],
		img: {
			url: '/images/webtronics.jpg',
			alt: 'Webtronics'
		}
	},
	{
		id: 4,
		title: 'Coffee shop',
		github: 'https://github.com/aanndrewss/coffee-shop-frontend',
		description: 'Fullstack web application.',
		tech: [
			{ id: 1, title: 'NextJS12' },
			{ id: 2, title: 'NestJS' },
			{ id: 3, title: 'React Query' }
		],
		img: {
			url: '/images/coffee-shop.jpg',
			alt: 'Coffee shop'
		}
	}
]

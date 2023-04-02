import { NextApiRequest, NextApiResponse } from 'next'

import { ILinks } from '@/interfaces/links.interface'

const links = [
	{
		id: 1,
		title: 'Home',
		slug: 'home'
	},
	{
		id: 2,
		title: 'About',
		slug: 'about'
	},
	{
		id: 3,
		title: 'Projects',
		slug: 'projects'
	},
	{
		id: 4,
		title: 'Contact',
		slug: 'contact'
	}
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ILinks[]>
) {
	res.status(200).json(links)
}

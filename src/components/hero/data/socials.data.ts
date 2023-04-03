import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'

import { ISocials } from '@/interfaces/socials.interface'

export const socials: ISocials[] = [
	{
		id: 1,
		title: 'Github',
		link: 'https://github.com/aanndrewss',
		Icon: AiFillGithub
	},
	{
		id: 2,
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/in/andrey-shihalev-544403231/',
		Icon: AiFillLinkedin
	},
	{
		id: 3,
		title: 'Telegram',
		link: 'https://t.me/andrxw66',
		Icon: BsTelegram
	}
]

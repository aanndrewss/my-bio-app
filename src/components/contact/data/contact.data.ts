import { BsFillPinMapFill, BsTelegram } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

import { IContact } from '@/interfaces/contact.interface'

export const contact: IContact[] = [
	{
		id: 1,
		title: 'Location',
		info: 'Kazan, Russia',
		link: 'https://yandex.ru/maps/geo/kazan/53166501/?ll=49.099982%2C55.767306&z=10.46',
		Icon: BsFillPinMapFill
	},
	{
		id: 2,
		title: 'Mail',
		info: 'andreyshihalev099@gmail.com',
		link: 'mailto:andreyshihalev099@gmail.com',
		Icon: FiMail
	},
	{
		id: 3,
		title: 'Telegram',
		info: '@andrxw66',
		link: 'https://t.me/andrxw66',
		Icon: BsTelegram
	}
]

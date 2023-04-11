export interface IProject {
	id: number
	title: string
	github: string
	deploy?: string
	img: IImage
	description: string
	tech: ITech[]
}

interface ITech {
	id: number
	title: string
}

interface IImage {
	alt: string
	url: string
}

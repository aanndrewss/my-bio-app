import {
	I18N,
	createPluralize,
	useI18N as useI18NBase,
	useTranslate as useTranslateBase
} from '@ayub-begimkulov/i18n'

const pluralizeEn = createPluralize('en')
const pluralizeRu = createPluralize('ru')

const timeout =
	<T>(timeout: number) =>
	(value: T) => {
		return new Promise<T>(res => {
			setTimeout(() => res(value), timeout)
		})
	}

const loadEn = () => import('./keys/en').then(module => module.en)
const loadRu = () => import('./keys/ru').then(module => module.ru)

export const i18n = new I18N({
	defaultLang: 'ru',
	languages: {
		en: {
			keyset: loadEn,
			pluralize: pluralizeEn
		},
		ru: {
			keyset: loadRu,
			pluralize: pluralizeRu
		}
	}
})

export const useTranslate = useTranslateBase<typeof i18n>
export const useI18N = useI18NBase<typeof i18n>

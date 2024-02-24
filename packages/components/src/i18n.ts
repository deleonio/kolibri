import type { Generic } from 'adopted-style-sheets';
import { I18nextService } from './core/i18n';
import locale_de from './locales/de';
import locale_en from './locales/en';

type ResourcePrefix = 'Kol';
type ComponentKeys = keyof typeof locale_de;

const mapLocaleKeys = (locale: { [K in ComponentKeys]: string }) =>
	(Object.keys(locale) as ComponentKeys[]).reduce((a, c) => ((a[`${'kol'}-${c}`] = locale[c]), a), {} as Generic.I18n.Map<ResourcePrefix, ComponentKeys>);

const translations = new Set<Generic.I18n.RegisterPatch<Generic.I18n.Locale.ISO_639_1, ResourcePrefix, ComponentKeys>>([
	(t: (language: 'en', translationMap: Generic.I18n.Map<ResourcePrefix, ComponentKeys>) => Generic.I18n.Locale.ISO_639_1) => t('en', mapLocaleKeys(locale_en)),
	(t: (language: 'de', translationMap: Generic.I18n.Map<ResourcePrefix, ComponentKeys>) => Generic.I18n.Locale.ISO_639_1) => t('de', mapLocaleKeys(locale_de)),
]);

type Options = {
	count?: number;
	placeholders?: { [K: string]: string };
};

let i18nextService: I18nextService;

(() => {
	I18nextService.getInstance('de')
		.then((instance) => {
			i18nextService = instance;
			i18nextService.addTranslations(translations);
		})
		.catch(console.warn);
})();

export const configI18n = (
	lng: Generic.I18n.Locale.ISO_639_1,
	translations?:
		| Generic.I18n.RegisterPatch<Generic.I18n.Locale.ISO_639_1, string, string>
		| Generic.I18n.RegisterPatch<Generic.I18n.Locale.ISO_639_1, string, string>[]
		| Set<Generic.I18n.RegisterPatch<Generic.I18n.Locale.ISO_639_1, string, string>>
) => {
	I18nextService.getInstance(lng)
		.then(async (instance) => {
			await instance.setLanguage(lng);
			instance.addTranslations(translations);
		})
		.catch(console.warn);
};

export const translate = (key: `${Lowercase<ResourcePrefix>}-${Lowercase<ComponentKeys>}`, options?: Options) => {
	let text = i18nextService.translate(key, options);
	if (text === key) {
		i18nextService.addTranslations(translations);
		text = i18nextService.translate(key, options);
	}
	return text;
};

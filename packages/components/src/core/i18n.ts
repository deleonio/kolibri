import i18next, { i18n } from 'i18next';

import { Generic } from '@a11y-ui/core';

interface ITranslationOptions {
	/**
	 * The number of items to determine an counted text.
	 */
	count?: number;

	/**
	 * Placeholders to insert into the text. Replacing {{key}} with the specified value if the "key".
	 */
	placeholders?: { [K: string]: string };
}

export interface II18nService {
	/**
	 * Adds a resource bundle for the specified language.
	 * @param lng the language the bundle is for
	 * @param translationMap the translations of the given language
	 */
	addResourceBundle: (lng: Generic.I18n.Locale.ISO_639_1, translationMap: Generic.I18n.Map<string, string>) => void;
	/**
	 * Determines a human-readable translated text for the given resource key.
	 * @param key the resource key
	 * @param options optional translation parameters
	 * @returns the translated text
	 */
	translate: (key: string, options?: ITranslationOptions) => string;
}

export class I18nextService implements II18nService {
	private i18next: i18n;

	constructor(
		lng: Generic.I18n.Locale.ISO_639_1,
		translations?:
			| Generic.I18n.RegisterPatch<Generic.I18n.Locale.ISO_639_1, string, string>
			| Generic.I18n.RegisterPatch<Generic.I18n.Locale.ISO_639_1, string, string>[]
			| Set<Generic.I18n.RegisterPatch<Generic.I18n.Locale.ISO_639_1, string, string>>
	) {
		this.i18next = i18next;

		if (Array.isArray(translations)) {
			translations = new Set(translations);
		} else if (typeof translations === 'function') {
			translations = new Set([translations]);
		}

		if (!this.i18next.isInitialized) {
			void this.i18next.init({
				lng,
			});
		}

		if (translations !== undefined) {
			translations.forEach((t) =>
				t((l, t) => {
					this.addResourceBundle(l, t);
					return l;
				})
			);
		}
	}

	public addResourceBundle(lng: Generic.I18n.Locale.ISO_639_1, translationMap: Generic.I18n.Map<string, string>) {
		this.i18next.addResourceBundle(lng, 'translation', translationMap, true);
	}

	public translate(key: string, options?: ITranslationOptions) {
		return this.i18next.t(key, {
			count: options?.count,
			...options?.placeholders,
		});
	}
}

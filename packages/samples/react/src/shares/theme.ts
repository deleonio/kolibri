import { SelectOption } from '@public-ui/components';

export const THEMES = ['default', 'ecl-ec', 'ecl-eu', 'kern-v2', 'unstyled'] as const;
export type Theme = (typeof THEMES)[number];
export type ThemeAndUnstyled = Theme | 'unstyled';

// const drafts: ThemeAndUnstyled[] = ['ecl-ec', 'ecl-eu'];

// export const isDraftTheme = (theme: ThemeAndUnstyled) => drafts.includes(theme);

export const isTheme = (value: unknown) => {
	return THEMES.find((theme) => theme === value) !== undefined;
};

export type Store = {
	darkMode: boolean;
	theme: ThemeAndUnstyled;
};

export const THEME_OPTIONS: SelectOption<ThemeAndUnstyled>[] = [
	{
		label: 'Default (Tested)',
		value: 'default',
	},
	{
		label: 'European Commission (in progress)',
		value: 'ecl-ec',
	},
	{
		label: 'European Union (in progress)',
		value: 'ecl-eu',
	},
	{
		label: 'KERN-UX Standard',
		value: 'kern-v2',
	},
	{
		label: 'Unstyled (Uncolored)',
		value: 'unstyled',
	},
];

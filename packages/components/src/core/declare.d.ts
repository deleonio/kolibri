import type { Generic, ThemeDetails } from '@a11y-ui/core';

declare global {
	interface Window {
		A11yUi: {
			Theme?: ThemeDetails;
			Themes?: Record<string, Generic.Theming.Map<string, string>>;
		} & Record<string, unknown>;
	}
}

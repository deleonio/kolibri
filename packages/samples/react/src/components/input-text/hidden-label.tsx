import React from 'react';
import { KolForm, KolInputText } from '@public-ui/react';

import { FC } from 'react';

import { ERROR_MSG, HINT_MSG } from '../../shares/constants';

export const InputTextHiddenLabel: FC = () => (
	<KolForm className="grid gap-4">
		<KolInputText
			_hint={HINT_MSG}
			_hideLabel
			_error={ERROR_MSG}
			_placeholder="Mit Icons"
			_icon={{
				left: 'codicon codicon-arrow-left',
				right: {
					icon: 'codicon codicon-arrow-right',
					style: {
						'font-size': '200%',
					},
				},
			}}
			_required
			_smartButton={{
				_icon: {
					left: {
						icon: 'codicon codicon-eye',
					},
				},
				_hideLabel: true,
				_label: 'Passwort anzeigen',
				_on: {
					onClick: () => {},
				},
			}}
			_type="search"
			_label="Suche"
		/>
		<KolInputText
			_error={ERROR_MSG}
			_hideLabel
			_placeholder="Mit Icons"
			_icon={{
				left: {
					icon: 'codicon codicon-arrow-left',
				},
				right: {
					icon: 'codicon codicon-arrow-right',
				},
			}}
			_type="search"
			_label="Suche"
		/>
		<KolInputText _hideLabel _placeholder="Placeholder" _label="Vorname (text)" _required />
		<KolInputText _placeholder="Placeholder" _type="search" _label="Suche (search)" />
		<KolInputText _placeholder="Placeholder" _error={ERROR_MSG} _type="url" _label="URL (url)" />
		<KolInputText _placeholder="Placeholder" _type="tel" _label="Telefon (tel)" />
		<KolInputText _placeholder="Placeholder" _readOnly _label="Vorname (text, readonly)" />
		<KolInputText _value="Value" _readOnly _label="Vorname (text, readonly)" />
		<KolInputText _placeholder="Placeholder" _disabled _label="Vorname (text, disabled)" />
		<KolInputText _value="Value" _disabled _label="Vorname (text, disabled)" />
	</KolForm>
);

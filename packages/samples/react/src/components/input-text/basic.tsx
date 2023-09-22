import React, { FC } from 'react';

import { KolForm, KolInputText } from '@public-ui/react';

import { ERROR_MSG, HINT_MSG } from '../../shares/constants';

export const InputTextBasic: FC = () => (
	<KolForm className="grid gap-4">
		<KolInputText
			_id=""
			_hint={HINT_MSG}
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
			_on={{
				onBlur: console.log,
				onChange: console.log,
				onClick: console.log,
				onFocus: console.log,
			}}
			_hideLabel
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
			_id=""
			_error={ERROR_MSG}
			_placeholder="Mit Icons"
			_label="Suche"
			_icon={{
				left: {
					icon: 'codicon codicon-arrow-left',
				},
				right: {
					icon: 'codicon codicon-arrow-right',
				},
			}}
			_hideLabel
			_type="search"
		/>
		<KolInputText _id="" _placeholder="Placeholder" _label="Vorname (text)" _required />
		<KolInputText _id="" _placeholder="Placeholder" _label="Suche (search)" _type="search" />
		<KolInputText _id="vorname" _placeholder="Placeholder" _error={ERROR_MSG} _type="url" _label="URL (url)" />
		<KolInputText _id="" _placeholder="Placeholder" _type="tel" _label="Telefon (tel)" />
		<KolInputText _id="" _placeholder="Placeholder" _read-only _label="Vorname (text, readonly)" />
		<KolInputText _id="" _value="Value" _read-only _label="Vorname (text, readonly)" />
		<KolInputText _id="" _placeholder="Placeholder" _disabled _label="Vorname (text, disabled)" />
		<KolInputText _id="" _value="Value" _disabled _label="Vorname (text, disabled)" />
	</KolForm>
);

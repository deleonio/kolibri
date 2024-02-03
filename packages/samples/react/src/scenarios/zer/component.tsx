import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import { faker } from '@faker-js/faker/locale/de';
import FINANZAEMTER from 'finanzamt/data/finanzaemter.json';
import { KolAbbr, KolButton, KolDetails, KolForm, KolHeading, KolInputText, KolSelect, KolSpin, KolTable } from '@public-ui/react';
import { DATE_FORMATTER } from '../../shares/formatter';

const NUMBER_OF_ZERS = 100000;

const ZWECKE = [
	'Allgemeine Förderung des demokratischen Staatswesens',
	'Förderung der Erziehung, Volks- und Berufsbildung einschließlich der Studentenhilfe',
	'Förderung der Fürsorge für Strafgefangene und ehemalige Strafgefangene',
	'Förderung der Gleichberechtigung von Frauen und Männern',
	'Förderung der Heimatpflege, Heimatkunde und der Ortsverschönerung',
	'Förderung der Hilfe für politisch, rassistisch oder religiös Verfolgte, für Flüchtlinge, Vertriebene, Aussiedler, Spätaussiedler, Kriegsopfer, Kriegshinterbliebene, Kriegsbeschädigte und Kriegsgefangene, Zivilbeschädigte und Behinderte sowie Hilfe für Opfer von Straftaten; Förderung des Andenkens an Verfolgte, Kriegs- und Katastrophenopfer; Förderung des Suchdienstes für Vermisste, Förderung der Hilfe für Menschen, die auf Grund ihrer geschlechtlichen Identität oder ihrer geschlechtlichen Orientierung diskriminiert werden',
	'Förderung der Jugend- und Altenhilfe',
	'Förderung der Kriminalprävention',
	'Förderung der Religion',
	'Förderung der Rettung aus Lebensgefahr',
	'Förderung der Tierzucht, der Pflanzenzucht, der Kleingärtnerei, des traditionellen Brauchtums einschließlich des Karnevals, der Fastnacht und des Faschings, der Soldaten- und Reservistenbetreuung, des Amateurfunkens, des Freifunks, des Modellflugs und des Hundesports',
	'Förderung der Unterhaltung und Pflege von Friedhöfen und die Förderung der Unterhaltung von Gedenkstätten für nichtbestattungspflichtige Kinder und Föten',
	'Förderung des bürgerschaftlichen Engagements zugunsten gemeinnütziger, mildtätiger und kirchlicher Zwecke',
	'Förderung des Denkmalschutzes und der Denkmalpflege',
	'Förderung des Feuer-, Arbeits-, Katastrophen- und Zivilschutzes sowie Unfallverhütung',
	'Förderung des Naturschutzes und der Landschaftspflege im Sinne des Bundesnaturschutzgesetzes und der Naturschutzgesetze der Länder, des Umweltschutzes, einschließlich des Klimaschutzes, des Küstenschutzes und des Hochwasserschutzes',
	'Förderung des öffentlichen Gesundheitswesens und der öffentlichen Gesundheitspflege',
	'Förderung des Schutzes von Ehe und Familie',
	'Förderung des Sports',
	'Förderung des Tierschutzes',
	'Förderung des Wohlfahrtswesens',
	'Förderung internationaler Gesinnung, der Toleranz auf allen Gebieten der Kultur und des Völkerverständigungsgedankens',
	'Förderung von Kunst und Kultur',
	'Förderung von Verbraucherberatung und Verbraucherschutz',
	'Förderung von Wissenschaft und Forschung',
	'Förderung von Zwecken i. S. des § 52 Abs. 2 Satz 2 AO (mit Mitgliedsbeiträge)',
	'Förderung von Zwecken i. S. des § 52 Abs. 2 Satz 2 AO (ohne Mitgliedsbeiträge)',
	'Kirchliche Zwecke gem. § 54 AO',
	'Mildtätige Zwecke gem. § 53 AO',
	'-',
];

const ZWECK_OPTIONS = ZWECKE.map((zweck) => ({
	label: zweck,
	value: zweck,
}));

// Name der Organisation
// Steuerbegünstigte Zwecke
// PLZ
// Ort
// Straße
// Hausnr./​Adresszusatz
// Postfach
// Zuständiges Finanzamt
// Datum der Erteilung Freistellungsbescheid
// Datum der Erteilung Feststellungsbescheid
type Zuwendungsempfaenger = {
	id: string;
	org: string;
	zweck: string;
	plz: string;
	strasse: string;
	adresszusatz: string;
	ort: string;
	postfach: string;
	zustaedigesFinanzamt: string;
	freistellung: string;
	feststellung: string;
};

console.log(FINANZAEMTER);

function createRandomUser(): Zuwendungsempfaenger {
	return {
		id: faker.string.uuid(),
		org: faker.company.name(),
		zweck: ZWECKE[Math.floor(Math.random() * ZWECKE.length)],
		plz: faker.location.zipCode(),
		strasse: faker.location.street(),
		adresszusatz: '',
		ort: faker.location.city(),
		postfach: '',
		zustaedigesFinanzamt: FINANZAEMTER[Math.floor(Math.random() * FINANZAEMTER.length)].name,
		freistellung: faker.date.past().toISOString(),
		feststellung: faker.date.past().toISOString(),
	};
}

let ZERS: Zuwendungsempfaenger[] = [];
let UNIQUE_ORG: Set<string> = new Set();
let UNIQUE_ORTE: Set<string> = new Set();

export const Zer: FC = () => {
	const [data, setData] = useState<Zuwendungsempfaenger[]>([]);
	const [inputs, setInputs] = useState<Record<string, unknown>>({
		org: '',
		ort: '',
		zweck: [],
	});
	const inputRef = useRef<HTMLKolInputTextElement>(null);

	const [disabled, setDisabled] = useState(false);

	const [results, setResults] = useState<Zuwendungsempfaenger[]>([]);

	const handleSubmit = (zers: Zuwendungsempfaenger[], cb?: () => void) => {
		setDisabled(true);
		const { org, ort, zweck } = inputs;
		const filtered = zers.filter(
			({ org: _org, ort: _ort, zweck: _zweck }) =>
				(org === '' || _org.includes(org as string)) &&
				(ort === '' || _ort.includes(ort as string)) &&
				((zweck as string[]).length === 0 || (zweck as string[]).includes(_zweck)),
		);
		setTimeout(() => {
			setResults(filtered);
			setDisabled(false);
			cb && cb();
		});
	};

	useEffect(() => {
		setDisabled(true);
		setTimeout(() => {
			ZERS = faker.helpers.multiple(createRandomUser, {
				count: NUMBER_OF_ZERS,
			});
			UNIQUE_ORG = new Set(ZERS.map(({ org }) => org));
			UNIQUE_ORTE = new Set(ZERS.map(({ ort }) => ort));
			setData(ZERS);
			handleSubmit(ZERS, () => {
				setTimeout(() => {
					inputRef.current?.focus();
				}, 1000);
			});
		}, 2000);
	}, []);

	const handleChange = (name: string) => (_event: Event, value: unknown) => {
		setInputs((inputs) => ({ ...inputs, [name]: value as string }));
	};

	return (
		<div className="container m-auto grid gap-4">
			<KolDetails _label="Erläuterung zur Demo" _open>
				<p>
					Diese Demo-App zeigt eine alternative Implementierung des Zuwendungsempfängerregisters (ZER) mit{' '}
					<strong>
						<KolAbbr _label="Bibliothek zu Entwicklung von Web-Apps" _tooltipAlign="bottom">
							React
						</KolAbbr>
					</strong>{' '}
					und{' '}
					<strong>
						<KolAbbr _label="Komponentenbibliothek für die Barrierefreiheit" _tooltipAlign="bottom">
							KoliBri
						</KolAbbr>
					</strong>
					. Die Daten werden zufällig generiert und sind nicht echt.
				</p>
				<ul>
					<li>Anzahl Zuwendungsempfänger: {ZERS.length.toLocaleString()}</li>
					<li>Anzahl Orte: {UNIQUE_ORTE.size.toLocaleString()}</li>
					<li>Anzahl steuerbegünstigte Zwecke: {ZWECK_OPTIONS.length.toLocaleString()}</li>
				</ul>
			</KolDetails>
			<hr aria-hidden="true" className="border-t-2 border-solid border-gray-300" />
			<KolHeading _label="Zuwendungsempfängerregister" />
			{/* https://www.digitale-medienwelt.de/mehrspaltige-texte-mit-css3-zeitungslayout/ */}
			<p className="column-count-2 gap-4 m-auto max-w-1024px p-4">
				Das Zuwendungsempfängerregister gem. §Paragraph 60b - neu - AO ist ein bundesweites, zentrales Register, das alle Organisationen umfasst, die
				gemeinnützig und dadurch berechtigt sind Zuwendungsbestätigungen (Spendenquittungen) auszustellen. In der deutschen Steuerverwaltung ist das
				Bundeszentralamt für Steuern für das Zuwendungs- empfängerregister zuständig (§Paragraph 5 Abs. 1 Nr. 47 FVG - neu). Bitte beachten Sie, das Register
				befindet sich aktuell im Aufbau und wird in den nächsten Monaten sukzessive befüllt werden. Es ist daher zum momentanen Zeitpunkt nicht vollständig und
				die Ihnen hier angezeigten Daten bilden ausschließlich den Stand zum Januar 2024 ab. Änderungen werden erst zu einem späteren Zeitpunkt im Register
				eingepflegt.
			</p>
			<KolForm
				className="m-auto max-w-1024px p-4 bg-light-100 border-2 border-solid border-gray-300 rounded-md shadow-md"
				_on={{
					onReset: () => {
						setInputs({
							org: '',
							ort: '',
							zweck: [],
						});
						setTimeout(() => {
							handleSubmit(data);
						}, 500);
					},
					onSubmit: () => handleSubmit(data),
				}}
			>
				<div className="grid gap-4 sm:grid-cols-2">
					<KolInputText
						ref={inputRef}
						_disabled={disabled}
						_label="Organisation"
						_on={{
							onChange: handleChange('org'),
						}}
						// _suggestions={Array.from(UNIQUE_ORG.values())}
						_value={inputs.org as string}
					/>
					<KolInputText
						_disabled={disabled}
						_label="Ort"
						_on={{
							onChange: handleChange('ort'),
						}}
						// _suggestions={Array.from(UNIQUE_ORTE.values())}
						_value={inputs.ort as string}
					/>
					<KolSelect
						_disabled={disabled}
						className="sm:col-span-2"
						_label="Gegenstand"
						_multiple
						_on={{
							onChange: handleChange('zweck'),
						}}
						_options={ZWECK_OPTIONS}
						_rows={3}
						_value={inputs.zweck as string[]}
					/>
					<div className="sm:flex gap-4 sm:col-span-2 items-center">
						<KolButton _disabled={disabled} _label="Suchen" _type="submit" _variant="primary" />
						<KolButton _disabled={disabled} _label="Zurücksetzen" _type="reset" _variant="ghost" />
						<KolSpin _show={disabled} />
						{ZERS.length === 0 && <span>Daten werden geladen...</span>}
					</div>
				</div>
			</KolForm>
			<KolTable
				_label="Suchergebnisse"
				_headers={{
					horizontal: [
						[
							{
								label: 'Name der Organisation',
								key: 'org',
								width: '20em',
							},
							{
								label: 'Steuerbegünstigte Zwecke',
								key: 'zweck',
								width: '25em',
							},
							{
								label: 'PLZ',
								key: 'plz',
								width: '8em',
							},
							{
								label: 'Ort',
								key: 'ort',
								width: '10em',
							},
							{
								label: 'Hausnr./Adresszusatz',
								key: 'strasse',
								width: '15em',
							},
							{
								label: 'Postfach',
								key: 'postfach',
								width: '8em',
							},
							{
								label: 'Zuständiges Finanzamt',
								key: 'zustaedigesFinanzamt',
								width: '15em',
							},
							{
								label: 'Datum der Erteilung Freistellungsbescheid',
								key: 'freistellung',
								width: '10em',
								textAlign: 'center',
								render: (_, __, tupel) => `${DATE_FORMATTER.format(new Date(tupel.freistellung as unknown as string))}`,
							},
							{
								label: 'Datum der Erteilung Feststellungsbescheid',
								key: 'feststellung',
								width: '10em',
								textAlign: 'center',
								render: (_, __, tupel) => `${DATE_FORMATTER.format(new Date(tupel.feststellung as unknown as string))}`,
							},
						],
					],
				}}
				_data={results}
				_pagination
				_minWidth="125em"
			></KolTable>
		</div>
	);
};

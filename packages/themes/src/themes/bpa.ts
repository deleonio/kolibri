import { KoliBri } from '@public-ui/schema';
import { KOL_ICON } from './defaults/icon';

// Presse- und Informationsamt der Bundesregierung
export const BPA = KoliBri.createTheme('bpa', {
	'KOL-ICON': KOL_ICON,
	GLOBAL:
		':host {--primary: #007a89;--secondary: #0b4d59;--normal: #f2f3f4;--danger: #bc0000;--danger-light: rgba(188, 0, 0, 0.1);--ghost: white;--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;--font-size: 16px;--error: var(--danger);--dark-red: #780f2d;--dark-green: #005c45;--red-orange: #c44931;--visited: #5f316e;--secondary-blue: #004b76;--default-letter: #202020;--default-border: #576164;--default-border-hover: var(--secondary);--border-default: #bec5c9;--background-light-grey: #f2f3f4;--kolibri-color-spin-1: blue;--kolibri-color-spin-2: red;--kolibri-color-spin-3: green;--spacing: 0.25em;}:host {font-family: var(--font-family);font-size: var(--font-size);}:host * {box-sizing: border-box;letter-spacing: inherit;font-family: inherit;word-spacing: inherit;hyphens: auto;word-break: break-word;}:host div {background-color: white;}:host button {cursor: pointer;}.hidden {visibility: hidden;height: 0;}',
	'KOL-BUTTON':
		':host button {padding: 7px 20px;border: solid 2px #007a89;border-radius: 27px;color: #fff;font-size: 12px;font-weight: bold;line-height: 2.16667;text-align: center;display: inline-flex;align-items: center;justify-content: center;position: relative;text-transform: uppercase;transition-duration: 0.5s;transition-property: background-color, color, border-color;}:host button.icon-only {padding: 7px 14px;}:host button:hover::before,:host button:focus::before {font-family: "Font Awesome 5 Free" !important;content: "\\f061";font-weight: 900;margin-right: 0.5em;}:host button:focus {outline-color: var(--primary);outline-offset: 2px;outline-style: solid;outline-width: 2px;}button:disabled {cursor: not-allowed;opacity: 0.5;}button.primary,button.primary:disabled:hover {color: white;background-color: var(--primary);border-color: var(--primary);}button.secondary,button.secondary:disabled:hover,button.normal,button.normal:disabled:hover {color: var(--secondary-blue);background-color: var(--normal);border-color: var(--normal);}button.danger,button.danger:disabled:hover {color: white;background-color: var(--danger);border-color: var(--danger);}button.ghost,button.ghost:disabled:hover {color: var(--primary);border-color: var(--primary);background-color: white;}button.primary:hover,button.primary:focus {background-color: var(--secondary);}button.danger:hover,button.danger:focus {background-color: var(--dark-red);}button.ghost:hover,button.ghost:focus {background-color: var(--primary);border-color: var(--primary);color: white;}button.primary:active,button.secondary:active,button.normal:active,button.danger:active,button.ghost:active {outline: 0 !important;}:host button:disabled:hover::before,:host button:disabled:focus::before {display: none;}',
	'KOL-INPUT-TEXT':
		'input:hover,input:focus {border-color: var(--default-border-hover);outline-color: var(--primary) !important;outline-offset: 0;outline-style: solid;outline-width: 1px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;font-weight: bold;}input {width: 100%;color: var(--default-letter);border-width: 1px;border-style: solid;line-height: 24px;font-size: 16px;border-color: var(--kolibri-color-normal);border-radius: 0;background-color: #e8edf2 !important;padding: 0.75em;}input.error {background-color: var(--danger-light) !important;border-color: var(--danger);}input::placeholder {font-style: italic;color: var(--default-border);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}kol-alert {margin-top: var(--spacing);display: block;}.kol-required span::after {content: " *";}',
	'KOL-INPUT-PASSWORD':
		'input:hover,input:focus {border-color: var(--default-border-hover);outline-color: var(--primary) !important;outline-offset: 0;outline-style: solid;outline-width: 1px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;font-weight: bold;}input {width: 100%;color: var(--default-letter);border-width: 1px;border-style: solid;line-height: 24px;font-size: 16px;border-color: var(--kolibri-color-normal);border-radius: 0;background-color: #e8edf2 !important;padding: 0.75em;}input.error {background-color: var(--danger-light) !important;border-color: var(--danger);}input::placeholder {font-style: italic;color: var(--default-border);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}kol-alert {margin-top: var(--spacing);display: block;}.kol-required span::after {content: " *";}',
	'KOL-INPUT-NUMBER':
		'input:hover,input:focus {border-color: var(--default-border-hover);outline-color: var(--primary) !important;outline-offset: 0;outline-style: solid;outline-width: 1px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;font-weight: bold;}input {width: 100%;color: var(--default-letter);border-width: 1px;border-style: solid;line-height: 24px;font-size: 16px;border-color: var(--kolibri-color-normal);border-radius: 0;background-color: #e8edf2 !important;padding: 0.75em;}input.error {background-color: var(--danger-light) !important;border-color: var(--danger);}input::placeholder {font-style: italic;color: var(--default-border);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}kol-alert {margin-top: var(--spacing);display: block;}.kol-required span::after {content: " *";}',
	'KOL-INPUT-EMAIL':
		'input:hover,input:focus {border-color: var(--default-border-hover);outline-color: var(--primary) !important;outline-offset: 0;outline-style: solid;outline-width: 1px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;font-weight: bold;}input {width: 100%;color: var(--default-letter);border-width: 1px;border-style: solid;line-height: 24px;font-size: 16px;border-color: var(--kolibri-color-normal);border-radius: 0;background-color: #e8edf2 !important;padding: 0.75em;}input.error {background-color: var(--danger-light) !important;border-color: var(--danger);}input::placeholder {font-style: italic;color: var(--default-border);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}kol-alert {margin-top: var(--spacing);display: block;}.kol-required span::after {content: " *";}',
	'KOL-INPUT-FILE':
		'input:hover,input:focus {border-color: var(--default-border-hover);outline-color: var(--primary) !important;outline-offset: 0;outline-style: solid;outline-width: 1px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;font-weight: bold;}input {width: 100%;color: var(--default-letter);border-width: 1px;border-style: solid;line-height: 24px;font-size: 16px;border-color: var(--kolibri-color-normal);border-radius: 0;background-color: #e8edf2 !important;padding: 0.75em;}input.error {background-color: var(--danger-light) !important;border-color: var(--danger);}input::placeholder {font-style: italic;color: var(--default-border);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}kol-alert {margin-top: var(--spacing);display: block;}.kol-required span::after {content: " *";}',
	'KOL-TEXTAREA':
		'textarea:hover,textarea:focus {border-color: var(--default-border-hover);outline-color: var(--primary) !important;outline-offset: 0;outline-style: solid;outline-width: 1px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;font-weight: bold;}textarea.error {background-color: var(--danger-light) !important;border-color: var(--danger);}textarea {width: 100%;color: var(--default-letter);border-width: 1px;border-style: solid;line-height: 24px;font-size: 16px;border-color: var(--kolibri-color-normal);border-radius: 0;background-color: #e8edf2 !important;padding: 0.75em;}textarea::placeholder {color: var(--default-border);}textarea:read-only,textarea:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}.kol-required span::after {content: "*";}kol-alert {margin-top: var(--spacing);display: block;}',
	'KOL-ALERT':
		':host > div {border-width: 2px;border-style: solid;border-radius: 5px;display: flex;width: 100%;overflow: hidden;border-color: transparent;}:host > div.error {border-color: var(--danger);}:host > div.error .icon {background-color: var(--danger);}:host > div.info {border-color: var(--secondary-blue);}:host > div.info .icon {background-color: var(--secondary-blue);}:host > div.success {border-color: var(--dark-green);}:host > div.success .icon {background-color: var(--dark-green);}:host > div.warning {border-color: var(--dark-red);}:host > div.warning .icon {background-color: var(--dark-red);}:host .icon {color: white;display: inline-block;padding: 0 0.25rem;}:host > div > div > .heading {padding: 0 0.25rem;display: inline-block;}:host > div > div > .heading > .icon {margin-left: -0.25rem;margin-right: 0.25rem;border-radius: 0 0 0.25rem 0;}:host > div > div > div:last-child {padding: 0.25rem;}',
	'KOL-HEADING': 'h1,h2,h3,h4,h5,h6 {line-height: 1.5em;margin: 0;padding: 0;}h1 {font-size: 1.2rem;}h2,h3,h4,h5,h6 {font-size: 1.1rem;}',
	'KOL-BADGE':
		':host {display: inline-block;}span {align-items: center;border-radius: 0.3125rem;display: flex;line-height: 1.25rem;gap: 0.5rem;padding: 0.25rem 0.75rem;}',
	'KOL-BUTTON-GROUP': 'div {display: flex;flex-wrap: wrap;gap: 0.5em;}',
	'KOL-INDENTED-TEXT': ':host > div {width: 100%;border-left-style: solid;border-left-width: 0.5em;border-left-color: var(--border-default);padding: 0.5em;}',
	'KOL-LINK':
		'a {color: var(--primary);font-style: normal;line-height: 1.5em;text-decoration-line: none;background-size: 0 0.25ex;font-weight: bold;display: inline;background-image: repeating-linear-gradient(to right, #66ddec, #66ddec);background-repeat: no-repeat;background-position: left 0 bottom 0;text-transform: uppercase;transition: background-size 0.2s ease-in-out, color 0.2s ease-in-out;}a:hover,a:focus {background-size: 100% 0.25ex;font-weight: 700;text-decoration-thickness: 0.125em;outline: none;}a:visited {color: var(--visited);}kol-icon-icofont {padding: 0 0.25em;display: inline-block;}.hidden {display: none;visibility: hidden;}a.skip {left: -99999px;overflow: hidden;position: absolute;z-index: 9999999;}a.skip:focus {background-color: white;box-shadow: 0 0 0.5rem 0.5rem white;left: unset;position: unset;}',
	'KOL-BREADCRUMB':
		'nav {width: 100%;}ul {margin: 0;padding: 0;list-style: none;display: flex;flex-wrap: wrap;}span {line-height: 1.5em;}i[part*="separator"]::before {font-family: "Icofont";font-style: normal;content: "\\ea5d";}',
	'KOL-DETAILS': 'summary {cursor: pointer;display: flow-root;}summary span {text-decoration: underline;}',
	'KOL-SPIN':
		'.spin {display: inline-block;height: 1rem;position: relative;width: 3rem;}.spin span {animation-timing-function: cubic-bezier(0, 1, 1, 0);border: 0.1rem solid rgb(255, 255, 255);border-radius: 50%;height: 0.8rem;width: 0.8rem;top: 0.1rem;position: absolute;}.spin span:nth-child(1) {background-color: #fc0;z-index: 0;animation: 2s ease 0s infinite normal none running spin1;left: 0.1rem;}.spin span:nth-child(2) {background-color: #f00;z-index: 1;animation: 2s ease 0s infinite normal none running spin2;left: 0.1rem;}.spin span:nth-child(3) {background-color: #000;z-index: 1;animation: 2s ease 0s infinite normal none running spin2;left: 1.1rem;}.spin span:nth-child(4) {background-color: #666;z-index: 0;animation: 2s ease 0s infinite normal none running spin3;left: 2.1rem;}@keyframes spin1 {0% {transform: scale(0);}100% {transform: scale(1);}}@keyframes spin2 {0% {transform: translate(0px, 0px);}100% {transform: translate(1rem, 0px);}}@keyframes spin3 {0% {transform: scale(1);}100% {transform: scale(0);}}',
	'KOL-PROGRESS':
		':host progress,:host span {display: block;height: 0px;overflow: hidden;width: 0px;}svg line:first-child,svg circle:first-child {fill: transparent;stroke: #efefef;}svg line:last-child,svg circle:last-child {stroke: var(--secondary);fill: transparent;}progress {display: none;}',
	'KOL-SELECT':
		'select:hover,select:focus {border-color: var(--default-border-hover);outline-color: var(--primary) !important;outline-offset: 0;outline-style: solid;outline-width: 1px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;font-weight: bold;}select.error {background-color: var(--danger-light) !important;border-color: var(--danger);}select {width: 100%;color: var(--default-letter);border-width: 1px;border-style: solid;line-height: 24px;font-size: 16px;border-color: var(--kolibri-color-normal);border-radius: 0;background-color: #e8edf2 !important;padding: 0.75em;}select:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}option {height: 2em;padding: 0.5em;}kol-alert {margin-top: var(--spacing);display: block;}.kol-required span::after {content: "*";}',
	'KOL-INPUT-COLOR':
		'input:hover,input:focus {border-color: var(--default-border-hover);outline-color: var(--primary) !important;outline-offset: 0;outline-style: solid;outline-width: 1px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;font-weight: bold;}input {width: 100%;color: var(--default-letter);border-width: 1px;border-style: solid;line-height: 24px;font-size: 16px;border-color: var(--kolibri-color-normal);border-radius: 0;background-color: #e8edf2 !important;padding: 0.25em;overflow: hidden;height: 3em;}input.error {background-color: var(--danger-light) !important;border-color: var(--danger);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}kol-alert {margin-top: var(--spacing);display: block;}.kol-required span::after {content: "*";}',
	'KOL-ACCORDION':
		':host > div > kol-heading > button {width: 100%;display: flex;align-items: center;overflow: hidden;font-size: inherit;border: 0;padding: 0.25rem 0.5rem;background-color: transparent;}:host button:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}:host > div > kol-heading > button > span {padding-top: 0.1em;}:host > div > kol-heading > button i[part*="icon"] {font-family: "Font Awesome 5 Free" !important;width: 2rem;padding-right: 0.5rem;display: block;}:host > div > kol-heading > button i[part*="close"]::before {content: "\\f139";font-weight: 900;color: var(--secondary);}:host > div > kol-heading > button i[part*="open"]::before {content: "\\f13a";font-weight: 900;color: var(--secondary);}:host > div {width: 100%;height: 100%;display: grid;border-radius: 5px;border: 2px solid var(--border-default);}:host > div[part*="open"] {background-color: #f2f3f4;}:host > div[part*="open"] div[part="header"],:host > div[part*="open"] div[part="content"] {padding: 0 0.5rem 0.5rem 2.5rem;}button {font-weight: inherit;font-size: inherit;line-height: inherit;}',
	'KOL-TABLE':
		':host > div {overflow: auto;}th {font-size: 0.875rem;font-weight: normal;color: var(--secondary);}:host table thead tr:first-child th,:host table thead tr:first-child td {border-width: 0;border-top-width: 1px;border-style: solid;border-color: var(--background-light-grey);}table {width: 100%;}table,:host table thead tr:last-child th,:host table thead tr:last-child td {border-width: 0;border-bottom-width: 1px;border-style: solid;border-color: var(--background-light-grey);}th div {width: 100%;display: flex;gap: 0.5em;align-items: center;}th,td {padding: 0.5em;}th[aria-sort="ascending"],th[aria-sort="descending"] {font-weight: 700;}:host > div:last-child {display: grid;grid-auto-flow: column;align-items: center;}:host > div:last-child > div:last-child {display: grid;grid-auto-flow: column;align-items: center;}.hidden {display: none;}',
	'KOL-NAV':
		'ul {width: 100%;list-style: none;margin: 0px;padding: 0px;}:host div.horizontal > nav > ul {display: flex;}li {height: 100%;width: 100%;padding: 0.5em;}a {align-items: center;border-radius: 0.25em;line-height: 2em;height: 100%;text-decoration: none;background-image: none;padding: 0.25em 0.5em;color: #333;font-weight: bold;text-transform: uppercase;display: flex;position: relative;cursor: pointer;}a:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}i {padding: 0.25em;display: block;}a:hover {box-shadow: 0px 0.125rem 0.5rem 0.125rem rgba(128, 128, 128, 0.5);color: var(--secondary);}a:hover {background-color: var(--background-light-grey);}a:active {outline: none;}a[part*="selected"] {box-shadow: 0px 0.0625rem 0.25rem 0.0625rem rgba(128, 206, 237, 0.5);color: white;background-color: var(--primary);}a > span[class="hidden"] {visibility: hidden;height: 0px;display: none;}:host div > div {margin-top: 0.5rem;width: 100%;text-align: center;}:host div.inline-block {display: inline-block;}',
	'KOL-CARD':
		':host > div {background-color: white;border-color: var(--border-default);border-style: solid;border-width: 1px;border-radius: unset;width: 100%;height: 100%;overflow: hidden;}kol-heading {padding: 0.5rem;display: block;border-bottom-style: solid;border-bottom-color: var(--border-default);border-bottom-width: 1px;}:host > div > div {display: block;padding: 0.5rem;}:host > div > div:last-child {display: block;padding: 0.5rem;border-top-style: solid;border-top-color: var(--border-default);border-top-width: 1px;}',
	'KOL-INPUT-CHECKBOX':
		'/* INPUT */:host input:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;}input {width: 100%;color: var(--default-letter);border-color: var(--default-border);border-width: 2px;border-style: solid;line-height: 24px;font-size: 16px;}input:hover {border-color: var(--default-border-hover);}kol-alert {display: block;width: 100%;}.kol-required span::after {content: "*";} /* CHECKBOX */label {cursor: pointer;display: flex;flex-direction: row;position: relative;grid-gap: calc(2 * var(--spacing));gap: calc(2 * var(--spacing));}label span {margin-top: 0.125rem;}label.kol-required span::after {content: "*";}label input[type="checkbox"] {appearance: none;background-color: white;cursor: pointer;transition: 0.5s;}label input[type="checkbox"].kol-disabled:before {cursor: not-allowed;}label input[type="checkbox"]:before {content: "";cursor: pointer;}label input[type="checkbox"]:checked {background-color: var(--secondary);}label input[type="checkbox"].checkbox {height: calc(6 * var(--spacing));min-width: calc(6 * var(--spacing));width: calc(6 * var(--spacing));}label input[type="checkbox"].checkbox:before {background-color: transparent;display: block;height: calc(6 * var(--spacing));position: relative;width: calc(6 * var(--spacing));}label input[type="checkbox"].checkbox:checked:before {border-right-width: 3px;border-bottom-width: 3px;left: calc(1.5 * var(--spacing) - 2px);top: calc(2.85 * var(--spacing) - 2px);transform: rotate(40deg) translate(-50%, -50%);background-color: transparent;border-width: 0px 3px 3px 0px;border-color: white;border-radius: 1px;border-style: solid;height: calc(3 * var(--spacing));width: calc(1.5 * var(--spacing));}label input[type="checkbox"].checkbox:indeterminate {--tw-bg-opacity: 1;background-color: rgba(242, 242, 242, var(--tw-bg-opacity));}label input[type="checkbox"].checkbox:indeterminate:before {background-color: var(--secondary);height: 0.375rem;top: 0.45rem;left: 0.15rem;width: calc(4 * var(--spacing));}label input[type="checkbox"].switch {min-width: 3.2em;width: 3.2em;height: 1.7em;display: inline-block;position: relative;}label input[type="checkbox"].switch:before {-webkit-transition: 0.5s;-moz-transition: 0.5s;-ms-transition: 0.5s;transition: 0.5;width: 1.2em;height: 1.2em;left: calc(0.25em - 2px);top: calc(0.25em - 2px);box-shadow: 0 0 0.1rem var(--background-light-grey);background-color: var(--secondary);position: absolute;}label input[type="checkbox"].switch:checked:before {-webkit-transform: translateX(1.5em);-moz-transform: translateX(1.5em);-ms-transform: translateX(1.5em);transform: translateX(1.5em);--tw-bg-opacity: 1;background-color: rgba(252, 252, 252, var(--tw-bg-opacity));}label input[type="checkbox"].switch:indeterminate {--tw-bg-opacity: 1;background-color: rgba(242, 242, 242, var(--tw-bg-opacity));}label input[type="checkbox"].switch:indeterminate:before {-webkit-transform: translateX(0.75em);-moz-transform: translateX(0.75em);-ms-transform: translateX(0.75em);transform: translateX(0.75em);}',
	'KOL-INPUT-RADIO':
		'/* INPUT */:host input:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;}input {width: 100%;color: var(--default-letter);border-color: var(--default-border);border-width: 2px;border-style: solid;border-radius: 5px; /* padding: 10px 14px; */line-height: 24px;font-size: 16px;}input:hover {border-color: var(--default-border-hover);}kol-alert {display: block;width: 100%;}.kol-required span::after {content: "*";}/* RADIO */:host fieldset {border: 0px;margin: 0px;padding: 0px;display: grid;gap: 0.25em;}:host fieldset legend {display: block;width: 100%;line-height: 1.5em;}:host fieldset div {cursor: pointer;display: flex;flex-direction: row;gap: 0.5em;margin-top: 0.25em;margin-bottom: 0.25em;align-items: center;position: relative;}:host fieldset div label {cursor: pointer;display: flex;width: 100%;}:host fieldset div label span {margin-top: 0.125em;}:host fieldset div input[type="radio"] {appearance: none;transition: 0.5s;border-radius: 100%;height: calc(6 * var(--spacing));min-width: calc(6 * var(--spacing));width: calc(6 * var(--spacing));}:host fieldset div input[type="radio"]:before {content: "";cursor: pointer;left: calc(1.5 * var(--spacing) - 2px);top: calc(1.5 * var(--spacing) - 2px);position: relative;border-radius: 100%;display: block;height: calc(3 * var(--spacing));width: calc(3 * var(--spacing));}:host fieldset div input[type="radio"]:checked:before {box-shadow: 0 0 0.1rem black;background-color: var(--secondary);}:host fieldset div input[type="radio"]:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}',
	'KOL-LINK-GROUP':
		'nav {background-color: white;}ul {list-style: none;margin: 0px;padding: 0px;}nav.horizontal ul {display: flex;flex-wrap: wrap;}li {margin-left: 1rem;margin-right: 0.5rem;}li.list-none {list-style-type: none !important;margin-left: 0;}',
	'KOL-TOAST':
		':host > div {display: fixed;top: 0;left: 0;width: 100%;height: 0;z-index: 50;}:host > div > kol-alert {display: block;padding: 1em;margin: auto;max-width: 750px;}',
});

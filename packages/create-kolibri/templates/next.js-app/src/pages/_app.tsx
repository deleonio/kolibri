import '../style.css';
import '../style.scss';

import App from 'next/app';
import React from 'react';

import { register } from '@public-ui/components';
import { applyPolyfills, defineCustomElements } from '@public-ui/components/dist/loader';
import { ITZBund } from '@public-ui/themes';

class RootApp extends App {
	componentDidMount() {
		void applyPolyfills()
			.then(() => {
				return register(ITZBund, []).then(() => {
					void defineCustomElements(window);
				});
			})
			.catch(console.warn);
	}

	render() {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const { Component, pageProps } = this.props;
		return (
			<>
				<Component {...pageProps} />
			</>
		);
	}
}

export default RootApp;

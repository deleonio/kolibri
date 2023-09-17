module.exports = {
	env: {
		es6: true,
		node: true,
	},
	root: true,
	extends: ['eslint:recommended'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		babelOptions: {
			babelrc: false,
			configFile: false,
			importAttributes: true,
			// your babel options
			presets: ['@babel/preset-env'],
		},
		requireConfigFile: false,
	},
	plugins: ['no-loops'],
};

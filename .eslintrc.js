module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:@next/next/recommended', 'plugin:react/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react','@next/eslint-plugin-next'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': 0,
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'react/react-in-jsx-scope': 'off',
		//missing props validation rule
		'react/prop-types': 'off',
		'@next/next/no-img-element': 'off'
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}

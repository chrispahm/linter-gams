module.exports = {
	'env': {
		'es6': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'sourceType': 'module'
	},
	'globals': {
		'atom': true
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}

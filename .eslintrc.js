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
		'atom': true,
    'document': true
	},
	'rules': {
		'indent': [
			'error',
			2
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
		],
    'no-useless-escape': 'off'
	}
}

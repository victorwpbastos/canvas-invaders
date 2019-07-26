module.exports = {
	"root": true,
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	},
	"parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "module"
	},
	"extends": [
		'eslint:recommended'
	],
	"rules": {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': ['error', 'tab', { "SwitchCase": 1 }],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'arrow-parens': ['error', 'as-needed'],
		'comma-dangle': ['error', 'never'],
		'array-bracket-spacing': ['error', 'never', { 'objectsInArrays': true, 'arraysInArrays': true }],
		'block-spacing': ['error', 'always'],
		'curly': ['error', 'all'],
		// 'array-bracket-newline': ['error', { 'multiline': true, 'minItems': 5 }],
		// 'array-element-newline': ['error', { 'multiline': true, 'minItems': 5 }],
		// 'function-paren-newline': ['error', { 'minItems': 5 }],
		'object-curly-spacing': ['error', 'always'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'semi-spacing': ['error', {'before': false, 'after': true}],
		'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
		'space-infix-ops': 'error',
		'semi-style': ['error', 'last'],
		'linebreak-style': ['error', 'unix'],
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
		'no-trailing-spaces': 'error',
		'eol-last': ['error', 'never']
	}
};
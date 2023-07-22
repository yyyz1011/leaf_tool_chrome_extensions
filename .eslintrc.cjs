module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		// 新增，必须放在最后面
		'plugin:prettier/recommended'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-explicit-any': ['off'],
		'vue/multi-word-component-names': 'off',
		indent: ['error', 'tab'],
		'prefer-const': 0,
		'space-before-function-paren': 0
	}
};

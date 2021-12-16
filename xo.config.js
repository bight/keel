module.exports = {
	rules: {
		'no-warning-comments': [2, {
			terms: [
				'fixme',
			],
		}],
	},
	overrides: [
		{
			files: [
				'build-scripts.js',
				'*.config.js',
				'src/**/*.11ty.js',
				'src/filters/*.js',
				'src/shortcodes/*.js',
				'src/transforms/*.js',
			],
			rules: {
				'unicorn/prefer-module': 0,
			},
		},
	],
};

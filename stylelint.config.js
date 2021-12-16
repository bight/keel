module.exports = {
	extends: 'stylelint-config-xo-scss',
	plugins: 'stylelint-order',
	rules: {
		'order/order': [
			'custom-properties',
			'declarations',
		],
		'order/properties-alphabetical-order': true,
		'selector-max-universal': 2,
	},
};

const htmlmin = require('html-minifier');

module.exports = (value, outputPath) => {
	if (outputPath && outputPath.includes('.html')) {
		const minified = htmlmin.minify(value, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true,
			minifyCSS: true
		});
		return minified;
	}

	return value;
};

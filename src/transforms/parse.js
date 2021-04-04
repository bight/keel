const {parseHTML} = require('linkedom');

module.exports = (value, outputPath) => {
	if (outputPath && outputPath.includes('.html')) {
		const {document} = parseHTML(value);

		const images = [...document.querySelectorAll('main img')];

		if (images.length > 0) {
			for (const image of images) {
				image.setAttribute('loading', 'lazy');
			}
		}

		return '<!DOCTYPE html>\r\n' + document.documentElement.outerHTML;
	}

	return value;
};

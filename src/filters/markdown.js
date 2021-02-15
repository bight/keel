const MarkdownIt = require('markdown-it');

module.exports = value => {
	const md = new MarkdownIt({
		html: true,
		breaks: true,
		linkify: true
	});

	return md.render(value);
};

const slugify = require('slugify');

module.exports = string => slugify(string, {
	replacement: '-',
	lower: true,
	strict: true,
});

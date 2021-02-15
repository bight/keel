const fs = require('fs');
const markdownFilter = require('./src/filters/markdown.js');
const slugFilter = require('./src/filters/slug.js');
const minifyTransform = require('./src/transforms/minify.js');

module.exports = function (config) {
	config.addFilter('markdown', markdownFilter);
	config.addFilter('slug', slugFilter);

	config.addTransform('minify', minifyTransform);

	config.addPassthroughCopy('./src/admin');
	config.addPassthroughCopy('./src/assets/fonts');
	config.addPassthroughCopy('./src/assets/images');

	config.setBrowserSyncConfig({
		callbacks: {
			ready(error, browserSync) {
				const content = fs.readFileSync('dist/404.html');

				browserSync.addMiddleware('*', (request, response) => {
					response.write(content);
					response.end();
				});
			}
		}
	});

	return {
		dir: {
			input: 'src',
			output: 'dist'
		},
		htmlTemplateEngine: 'njk'
	};
};

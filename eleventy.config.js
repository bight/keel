const fs = require('fs');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

const formateDateFilter = require('./src/filters/format-date.js');
const markdownFilter = require('./src/filters/markdown.js');
const minifyTransform = require('./src/transforms/minify.js');
const slugFilter = require('./src/filters/slug.js');

module.exports = function (config) {
	config.addFilter('markdown', markdownFilter);
	config.addFilter('slug', slugFilter);
	config.addFilter('formatDate', formateDateFilter);

	config.addPlugin(eleventyNavigationPlugin);

	config.addTransform('minify', minifyTransform);

	config.addPassthroughCopy('./src/admin');
	config.addPassthroughCopy('./src/assets/fonts');
	config.addPassthroughCopy('./src/assets/images');

	const now = new Date();
	const livePosts = post => post.date <= now && !post.data.draft;

	config.addCollection('posts', collection => {
		return [
			...collection.getFilteredByGlob('./src/collections/posts/*.md').filter(post => livePosts(post))
		].reverse();
	});

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
		}
	};
};

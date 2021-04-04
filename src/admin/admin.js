/* global CMS, nunjucks, PropTypes */

import formatDateFilter from '../filters/format-date.js';
import markdownFilter from '../filters/markdown.js';
import slugFilter from '../filters/slug.js';

const env = nunjucks.configure();

env.addFilter('dateFilter', formatDateFilter);
env.addFilter('markdown', markdownFilter);
env.addFilter('slug', slugFilter);

const Preview = ({entry, path, context}) => {
	const data = context(entry.get('data').toJS());
	const html = env.render(path, data);
	return <div dangerouslySetInnerHTML={{__html: html}}/>;
};

Preview.propTypes = {
	entry: PropTypes.object.isRequired,
	path: PropTypes.string.isRequired,
	context: PropTypes.func.isRequired
};

CMS.registerPreviewStyle('/assets/styles/main.css');

const Post = ({entry}) => (
	<Preview
		entry={entry}
		path="layouts/post.njk"
		context={({title, author, date, body}) => ({
			previewMode: true,
			title,
			author,
			date,
			content: markdownFilter(body || '')
		})}
	/>
);

Post.propTypes = {
	entry: PropTypes.object.isRequired
};

CMS.registerPreviewTemplate('posts', Post);

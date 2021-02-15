const mix = require('laravel-mix');
const moveFile = require('move-file');

mix
	.setPublicPath('dist/assets')
	.js('./src/assets/scripts/main.js', 'dist/assets/scripts')
	.sass('./src/assets/styles/main.scss', 'dist/assets/styles');

mix.options({
	processCssUrls: false
});

mix.sourceMaps(false, 'source-map');

if (mix.inProduction()) {
	mix.version();
}

mix.then(() => {
	moveFile.sync('dist/assets/mix-manifest.json', 'src/_data/assets.json');
});

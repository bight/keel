#!/usr/bin/env node
const {build} = require('estrella');

build({
	entry: './src/assets/scripts/main.js',
	outfile: './dist/assets/scripts/main.js',
	bundle: true,
});

build({
	entry: './src/admin/admin.js',
	outfile: './dist/admin/admin.js',
	bundle: true,
	loader: {'.js': 'jsx'},
});

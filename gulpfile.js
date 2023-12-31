/** Variables Declaration */
const {src, dest, parallel, series, watch} = require('gulp');

const browserSync = require('browser-sync').create();
const scss        = require('gulp-sass')(require('sass'));
const prefixer    = require('gulp-autoprefixer');
const clean       = require('gulp-clean');
const imagemin    = require('gulp-imagemin');
const newer       = require('gulp-newer');

/** Functions Declaration */
function $browserSync(){
	browserSync.init({
		server: {baseDir: "app/"},
		notify: false
	});
}

function style(){
	return src('app/scss/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(prefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
	.pipe(dest('app/style'))
	.pipe(browserSync.stream())
}

function cleanImages(){
	return src('app/images/compressed/*.*')
	.pipe(clean())
}

function cleanDist(){
	return src('dist')
	.pipe(clean())
}

function imageMinimize(){
	return src('app/images/source/*.*')
	.pipe(newer('app/images/compressed'))
	.pipe(imagemin())
	.pipe(dest('app/images/compressed'))
}

function watching(){
	watch('app/scss/*.scss', style);
	watch('app/*.html').on('change', browserSync.reload);
}

function copy(){
	return src([
		'app/style/*.css',
		'app/images/compressed/*.*',
		'app/favicons/*.*',
		'app/*.html'
	], {base: 'app'})
	.pipe(dest('dist'))
}

/** Tasks Declaration */
exports.imageMinimize = imageMinimize;
exports.cleanImages = cleanImages;

exports.build   = series(cleanImages, imageMinimize, cleanDist, style, copy);
exports.default = parallel(style, $browserSync, watching);
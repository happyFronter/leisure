var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var config = require('../config')

gulp.task('bower', function() {
	return gulp.src(bowerFiles(), { base: './bower_components' })
		// .pipe(gulp.dest('./public/dependencies'))
		// .pipe(gulp.dest('./public/libs'))
		.pipe(gulp.dest(config.sourceAssets + '/vendor'))
});
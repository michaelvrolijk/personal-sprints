'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('default', function () {
	return gulp.src('app/resources/assets/javascript/index.js')
		.pipe(clean({force: true}))
		.pipe(gulp.dest('dist'));
});
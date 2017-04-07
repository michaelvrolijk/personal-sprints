'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
	return gulp.src('app/index.html')
		.pipe(clean({force: true}))
		.pipe(gulp.dest('build'));
});
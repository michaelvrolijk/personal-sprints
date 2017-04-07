'use strict';

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

gulp.task('cssmin', ['sass'],function () {
	gulp.src('app/resources/assets/css/styles.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/resources/assets/css/'))
		.pipe(connect.reload());
});

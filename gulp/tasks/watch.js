'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch(['app/*.html'], ['html']);
	gulp.watch('app/resources/assets/sass/**/*.scss', ['sass', 'cssmin']);
	gulp.watch('app/resources/assets/js/*.js', ['compress']);
});

gulp.task('html', function () {
	gulp.src('app/*.html')
		.pipe(connect.reload());
});
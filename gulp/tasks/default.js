'use strict';

var gulp = require('gulp');

gulp.task('default', ['clean', 'sass', 'compress', 'cssmin', 'minify-css', 'connect', 'watch']);

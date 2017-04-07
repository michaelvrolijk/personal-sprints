'use strict';

var gulp = require('gulp');

gulp.task('default', ['sass', 'compress', 'cssmin', 'connect', 'watch']);

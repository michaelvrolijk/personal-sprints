'use strict';

module.exports = function(grunt) {

    require('load-grunt-config')(grunt);

    // Register the tasks and their plugins
    grunt.registerTask('default', ['clean', 'copy', 'sass', 'cssmin', 'htmlhint', 'jshint', 'concat', 'uglify', 'connect', 'watch']);
    grunt.registerTask('build', ['clean', 'copy', 'sass', 'cssmin', 'htmlhint', 'jshint', 'concat', 'uglify']);
};

module.exports = {
    options: {
        livereload: true
    },

    js: {
        files: ['app/resources/assets/javascript/*.js', '!app/resources/assets/javascript/base.js'],
        tasks: ['clean:js', 'jshint', 'concat', 'uglify']
    },

    html: {
        files: ['app/*.html', 'app/views/*.html'],
        tasks: ['htmlhint', 'copy:main']
    },

    css: {
        files: ['app/resources/assets/sass/*.scss', 'src/sass/**/*.scss'],
        tasks: ['clean:css', 'sass', 'cssmin']
    }
};
module.exports = {
    options: {
        livereload: true
    },

    js: {
        files: ['app/resources/assets/javascript/*.js'],
        tasks: ['jshint', 'uglify']
    },

    html: {
        files: ['app/*.html', 'app/views/*.html'],
        tasks: ['htmlhint', 'copy:main']
    },

    css: {
        files: ['app/resources/assets/sass/*.scss', 'src/sass/**/*.scss'],
        tasks: ['sass', 'cssmin']
    }
};
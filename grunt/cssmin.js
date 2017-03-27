module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: 'app/resources/assets/css',
            src: '*.css',
            dest: 'build/css',
            ext: '.min.css'
        }]
    }
};
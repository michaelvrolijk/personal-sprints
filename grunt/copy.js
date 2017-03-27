module.exports = {
    main: {
        files: [{
            expand: true,
            cwd: 'app/',
            src: ['index.html'],
            dest: 'build/',
            filter: 'isFile'
        }]
    },
    views: {
        files: [{
            expand: true,
            cwd: 'app/',
            src: ['views/*.html'],
            dest: 'build/',
            filter: 'isFile'
        }]
    }
};
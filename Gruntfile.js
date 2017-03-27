'use strict';

module.exports = function(grunt) {

    var API_TINYPNG = "SutUmv-nqF13qdPwiC0jYsJtgfcPm9Oi";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 6001,
                    base: 'build',
                    livereload: true
                }
            }
        },

        watch: {
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
        },

        jshint: {
            files: ['app/resources/assets/javascript/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        htmlhint: {
            build: {
                options: {
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true
                },
                src: ['app/*.html', 'app/views/*.html']
            }
        },

        sass: {
            dist: {
                files: {
                    'app/resources/assets/css/style.css' : 'app/resources/assets/sass/*.scss'
                }
            }
        },

        tinypng: {
            options: {
                apiKey: API_TINYPNG
            },
            compress: {
                expand: true,
                src: '*.png',
                cwd: 'app/resources/assets/images/',
                dest: 'build/images/',
                ext: '.png'
            }
        },

        clean: {
            build: {
                src: [ 'build' ]
            }
        },

        copy: {
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
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/resources/assets/css',
                    src: '*.css',
                    dest: 'build/css',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            build: {
                files: {
                    'build/javascript/base.min.js': ['app/resources/assets/javascript/**/*.js']
                }
            }
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-tinypng');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-htmlhint');

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // Register the tasks and their plugins
    grunt.registerTask('default', ['clean', 'copy', 'sass', 'cssmin', 'htmlhint', 'jshint', 'uglify', 'connect', 'watch']);
    grunt.registerTask('build', ['clean', 'copy', 'sass', 'cssmin', 'htmlhint', 'jshint', 'uglify',  'jshint'])
};

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
                    base: 'app',
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
                tasks: ['jshint']
            },

            html: {
                files: ['app/*.html', 'app/views/*.html'],
                tasks: ['htmlhint']
            },

            css: {
                files: ['app/resources/assets/sass/*.scss', 'src/sass/**/*.scss'],
                tasks: ['sass']
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
                    'build/css/style.css' : 'app/resources/assets/sass/*.scss'
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
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-tinypng');
    grunt.loadNpmTasks('grunt-contrib-clean');


    // Register the tasks and their plugins
    grunt.registerTask('default', ['clean', 'sass', 'htmlhint', 'jshint', 'connect', 'watch']);
    grunt.registerTask('build', ['sass', 'htmlhint', 'jshint', 'tinypng'])
};

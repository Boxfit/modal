module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
            },
            modal: {
                files: {
                    './js/modal.min.js': ['./js/modal.js']
                }
            }
        },
        jshint: {
            options: {
                ignores: ['./js/modal.min.js']
            },
            files: ['*.js']
        },
        myth: {
            dist: {
                files: {
                    './css/modal.css': './css/myth/modal.css',
                    './css/modal-theme-default.css': './css/myth/modal-theme-default.css',
                    './css/modal-theme-plain.css': './css/myth/modal-theme-plain.css'
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
            },
            minify: {
                files: {
                    'css/modal.min.css': ['css/modal.css'],
                    'css/modal-theme-default.min.css': ['css/modal-theme-default.css'],
                    'css/modal-theme-plain.min.css': ['css/modal-theme-plain.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-myth');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', ['uglify', 'myth', 'cssmin']);
    grunt.registerTask('css', ['myth', 'cssmin']);
};

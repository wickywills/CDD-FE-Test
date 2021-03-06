module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        path: '',
        less: {
            development: {
                options: {
                    paths: ["less"],
                    compress: true,
                    strictMath: true,
                    sourceMap: false,
                },
                files: {
                    "<%= path %>style.css": "<%= path %>style.less",
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/jquery.smartresize.js',
                    'js/jquery.scrollify.min.js',
                    'js/custom.js',
                    'js/responsive.js'],
                dest: 'js/custom.concat.js',
            },
        },
        uglify: {
            my_target: {
                files: {
                    'js/custom.min.js': ['js/custom.concat.js']
                }
            }
        },
        watch: {
            compile: {
                files: ['**/*.html', '<%= path %>less/**/*.less', '<%= path %>js/**/*.js', '!<%= path %>js/custom.min.js', '!<%= path %>js/custom.concat.js'],
                tasks: ['less', 'concat', 'uglify'],
                options: {
                    atBegin: true,
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['less', 'uglify']);

};

module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'assets/js/*.js'
            ]
        },

        concat: {   
            dist: {
                src: [
                    'assets/js/libs/*.js',
                    'assets/js/*.js',
                    'assets/js/_*.js'
                ],
                dest: 'assets/js/build/scripts.js',
            }
        },

        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: {
                'assets/css/main.css': 'assets/scss/main.scss'
            }
          }
        },

        svgmin: {
            options: {
                plugins: [
                    {
                        removeViewBox: false
                    }, {
                        removeUselessStrokeAndFill: false
                    }
                ]
            },
            
            dist: {
                expand: true,
                cwd: 'assets/img/svg-raw',
                src: ['*.svg'],
                dest: 'assets/img/svg-min',
                ext: '.min.svg'
            }
        },

        svgstore: {
            options: {
                prefix : 'svg-',
                cleanup: ['fill', 'style'],
                svg: { 
                    viewBox : '0 0 100 100',
                    xmlns: 'http://www.w3.org/2000/svg'
                }
            },
            default : {
                files: {
                    'views/partials/svg-defs.svg': ['assets/img/svg-min/*.svg'],
                }
            }
        },

        watch: {
            scripts: {
                files: ['assets/js/*.js', 'assets/**/*.scss'],
                tasks: ['concat', 'sass', 'jshint'],
                options: {
                    spawn: false,
                },
            },

            sass: {
                files: ['assets/css/*.scss', 'assets/css/*/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            },

            livereload: {
		        // Browser live reloading
		        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
		        options: {
		          livereload: true
		        },
		        files: [
                    'assets/css/main.css',
                    'assets/js/build/scripts.js',
                    '*.twig'
		        ]
		    }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-svgmin');
    
    // Register tasks
    grunt.registerTask('default', [
        'sass',
        'concat',
        'jshint',
        'svgstore',
        'svgmin'
      ]);

    grunt.registerTask('svgs', [
        'svgmin',
        'svgstore'
    ]);
};
module.exports = function(grunt) {

    // Load all tasks
    require('load-grunt-tasks')(grunt);

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'assets/js/*.js',
            ]
        },

        concat: {   
            dist: {
                src: [
                    'bower_components/FitVids/jquery.fitvids.js',
                    'assets/js/libs/*.js',
                    'assets/js/*.js',
                    'assets/js/_*.js'
                ],
                dest: 'assets/js/build/scripts.js',
            }
        },

        uglify: {
            dest: {
                files: {
                    'assets/js/build/scripts.min.js': ['assets/js/scripts.js']
                }
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

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
            },
            
            dev: {
                options: {
                    map: {
                        prev: 'assets/css/'
                    }
                },
            
                src: 'assets/css/main.min.css'
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            
            css: {
                src: 'assets/css/main.css',
                dest: 'assets/css/main.min.css'
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
    
    // Register tasks
    grunt.registerTask('default', [
        'sass',
        'concat',
        'uglify',
        'jshint',
        'svgstore',
        'svgmin'
      ]);

    grunt.registerTask('build', [
        'autoprefixer:dev',
        'cssmin'
    ]);        
    
    grunt.registerTask('svgs', [
        'svgmin',
        'svgstore'
    ]);
};
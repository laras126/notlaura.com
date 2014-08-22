module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'assets/js/libs/*.js',
                    'assets/js/*.js'
                ],
                dest: 'assets/js/build/production.js',
            }
        },

        uglify: {
            build: {
                src: 'assets/js/build/production.js',
                dest: 'assets/js/build/production.min.js'
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'assets/scss',
                    cssDir: 'assets/css',
                    require: ['susy', 'breakpoint'],
                    outputStyle: 'compressed'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['assets/**/*.{png,jpg,gif}'],
                    dest: 'assets/images/build/'
                }]
            }
        },

        svgmin: {        

            options: {                                plugins: [
                  { removeViewBox: false },
                  { removeUselessStrokeAndFill: false }
                ]
            },

            dist: {                                         
                files: {                                    
                    // I am a tard and can't figure out file paths so am 
                    // just listing the files since there aren't many of them
                   'assets/images/build/site/svg/we-fish.svg': 'images/site/svg/we-fish.svg',
                   'assets/images/build/site/svg/you-fish.svg': 'images/site/svg/you-fish.svg',
                   'assets/images/build/site/svg/me-fish.svg': 'images/site/svg/me-fish.svg',
                   'assets/images/build/site/svg/deliver-fish.svg': 'images/site/svg/deliver-fish.svg',
                }

            }
        },

        version: {
            assets: {
                files: {
                    'path/to/target.php': ['path/to/style.css', 'path/to/scripts.js']
                }
            }
        },

        watch: {
            scripts: {
                files: ['assets/js/*.js', 'assets/**/*.scss'],
                tasks: ['concat', 'uglify', 'compass'],
                options: {
                    spawn: false,
                },
            },

            css: {
                files: ['assets/css/*.scss'],
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
                  'assets/css/*.css',
                  'assets/js/*.js',
                  'a*.php'
                ]
            },

        }

    });

    grunt.loadNpmTasks('grunt-wp-assets');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify' );
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-svgmin');
    
    grunt.registerTask('default', ['svgmin']);

    

};
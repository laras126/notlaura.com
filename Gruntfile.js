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
                dest: 'assets/js/build/scripts.js',
            }
        },

        uglify: {
            build: {
                files: {
                    'assets/js/build/scripts.min.js': ['assets/js/build/scripts.js']
                }
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'assets/scss',
                    cssDir: 'assets/css',
                    require: ['susy', 'breakpoint'],
                    outputStyle: 'expanded'
                }
            }
        },

        // Using CSS min as well as Compass so there is a non-minified
        // stylesheet for development. Wasn't aware of a way to output
        // minified and non-minified fils via compass.
        // Maybe it's not necessary, but I want to!
        cssmin: {
            minify: {
                expand: true,
                cwd: 'assets/css/',
                src: ['main.css', '!main.min.css'],
                dest: 'assets/css/',
                ext: '.min.css'
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

        // svgmin: {        
        //     options: {                                
        //         plugins: [
        //             { removeViewBox: false },
        //             { removeUselessStrokeAndFill: false }
        //         ]
        //     },
        //     dist: {                                         
        //         files: {                                    
        //             // I am a tard and can't figure out file paths so am 
        //             // just listing the files since there aren't many of them
        //            'assets/images/build/site/svg/we-fish.svg': 'images/site/svg/we-fish.svg',
        //            'assets/images/build/site/svg/you-fish.svg': 'images/site/svg/you-fish.svg',
        //            'assets/images/build/site/svg/me-fish.svg': 'images/site/svg/me-fish.svg',
        //            'assets/images/build/site/svg/deliver-fish.svg': 'images/site/svg/deliver-fish.svg',
        //         }
        //     }
        // },

        // So, I was wondering about style.{hash}.min.css vs style.css?v={hash}
        // And looks like the former is preferred"
        // http://webmasters.stackexchange.com/questions/5075/whats-the-best-way-to-version-css-and-js-urls
        // Interesting!
        version: {
            assets: {
                options: {
                    algorithm: 'sha1',
                    length: 4,
                    format: false,
                    rename: false,
                    manifest: 'assets/manifest.json',
                },
                files: {
                    'lib/bones.php': ['assets/css/main.min.css', 'assets/js/build/scripts.min.js']
                },
            }
        },

        watch: {
            scripts: {
                files: ['assets/js/*.js', 'assets/**/*.scss', 'Gruntfile.js'],
                tasks: ['concat', 'compass', 'version', 'cssmin', 'uglify'],
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
                  '*.php',
                ]
            },

        }

    });

    grunt.loadNpmTasks('grunt-wp-assets');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-svgmin');
    
    grunt.registerTask('default', ['svgmin', 'imagemin']);

    

};
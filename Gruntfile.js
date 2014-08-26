module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'assets/js/libs/*.js',
                    'assets/js/*.js',
                    'bower_components/velocity/jquery.velocity.js'
                ],
                dest: 'assets/js/scripts.js',
            }
        },

        uglify: {
            build: {
                files: {
                    'assets/js/scripts.min.js': ['assets/js/scripts.js']
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

        svgmin: {        
            options: {                                
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {                                         
                files: [{                       
                            expand: true,
                            cwd: 'assets/images/site/svg/', 
                            dest: 'assets/images/build/site/svg/',
                            src: ['**/**/**/**/*.svg'],
                            ext: '.min.svg'
                        }]
            }
        },

        // So, I was wondering about style.{hash}.min.css vs style.css?v={hash}
        // And looks like the former is preferred"
        // http://webmasters.stackexchange.com/questions/5075/whats-the-best-way-to-version-css-and-js-urls
        // Interesting!
        version: {
            assets: {
                options: {
                    algorithm: 'sha1',
                    length: 4,
                    manifest: 'assets/manifest.json',
                },
                files: {
                    'lib/bones.php': ['assets/css/main.min.css', 'assets/js/scripts.min.js']
                },
            }
        },

        clean: {
            roots: [
                '!assets/{css,js}/{main,scripts}.min.{css,js}',
                'assets/{css,js}/{main,scripts}.*.min.{css,js}'
            ]
        },

        autoprefixer: {
            dist: {
                files: {
                    'assets/css/main.css': 'assets/css/main.min.css'
                }
            }
        },

        watch: {
            scripts: {
                files: ['assets/js/*.js', 'assets/**/*.scss', 'Gruntfile.js'],
                tasks: ['compass', 'concat', 'uglify', 'version', 'cssmin'],
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
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-svgmin');
    
    grunt.registerTask('default', ['svgmin', 'imagemin']);
    grunt.registerTask('build', ['uglify', 'imagemin', 'svgmin', 'version', 'clean', 'cssmin']);

    

};
module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'js/libs/*.js',
                    'js/*.js'
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        // imagemin: {
        //     dynamic: {
        //         files: [{
        //             expand: true,
        //             cwd: 'images/',
        //             src: ['**/*.{png,jpg,gif}'],
        //             dest: 'images/build/'
        //         }]
        //     }
        // }


        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css',
                    require: 'susy',
                }
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js', '**/*.scss'],
                tasks: ['concat', 'uglify', 'compass'],
                options: {
                    spawn: false,
                },
            },

            css: {
                files: ['css/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            }
        },

    

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify' );
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    grunt.registerTask('default', ['watch']);

    

};